# Ask the Brief reference for Zux

This folder contains the GPT version of the brief so Zux can bring the Ask feature into the Scouting Report design.

- `index.html`, `styles.css`, and `app.js` show the question box below each entry. In `app.js`, look for `askBox`, `showExchange`, and the form submission handler.
- `server.py` implements `POST /api/ask`, `GET /api/history`, and `DELETE /api/history`. It passes the chosen entry, supporting research, recent conversation and question to OpenAI’s Responses API. It stores successful exchanges in SQLite, grouped by browser and entry.
- `research.json` seeds the source material for answers. Supply the corresponding Muse edition research when integrating the feature.

To run the reference, use Python 3.10 or later. Set `OPENAI_API_KEY` in the server environment and run `python3 server.py` from this folder. Open <http://127.0.0.1:4174/>. The server reads `OPENAI_MODEL` to override its default model and `BRIEF_DATA_DIR` to choose the SQLite directory. API replies require available credit in the OpenAI project.

## Render API for Zux

Base URL: `https://damn-jjs-proptech-brief.onrender.com`

For the October 25–27 report, use `entry_id: "scouting-2026-10-27"`. The server includes the report’s 11 stories, source URLs, and openings. These are the three routes:

| Method and path | Input | Success response |
| --- | --- | --- |
| `POST /api/ask` | JSON with `entry_id` and `question` | `{ "answer": "…" }` |
| `GET /api/history?entry_id=scouting-2026-10-27` | Session header | `{ "messages": [{ "role": "user", "content": "…" }] }` |
| `DELETE /api/history?entry_id=scouting-2026-10-27` | Session header | `{ "cleared": true }` |

Send `X-Brief-Session` with all three requests. Generate 32 random bytes with `crypto.getRandomValues`, encode as 64 lowercase hexadecimal characters, and reuse that value for the browser in local storage. For cross-origin fetches, set `credentials: "omit"` and use `Content-Type: application/json` for the POST. The session value identifies that browser’s history. Keep it in the browser and out of URLs.

The API allows the current GitHub Pages and Muse report origins. If Muse republishes to a different origin, set `BRIEF_ALLOWED_ORIGINS` in Render to the comma-separated list of allowed origins. The hosted server reads `OPENAI_API_KEY` from Render’s Environment settings. SQLite runs at `BRIEF_DATA_DIR=/var/data/brief` on the existing persistent disk. The separate GitHub Pages build serves the Scouting Report.
