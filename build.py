"""Build the latest scouting report and dated archive from Muse editions."""
import argparse
from datetime import date
from html import escape
import json
from pathlib import Path
import re
from urllib.parse import urlsplit

ROOT = Path(__file__).resolve().parent
FIRST_DATE = '2026-10-27'
TITLE = 'Proptech Scouting Report'
CATEGORIES = {'pipes', 'ai', 'agent', 'policy'}


def date_label(value):
    day = date.fromisoformat(value)
    if day.isoformat() != value:
        raise ValueError(f'Use YYYY-MM-DD for {value}')
    return f'{day:%b} {day.day}, {day.year}'


def line(item, key):
    value = item[key]
    if not isinstance(value, str) or not value.strip():
        raise ValueError(f'{key} must be nonempty text')
    return escape(value.strip())


def source_link(source):
    url = urlsplit(source['url'])
    if url.scheme != 'https' or not url.hostname or url.username or url.password:
        raise ValueError('Sources must use HTTPS URLs')
    return (f'<a class="src-link" href="{line(source, "url")}" target="_blank" rel="noopener">'
            f'{line(source, "label")} <span class="arrow">↗</span></a>')


def story_card(story):
    tags = story['tags']
    if not isinstance(tags, list) or not tags or set(tags) - CATEGORIES:
        raise ValueError('Each story needs tags from pipes, ai, agent, policy')
    if not story['sources']:
        raise ValueError('Each story needs a source')
    links = '\n'.join(source_link(source) for source in story['sources'])
    return f'''<article class="card" data-cat="{' '.join(tags)}">
      <h3>{line(story, 'title')}</h3>
      <p class="one-line">{line(story, 'summary')}</p>
      <div class="src-row">{links}</div>
    </article>'''


def edition_html(edition, issue_date, canonical):
    dates = [day['date'] for day in edition['days']]
    if not dates or dates != sorted(set(dates)) or dates[-1] != issue_date:
        raise ValueError('Days must be unique, oldest first, and end on the filename date')
    day_sections, jumps = [], []
    for day in edition['days']:
        label = date_label(day['date'])
        weekday = date.fromisoformat(day['date']).strftime('%A')
        anchor = 'day-' + day['date']
        if not day['stories']:
            raise ValueError(f'{label} needs at least one story')
        cards = '\n'.join(story_card(story) for story in day['stories'])
        jumps.append(f'<a class="jump" href="#{anchor}">{weekday[:3]} {date.fromisoformat(day["date"]).day}</a>')
        day_sections.append(f'''<section class="day" id="{anchor}" data-day>
          <div class="day-head"><h2>{weekday}</h2><span class="day-date">{label}</span></div>
          <div class="cards">{cards}</div>
          <p class="empty-note" data-empty>No stories in this filter for {weekday}.</p>
        </section>''')
    counts = sum(len(day['stories']) for day in edition['days'])
    days = '\n'.join(day_sections)
    navigation = '\n'.join(jumps)
    toolbar = re.search(r'<nav class="toolbar".*?</nav>', canonical, re.S)[0]
    toolbar = re.sub(r'<a class="jump" href="#sun">.*?<a class="jump" href="#tue">[^<]+</a>',
                     lambda _: navigation, toolbar, flags=re.S)
    panels = ''
    openings = edition.get('openings', [])
    if openings:
        rows = ''.join(f'<li><span class="n">{i:02d}</span><span><strong>{line(item, "title")}</strong> — {line(item, "text")}</span></li>'
                       for i, item in enumerate(openings, 1))
        panels += f'<section class="panel" id="openings"><h2>Openings worth a look</h2><ol class="openings">{rows}</ol></section>'
    else:
        toolbar = toolbar.replace('<a class="jump" href="#openings">Openings</a>', '')
    watch = edition.get('watch', [])
    if watch:
        rows = ''.join(f'<li><span class="watch-when">{line(item, "when")}</span><span><strong>{line(item, "title")}</strong> — {line(item, "text")}</span></li>'
                       for item in watch)
        panels += f'<section class="panel" id="watch"><h2>Permission watch &amp; dates</h2><ul class="watch-list">{rows}</ul></section>'
    else:
        toolbar = toolbar.replace('<a class="jump" href="#watch">Dates</a>', '')
    head = canonical.split('<body>', 1)[0]
    script = re.search(r'<script>.*?</script>', canonical, re.S)[0]
    return f'''{head}<body><div class="wrap">
      <header class="hero">
        <p class="byline">Made by Damn JJ for Jessica Branson.</p>
        <p class="eyebrow">{line(edition, 'date_label')}</p>
        <h1><span class="accent">Proptech</span> <span class="keep-together">Scouting&nbsp;Report</span></h1>
        <p class="lede">Real estate tech, scouted weekly — what's out there and where we play.</p>
        <p class="hook">{line(edition, 'hook')}</p>
        <p class="meta-line"><b>{counts}</b> {'story' if counts == 1 else 'stories'} · <b>{len(dates)}</b> {'day' if len(dates) == 1 else 'days'} · <b>30 sec</b> skim · {line(edition, 'briefings')}</p>
      </header>
      <section class="scouting" aria-label="Scouting report">
        <h2 class="section-label">Scouting Report</h2>
        <div class="scouting-item"><span class="scouting-label">Market map</span><p>{line(edition, 'market_map')}</p></div>
        <div class="scouting-item"><span class="scouting-label">Where we play</span><p>{line(edition, 'where_we_play')}</p></div>
      </section>
      <section class="oneline" aria-label="The short version">
        <h2 class="section-label">In one line</h2><p>{line(edition, 'one_line')}</p>
      </section>
      {toolbar}
      {days}
      {panels}
      <footer>Compiled from Damn JJ’s daily briefings. Vendor figures are company claims.</footer>
    </div>{script}</body></html>\n'''


def with_archive_link(page, href):
    return page.replace('<span class="toolbar-label">Jump</span>',
                        f'<span class="toolbar-label">Jump</span>\n            <a class="jump" href="{href}">Archive</a>', 1)


def build(destination):
    canonical = (ROOT / 'index.html').read_text(encoding='utf-8')
    issues = {FIRST_DATE: (canonical, 'Oct 25–27, 2026', 'Briefings #10–#12')}
    for file in sorted((ROOT / 'editions').glob('*.json')):
        try:
            date_label(file.stem)
            if file.stem in issues:
                raise ValueError('This date is already used by an archived edition')
            edition = json.loads(file.read_text(encoding='utf-8'))
            issues[file.stem] = (edition_html(edition, file.stem, canonical),
                                 line(edition, 'date_label'), line(edition, 'briefings'))
        except (ValueError, KeyError, TypeError, AttributeError) as error:
            raise ValueError(f'{file.name}: {error}') from error
    archive = destination / 'archive'
    archive.mkdir(parents=True, exist_ok=True)
    latest = max(issues)
    (destination / 'index.html').write_text(with_archive_link(issues[latest][0], 'archive/'), encoding='utf-8')
    rows = []
    for issue_date in sorted(issues, reverse=True):
        page, label, briefings = issues[issue_date]
        (archive / f'{issue_date}.html').write_text(with_archive_link(page, './'), encoding='utf-8')
        rows.append(f'<article class="card"><h3><a href="{issue_date}.html">{label}</a></h3><p class="one-line">{briefings}</p></article>')
    head = canonical.split('<body>', 1)[0].replace(f'<title>{TITLE}</title>', f'<title>Archive | {TITLE}</title>')
    archive_html = f'''{head}<body><main class="wrap">
      <header class="hero"><p class="byline">Made by Damn JJ for Jessica Branson.</p>
        <h1>Brief archive</h1><p class="lede"><a href="../">Read the latest edition</a></p>
      </header>
      <section class="day" aria-label="Past editions"><div class="cards">{''.join(rows)}</div></section>
    </main></body></html>\n'''
    (archive / 'index.html').write_text(archive_html, encoding='utf-8')
    print(f'Built {len(issues)} edition(s). Latest {latest}.')


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('destination', type=Path)
    build(parser.parse_args().destination)
