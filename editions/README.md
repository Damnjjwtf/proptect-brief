# Muse edition format

Each new edition is one JSON file named for its final day, such as `2026-11-05.json`. Keep story summaries short. Attribute claims, link sources, and explain any unfamiliar terms. The website supplies the design, dates, navigation, filters, and archive links.

Use these fields. The values below illustrate the format.

```json
{
  "date_label": "Nov 5, 2026",
  "briefings": "Briefings #13–#15",
  "hook": "A short line on what changed.",
  "market_map": "How the stories fit together.",
  "where_we_play": "Where JJ and Jess could build or test something.",
  "one_line": "The edition in one sentence.",
  "days": [
    {
      "date": "2026-11-05",
      "stories": [
        {
          "title": "Story headline",
          "summary": "What the source says and what remains uncertain.",
          "tags": ["ai"],
          "sources": [{"label": "Source name", "url": "https://example.com/article"}]
        }
      ]
    }
  ],
  "openings": [{"title": "What to build", "text": "One concrete first test."}],
  "watch": [{"when": "Nov 12", "title": "What to watch", "text": "Why the date matters."}]
}
```

Include the days covered, in chronological order. Each story needs a headline, summary, at least one HTTPS source and at least one category. Categories are `pipes` for listing distribution, `ai` for AI connectors, `agent` for agent tools and `policy` for policy and standards. `openings` and `watch` are optional.
