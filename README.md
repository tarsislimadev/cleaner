# Cleaner 2D

## Project Overview

This project is a simple 2D simulation or game called "Cleaner". It is built with vanilla JavaScript, HTML, and the Canvas API. The application displays a grid with an agent "A" and several static points "S". The user can plan a path for "A" to visit all the "S" points and then execute the movement step-by-step. The entire logic is contained within `index.js` and the entry point is `index.html`.

## How to Run

This is a simple project with no build process. To run the application:

1.  **Serve with a local HTTP server:**
    Open your terminal in the project directory and run a simple HTTP server. For example, using Python's built-in server:
    ```bash
    python -m http.server
    ```
    Then, open your web browser and navigate to `http://localhost:8000`.

2.  **Open directly in browser:**
    You can also simply open the `index.html` file directly in your web browser.

## Basic Usage

Once the application is loaded in your browser:

*   Click the "plan steps" button to calculate the path for the agent 'A' to visit all 'S' points.
*   Click the "walk" button repeatedly to make the agent 'A' move one step at a time along the planned path.

## Development Notes

*   **Technology Stack:** Vanilla JavaScript, HTML, and Canvas API.
*   **State Management:** The application's state is managed by a global `state` object in `index.js`.
*   **UI & Rendering:** UI elements are created dynamically using the DOM API, and the simulation is rendered on an HTML `<canvas>` element. Animation is controlled via `requestAnimationFrame`.
