# Gig's daily research handoff

This public feed is an input to Zux's reporting, not an automatically published edition and not the Ask database. Zux's UI and editorial choices stay intact. Do not put client information, unpublished personal material, account details or secrets here.

## Read before publishing

1. Fetch `research/gig/latest.json` from `main`, then fetch its `path` from the **same commit**. Check the file's SHA-256 against `sha256`.
2. Use the report's `date` in `America/Los_Angeles`, not the download date. `status: bootstrap` is historical context, never today's news. `no_new_findings` is a successful empty research run. An old date, missing file, error or no new report means publish normally without claiming fresh Gig research.
3. Read evidence and limits. Vendor statements are vendor claims; proposed tests are hypotheses, not measured demand or approved actions. Recheck source dates and material facts before incorporating them.
4. Deduplicate by source URL and underlying event against your edition and previous editions. Incorporate only useful, genuinely new or materially updated findings. Keep citations and caveats.
5. Record the consumed date, Git commit and included item IDs in your publisher's run log. This is a receipt, not a trigger. Do not add metadata to the edition schema unless the publisher supports it.

The existing `gpt-version/research.json` remains a historical reference. The private Render repo is separate and is not needed to read this feed. Do not change repository permissions or copy private Render data here. Render synchronization and the page/Ask edition pairing are separate work.

## Producer contract

Write `research/gig/YYYY-MM-DD.json` and update `latest.json` **in one commit**. Date is the Pacific research day. Use `generated_at` with an explicit UTC offset and honest `checked_at` dates per source. Read the latest main head before writing, preserve unrelated files and reject a stale expected head. A retry updates the same dated report; Git history retains revisions. Never advance the pointer on an incomplete or failed check.

Daily scope: real-estate technology, MLS/data licensing and distribution, agent workflows, AI connectors, public-data opportunities, and practical Bay Area relevance. Prefer primary sources, substantiate unusual mechanisms and practical tests, and separate facts from inference. Aim for 0–5 high-signal items, not a quota. Check recent editions and earlier Gig files before adding an item. Retain an older source only when clearly labeled context or tied to a genuinely new development.

Required report keys:
- `schema_version`: `1`
- `producer`: `gig`
- `date`: `YYYY-MM-DD` in `America/Los_Angeles`
- `timezone`: `America/Los_Angeles`
- `generated_at`: timezone-aware ISO timestamp
- `status`: `new_findings`, `no_new_findings`, or `bootstrap`
- `summary`: short explanation, including research limits
- `items`: zero to five objects containing `id`, `title`, `signal`, `evidence`, `limits`, `why_it_matters`, `proposed_test`, and `sources`
- Each source: `url` (public HTTPS), `label`, `published_at` (date or null for undated material), `checked_at` (actual verification date), `kind` (`primary`, `reporting`, or `historical_reference`).

Manifest keys: `schema_version`, `date`, `path`, `status`, `sha256`. Hash the exact UTF-8 bytes of the report. The manifest's date/status must match the report.

Run before each commit:

```sh
python3 research/gig/validate.py
python3 -m unittest discover -s research/gig -p 'test_*.py'
```

Use a commit message with `[skip ci]` for feed-only updates so the existing Pages publisher is not unnecessarily rebuilt. Do not modify `index.html`, `editions/`, Ask data, deployment settings, or the publishing workflow as part of research delivery. Any real edition still follows the existing publication process.

## Scheduling and initial state

The initial November 6 file is a bootstrap of three existing November 5 research notes. Those original external sources were **not rechecked during feed setup**. It is not a fresh daily research run. Scheduling is managed separately by Gig; the presence of these files does not establish that an unattended run or Zux consumption has succeeded.

## Short handoff for Zux

Before your morning edition build, read `research/gig/latest.json` and its dated report from the same commit in `Damnjjwtf/proptect-brief`. Verify the hash, date and status. Deduplicate useful findings against your own stories; retain sources, evidence limits and the distinction between facts and proposed tests. Log the consumed commit/date/item IDs. If the feed is missing, stale, bootstrap-only or empty, publish normally without recycling it as fresh news. Keep your UI unchanged.
