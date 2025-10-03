# Public Figma Images

This folder serves static images at runtime. Use absolute URLs in Vue templates like:
- /assets/figmaimages/figma_image_125_190_8_12.png
- /assets/figmaimages/figma_image_125_188_8_9.png
- /assets/figmaimages/figma_image_125_192_115_19.png

Do not import these images in scripts; reference them directly via the public path to prevent Vite import-analysis errors.
