import copy
import hashlib
import json
from pathlib import Path
import tempfile
import unittest
from validate import validate, validate_report

ROOT = Path(__file__).resolve().parents[2]
BASE = json.loads((ROOT / 'research/gig/2026-11-06.json').read_text())


class FeedTests(unittest.TestCase):
    def test_current_manifest(self):
        self.assertEqual(validate(ROOT)['status'], 'bootstrap')

    def test_empty_day(self):
        value = copy.deepcopy(BASE)
        value.update(status='no_new_findings', items=[])
        validate_report(value)

    def test_new_findings_require_items(self):
        value = copy.deepcopy(BASE)
        value.update(status='new_findings', items=[])
        with self.assertRaises(ValueError):
            validate_report(value)

    def test_new_findings_valid(self):
        value = copy.deepcopy(BASE)
        value['status'] = 'new_findings'
        validate_report(value)

    def test_duplicate_id(self):
        value = copy.deepcopy(BASE)
        value['items'].append(copy.deepcopy(value['items'][0]))
        with self.assertRaises(ValueError):
            validate_report(value)

    def test_source_required(self):
        value = copy.deepcopy(BASE)
        value['items'][0]['sources'] = []
        with self.assertRaises(ValueError):
            validate_report(value)

    def test_unsafe_source(self):
        for url in ['http://example.com/', 'https://user:secret@example.com/']:
            value = copy.deepcopy(BASE)
            value['items'][0]['sources'][0]['url'] = url
            with self.assertRaises(ValueError):
                validate_report(value)

    def test_future_check(self):
        value = copy.deepcopy(BASE)
        value['items'][0]['sources'][0]['checked_at'] = '2026-11-07'
        with self.assertRaises(ValueError):
            validate_report(value)

    def test_naive_timestamp(self):
        value = copy.deepcopy(BASE)
        value['generated_at'] = '2026-11-06T08:00:00'
        with self.assertRaises(ValueError):
            validate_report(value)

    def test_manifest_tampering(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            folder = root / 'research/gig'
            folder.mkdir(parents=True)
            raw = json.dumps(BASE).encode()
            (folder / '2026-11-06.json').write_bytes(raw)
            manifest = dict(schema_version=1, date=BASE['date'], status=BASE['status'],
                            path='research/gig/2026-11-06.json', sha256=hashlib.sha256(raw).hexdigest())
            (folder / 'latest.json').write_text(json.dumps(manifest))
            validate(root)
            for key, value in [('sha256', '0'*64), ('path', '../../secret'), ('status', 'new_findings')]:
                bad = dict(manifest, **{key: value})
                (folder / 'latest.json').write_text(json.dumps(bad))
                with self.assertRaises(ValueError):
                    validate(root)


if __name__ == '__main__':
    unittest.main()
