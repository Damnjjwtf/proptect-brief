"""Validate the public Gig feed and its atomic latest pointer; no network or dependencies."""
import hashlib
import json
import re
from datetime import date, datetime
from pathlib import Path
from urllib.parse import urlsplit


def require(ok, message):
    if not ok:
        raise ValueError(message)


def day(value):
    require(isinstance(value, str) and date.fromisoformat(value).isoformat() == value, 'Invalid date')
    return value


def nonempty(obj, keys):
    for key in keys:
        require(isinstance(obj.get(key), str) and bool(obj[key].strip()), f'Missing text: {key}')


def validate_report(report):
    require(report.get('schema_version') == 1 and report.get('producer') == 'gig', 'Unknown schema/producer')
    day(report['date'])
    require(report.get('timezone') == 'America/Los_Angeles', 'Wrong report timezone')
    require(datetime.fromisoformat(report['generated_at']).utcoffset() is not None, 'Timestamp needs timezone')
    require(report.get('status') in {'new_findings', 'no_new_findings', 'bootstrap'}, 'Invalid status')
    nonempty(report, ['summary'])
    items = report.get('items')
    require(isinstance(items, list) and len(items) <= 5, 'Expected zero to five items')
    if report['status'] == 'no_new_findings':
        require(not items, 'Empty-result report must be empty')
    if report['status'] == 'new_findings':
        require(bool(items), 'New findings needs an item')
    seen = set()
    for item in items:
        nonempty(item, ['id', 'title', 'signal', 'evidence', 'limits', 'why_it_matters', 'proposed_test'])
        require(re.fullmatch(r'[a-z0-9-]+', item['id']) is not None, 'Unsafe item id')
        require(item['id'] not in seen, 'Duplicate item id')
        seen.add(item['id'])
        sources = item.get('sources')
        require(isinstance(sources, list) and bool(sources), 'An item needs sources')
        for source in sources:
            nonempty(source, ['url', 'label'])
            url = urlsplit(source['url'])
            require(url.scheme == 'https' and bool(url.hostname) and not url.username and not url.password,
                    'Source needs public HTTPS URL without credentials')
            require(source.get('kind') in {'primary', 'reporting', 'historical_reference'}, 'Invalid source kind')
            require(day(source['checked_at']) <= report['date'], 'Source check cannot be after report date')
            require('published_at' in source, 'Missing publication date/null')
            if source['published_at'] is not None:
                day(source['published_at'])


def validate(root):
    folder = root / 'research' / 'gig'
    manifest = json.loads((folder / 'latest.json').read_text())
    require(manifest.get('schema_version') == 1, 'Unknown manifest schema')
    expected = f"research/gig/{day(manifest['date'])}.json"
    require(manifest.get('path') == expected, 'Unsafe or mismatched manifest path')
    raw = (root / expected).read_bytes()
    require(hashlib.sha256(raw).hexdigest() == manifest.get('sha256'), 'Hash mismatch')
    report = json.loads(raw)
    validate_report(report)
    require(report['date'] == manifest['date'] and report['status'] == manifest.get('status'), 'Pointer mismatch')
    for path in folder.glob('????-??-??.json'):
        historical = json.loads(path.read_text())
        validate_report(historical)
        require(path.stem == historical['date'], 'Report filename/date mismatch')
    return report


if __name__ == '__main__':
    result = validate(Path(__file__).resolve().parents[2])
    print(f"Valid Gig feed: {result['date']} ({result['status']}, {len(result['items'])} items)")
