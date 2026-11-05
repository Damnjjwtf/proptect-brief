# Proptech Scouting Report

Real estate tech, scouted weekly — what's out there and where we play.

Made by Damn JJ for Jessica Branson.

The report covers briefings #10–#12, October 25–27, 2026. It ports Zux’s layout, typography, navigation, filters, and source links, with story summaries and chronological order from JJ’s handoff. The 14 source links include The Real Deal coverage of the Open Real Estate launch, as shown on Muse.

[Canonical report on Muse](https://muse.ai/s/damn-jj-s-real-estate-tech-brief-th650xxxb8nx0h/7K9HWephz27Z6BHvpXKxqLfQooN87ttMLDduLtNfXNY)

Open `index.html` in a browser to read the report. It uses one static HTML file with embedded styles and filters. Manrope loads from Google Fonts when available. There is no build step.

## How Muse publishes an edition

Muse provides the reporting. Add one file at `editions/YYYY-MM-DD.json` using the last day covered in the edition. Use the [edition format](editions/README.md). Leave the original `index.html` in place as the reference and first archived issue.

GitHub Actions validates each submission. Once it reaches `main`, GitHub Pages publishes it to the homepage if it has the newest date and adds a permanent link to the archive. Older issues stay available at `/archive/YYYY-MM-DD.html`.

To preview before publishing, run `python3 build.py _site`, then `python3 -m http.server 8000 --directory _site` and open <http://localhost:8000/>.
