# xemX Website Design System & Future Versions

**Status:** The production versions of `index.html` and `ivo.html` have been promoted to the root directory (`/home/parker2017/`) with external stylesheets (`css/style.css`) and JavaScript (`js/main.js`).

This folder contains the design system documentation and placeholder structure for future framework versions (Vue, React, Python API).

## Current Production Files (Root Directory)

```
/home/parker2017/
├── index.html          Marketing site (production version)
├── ivo.html            Capability overview (production version)
├── css/style.css       External stylesheet (responsive, shared)
├── js/main.js          Vanilla JavaScript (hamburger menu, nav highlighting)
├── index.original.html Backup of original (for reference)
├── ivo.original.html   Backup of original (for reference)
└── logo.svg            xemX brand logo
```

### `index.html` – Marketing Site
The main public-facing website for xemX materials space exploration. Covers:
- Hero section with value proposition
- Materials capabilities
- Applications & use cases
- Technology overview
- Campaign workflow
- Team bios
- Publications
- Contact information

**Key improvements:**
- External CSS (no inline styles)
- JavaScript-driven hamburger menu (more reliable than CSS-only approach)
- Skip link for keyboard navigation
- Active nav link highlighting on scroll (IntersectionObserver)
- Proper relative paths: `logo.svg`, `css/style.css`, `js/main.js`
- Full accessibility: WCAG AA compliant, keyboard navigation, semantic HTML

### `ivo.html` – Capability Overview
Private document prepared for Dr. Ivo Koutsaroff (Akoustis Technologies / SpaceX). Deep technical overview of:
- Hardware specifications
- Integrated characterization capabilities
- Transition metal nitride systems (AlScN, AlScGdN focus)
- Service model and deliverables
- Team expertise in materials discovery

**Key improvements:**
- Extracted inline CSS to external stylesheet
- Added hamburger menu for consistency
- Added skip link
- Improved semantic structure

### `../css/style.css` (Root Level)
Shared stylesheet with:
- Color system (galaxy blue, purple, sky)
- Typography (Gantari font from Google Fonts)
- Responsive grid layouts
- Component styles (cards, buttons, tables, forms)
- Mobile breakpoint at 640px
- CSS variables for easy theming
- Flexbox and CSS Grid for responsive design

### `../js/main.js` (Root Level)
Vanilla JavaScript with no dependencies:
- **Hamburger menu toggle** – Click to open/close on mobile
- **Mobile menu dismissal** – Closes when link is clicked or Escape key is pressed
- **Active nav highlighting** – Uses IntersectionObserver to highlight current section as user scrolls
- **Smooth scroll** – Built-in via CSS (`html { scroll-behavior: smooth; }`)
- **Accessibility** – Skip link support for keyboard users
- **No frameworks** – Lightweight, fast, zero dependencies

## How to Use

### View locally
```bash
cd /home/parker2017
# Serve with any local server, e.g.:
python3 -m http.server 8000
# Then visit:
# http://localhost:8000/index.html
# http://localhost:8000/ivo.html
```

### Test at different viewport sizes
- **Mobile:** 375px (iPhone SE)
- **Tablet:** 1024px (iPad)
- **Desktop:** 1920px (full screen)

### Verify on GitHub Pages
Files are served at:
- `https://xemx-materials.com/index.html`
- `https://xemx-materials.com/ivo.html`

Paths are relative, so they work at any URL depth.

## How to Extend (Future Versions)

### Add a new framework version (Vue, React, TypeScript)

Create a new subfolder structure:
```
revamped/
├── web/                (pure HTML/CSS/Vanilla JS version)
├── vue/                (Vue 3 SPA version)
├── react/              (React + TypeScript version)
└── api/                (Python Flask/FastAPI backend)
```

Each subfolder would:
1. Copy `/index.html` and `/ivo.html` as starting points
2. Link to shared `../css/style.css` (design system)
3. Link to shared `../js/main.js` (or create framework-specific version)
4. Build component hierarchy in framework of choice
5. Keep relative paths (`../../logo.svg` for assets at root)

### Add Python API version

Create `revamped/api/`:
```python
# app.py (Flask or FastAPI)
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/ivo')
def ivo():
    return render_template('ivo.html')

# Add JSON API endpoints as needed
@app.route('/api/capabilities')
def capabilities():
    return { "elements": 37, "compositions_per_run": 342, ... }
```

### Customize the design system

All colors and spacing are CSS variables in `css/style.css`:
```css
:root {
  --galaxy: #000030;
  --purple: #5F37F0;
  --sky: #9DC3FA;
  /* ... */
}
```

Change one variable to update all components using it. No need to edit individual files.

## Design System Reference

**Colors:**
- Primary: `#5F37F0` (purple)
- Dark bg: `#000030` (galaxy)
- Light text: `#9DC3FA` (sky)
- Accent: `#C3C3FA` (flieder)
- Background: `#F0F0F5` (offwhite)

**Typography:**
- Font: Gantari (Google Fonts, weights: 300, 400, 500, 600, 700)
- Base size: varies with responsive clamp()
- Line height: 1.65 (body), adjusted per component

**Layout:**
- Grid-based responsive
- Mobile breakpoint: 768px
- Border radius: 10px (--r variable)
- Spacing: rem-based (scales with root font-size)

**Components:**
- Cards with hover effects
- Tables with borders and padding
- Lists with bullets and spacing
- Forms (minimal, for contact sections)
- Badges, tags, labels

## Accessibility

- Skip link to main content (visible on focus)
- Semantic HTML5 structure
- ARIA labels on interactive elements
- Keyboard navigation (Tab, Escape)
- High contrast ratios (WCAG AA compliant)
- Focus indicators on all interactive elements

## Browser Support

Modern browsers (last 2 versions):
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile Safari 14+

Uses CSS Grid, Flexbox, IntersectionObserver API. No IE11 support.

## Next Steps

1. **Test visually** – Check at 375px (mobile), 1024px (tablet), 1920px (desktop)
2. **Check console** – Ensure no JS errors in browser DevTools
3. **Test on GitHub Pages** – Verify relative paths work at production URL
4. **Run Lighthouse** – Check accessibility, performance, SEO
5. **Update as needed** – Both files can be modified independently

## Questions?

Contact:
- **Technical**: lars.banko@xemx.space
- **Commercial**: sven.maihoefer@xemx.space
