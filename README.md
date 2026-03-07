# Open for Settlement

A browser game about trying to colonize the absolute wrong planet.

## Play locally

Open `index.html` in a browser.

## Publish on GitHub Pages

1. Create a new GitHub repository.
2. Upload these files to the repository root:
   - `index.html`
   - `styles.css`
   - `game.js`
   - `home-screen-concept.svg`
   - `creatures-preview.svg`
   - `.nojekyll`
3. In GitHub, open `Settings` -> `Pages`.
4. Under `Build and deployment`, choose `Deploy from a branch`.
5. Select:
   - Branch: `main`
   - Folder: `/ (root)`
6. Save and wait for the Pages URL to appear.

## Notes

- No build step is required.
- This is a static site and works directly on GitHub Pages.

## Multiplayer (LIFE ON KHAROX)

This project now includes a WebSocket multiplayer server:

- `multiplayer-server.js`
- `package.json` (uses `ws`)

Run it locally:

1. Install Node.js (if not installed).
2. In the project folder, run:
   - `npm install`
   - `npm run server`
3. Open the game with a `ws` query parameter:
   - `file:///.../LIFE%20ON%20KHAROX.html?ws=ws://localhost:8080`
   - or `http://localhost/.../LIFE%20ON%20KHAROX.html?ws=ws://localhost:8080`

To play with friends online:

1. Host `multiplayer-server.js` on a Node host (Render, Railway, Fly.io, etc.).
2. Share the game link with:
   - `?ws=wss://YOUR-SERVER-DOMAIN`

If no `ws` URL is provided, the game runs in solo mode.
