# CLAUDE.md

## Tech Stack
- Plain HTML, CSS, and JavaScript only.
- No frameworks, no build step. Files open directly in a browser.

## Project Structure
The repository is nearly empty for now. As it grows, keep things simple:
- `index.html` at the top level for the main page
- `css/` for stylesheets
- `js/` for scripts

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
1. **Portal + first tool:** the homepage, the theme toggle, and exactly one tool. What the tool does is still to be decided.
2. **More tools:** add tools one at a time, using the steps above.
3. **Polish:** only if needed, such as search or grouping tools by topic.

## Rules for Claude
- Explain technical terms in plain language.
- Ask before making big changes.
- Ask rather than guess when something is unclear.
