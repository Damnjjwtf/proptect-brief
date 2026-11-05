# Ask the Brief reference for Zux

This folder contains the GPT version of the brief so Zux can bring the Ask feature into the Scouting Report design.

- `index.html`, `styles.css`, and `app.js` show the question box below each entry. In `app.js`, look for `askBox`, `showExchange`, and the form submission handler.
- `server.py` implements `POST /api/ask`, `GET /api/history`, and `DELETE /api/history`. It passes the chosen entry, supporting research, recent conversation and question to OpenAI’s Responses API. It stores successful exchanges in SQLite, grouped by browser and entry.
- `research.json` seeds the source material for answers. Supply the corresponding Muse edition research when integrating the feature.

To run the reference, use Python 3.10 or later. Set `OPENAI_API_KEY` in the server environment and run `python3 server.py` from this folder. Open <http://127.0.0.1:4174/>. The server reads `OPENAI_MODEL` to override its default model and `BRIEF_DATA_DIR` to choose the SQLite directory. API replies require available credit in the OpenAI project.

For a hosted integration, keep the OpenAI key in the backend host’s environment. Serve the three `/api` routes from the same origin as the page or explicitly configure an equivalent backend connection. The GitHub Pages build serves the static Scouting Report. This reference is source code for the feature and lives outside the published site output.
