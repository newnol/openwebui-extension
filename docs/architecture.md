# Architecture & File Structure

## Directory Structure
- `AOE/`: Main extension source code.
    - `manifest.json`: Extension configuration (Manifest V3).
    - `background.js`: Service worker for background tasks.
    - `content-bridge.js`: Bridge for content script communication.
    - `content-main.js`: Main content script for page interaction.
    - `sidepanel.html` & `sidepanel.js`: The UI for the side panel (Open WebUI container).
    - `options.html` & `options.js`: Settings page for configuring URLs.
    - `icons/`: Extension icons.
- `img/`: Images for documentation.
- `docs/`: Project documentation.

## Component Interaction
1.  **Side Panel**: Hosts the Open WebUI iframe.
2.  **Background Script**: Manages extension lifecycle and events.
3.  **Content Scripts**:
    - `content-main.js`: Likely handles page parsing and screenshot capture.
    - `content-bridge.js`: Facilitates communication between the page and the extension.
