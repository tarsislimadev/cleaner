# GEMINI.md

## Project Overview

This project is a simple 2D simulation or game called "Cleaner". It is built with vanilla JavaScript, HTML, and the Canvas API. The application displays a grid with an agent "A" and several static points "S". The user can plan a path for "A" to visit all the "S" points and then execute the movement step-by-step. The entire logic is contained within `index.js` and the entry point is `index.html`.

## Building and Running

This is a simple project with no build process. To run the application, you can serve the current directory with a simple HTTP server and open it in your web browser.

For example, using Python's built-in HTTP server:

```bash
python -m http.server
```

Then, open your web browser and navigate to `http://localhost:8000`.

Alternatively, you can simply open the `index.html` file directly in your web browser.

## Development Conventions

There are no explicit development conventions, but the code follows a simple structure:

*   **State Management:** A global `state` object holds the application's state.
*   **UI:** The UI is created programmatically using the DOM API.
*   **Rendering:** The application uses the Canvas API for rendering the simulation. The animation is handled with `requestAnimationFrame`.
