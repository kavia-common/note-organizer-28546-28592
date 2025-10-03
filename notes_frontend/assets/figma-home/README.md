# Figma Home Integration

This folder contains the Figma-exported assets for the Home screen.

- index.html: Original static markup (used as reference; do not serve directly in Nuxt).
- styles.css: Styles imported by pages/index.vue via `@import '~/assets/figma-home/styles.css';`
- app.js: Removed; its behavior has been translated into Vue methods and lifecycle hooks in `pages/index.vue`.

To update the design:
- Prefer editing `styles.css` for style changes.
- Update `pages/index.vue` for template or interaction changes.

Images:
- Images are referenced as `/assets/figmaimages/...` and served from the project-level assets directory.
