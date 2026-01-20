# Jira Customizer Extension

A simple browser extension to customize the Jira interface.

## Features

- Hides the "Versión de prueba de Premium" (Premium trial version) button that appears on the Jira interface.

## How it works

The extension injects a small JavaScript file (`script.js`) into any page on the `*.atlassian.net` domain. This script uses a `MutationObserver` to watch for changes in the page's content and automatically hides the specified trial buttons as soon as they appear.

## Installation

To use this extension, you can load it as an unpacked extension in your browser (like Google Chrome or Microsoft Edge).

1.  Clone this repository.
2.  Open your browser's extension management page (`chrome://extensions` or `edge://extensions`).
3.  Enable "Developer mode".
4.  Click "Load unpacked" and select the directory where you cloned the repository.

---

Created by ltomassini
