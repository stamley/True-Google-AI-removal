# True Google AI removal

Append "-ai" to your searches to remove the obnoxious Google AI overview. Unlike other tools, this extension rewrites the query **before the initial search executes**, preventing redundant page loads and avoiding unnecessary AI-generated results.

---

## Features

- Appends `-ai` to all Google search queries automatically
- Prevents the AI query from being sent
- Does not collect any user data
- Works only on `google.com/search` pages

---

## Installation

### From Chrome Web Store

https://github.com/stamley/True-Google-AI-removal

### Manual Installation

1. Clone or download this repo
2. Visit `chrome://extensions/` in your browser
3. Enable **Developer Mode**
4. Click **"Load Unpacked"**
5. Select the folder containing this repo

## How It Works

When a user searches something on Google, the content script runs **at `document_start`**. If the search query doesn't already contain `-ai`, it appends it and redirects the user *before* the original page loads, saving bandwidth and skipping AI-indexed content.

No background script, no form event listeners, no user tracking.

## Future Improvements

- Option to customize the appended filter term
- Toggle enable/disable from toolbar
- Site-specific exceptions (e.g., images, maps, etc.)

