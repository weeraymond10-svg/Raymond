# CLAUDE.md

## Tech Stack
- Plain HTML, CSS, and JavaScript only.
- No frameworks, no build step. Files open directly in a browser.

## Project Structure
- `index.html` at the top level: the portal homepage
- `css/style.css`: shared styles and the light/dark theme colors
- `js/theme.js`: shared theme toggle
- `tools/<tool-name>/index.html`: one folder per tool (currently `tools/unit-converter/`, with its own `converter.js`)

Update this section when the layout changes.

## Key Requirements
1. Every page must be responsive and work on desktop, tablet and phone.
2. Users can toggle between a light and a dark theme. The default is the light theme.
3. Text must stay easy to read, with good contrast, in both the light and the dark theme.

## Feature Plan
A web portal where students try out small web tools. The subject area is still open.

**Structure**
- **Homepage** (`index.html`): a short intro and a list of tool cards. Each card has a name, a one-line description, and a link.
- **Opening a tool:** the visitor clicks a card and lands on that tool's own page.
- **Getting back:** every tool page has a "Back to all tools" link to the homepage. The theme toggle is on every page.
- **Adding a tool later:** create a folder `tools/<tool-name>/` with its own page, then add one card to the homepage. Nothing else changes.

**Phases**
1. **Portal + first tool:** the homepage, the theme toggle, and exactly one tool. The first tool is a unit converter.
   - [x] Portal built: homepage, theme toggle, and navigation to a tool page and back.
   - [x] First tool built: Unit Converter (`tools/unit-converter/`). Pick a type, enter a value, choose "from" and "to" units. Length (m, ft, mi), temperature (°C, °F, K), mass (kg, lb).
2. **More tools:** add tools one at a time, using the steps above.
3. **Polish:** only if needed, such as search or grouping tools by topic.

## Rules for Claude
- Explain technical terms in plain language.
- Ask before making big changes.
- Ask rather than guess when something is unclear.
