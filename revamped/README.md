# xemX Revamped Website Versions

This folder contains improved versions of the xemX website with proper file separation, external stylesheets, and vanilla JavaScript enhancements.

## Folder Structure

```
revamped/
├── index.html          Improved marketing site (primary version)
├── ivo.html            Improved capability overview document
├── css/
│   └── style.css       External stylesheet (responsive, shared across versions)
├── js/
│   └── main.js         Vanilla JavaScript for navigation and interactions
└── README.md           This file
```

## What's Here

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
- Proper relative paths: `../logo.svg`, `css/style.css`, `js/main.js`

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

### `css/style.css`
Shared stylesheet with:
- Color system (galaxy blue, purple, sky)
- Typography (Gantari font from Google Fonts)
- Responsive grid layouts
- Component styles (cards, buttons, tables, forms)
- Mobile breakpoint at 640px
- Logo path: `../logo.svg` (one level up to root)

### `js/main.js`
Vanilla JavaScript with no dependencies:
- **Hamburger menu toggle** – Click to open/close on mobile
- **Mobile menu dismissal** – Closes when link is clicked or Escape key is pressed
- **Active nav highlighting** – Uses IntersectionObserver to highlight current section as user scrolls
- **Smooth scroll** – Built-in via CSS (`html { scroll-behavior: smooth; }`)
- **Accessibility** – Skip link support for keyboard users

## How to Use

### View locally
```bash
cd /home/parker2017/revamped
# Serve with any local server, e.g.:
python3 -m http.server 8000
# Then visit http://localhost:8000/index.html
```

### Verify on GitHub Pages
Both files will be served at:
- `https://xemx-materials.com/revamped/index.html`
- `https://xemx-materials.com/revamped/ivo.html`

Paths are relative, so they work at any URL depth.

## How to Extend

### Add a new framework version (Vue, React, TypeScript)

Create a new subfolder:
```
revamped/
├── web/                (pure HTML/CSS/Vanilla JS - here)
├── vue/                (Vue 3 SPA)
├── react/              (React + TypeScript)
└── api/                (Python Flask/FastAPI backend)
```

Each subfolder would:
1. Copy `index.html` and `ivo.html` as starting points
2. Import `css/style.css` (shared design system)
3. Build component hierarchy in framework of choice
4. Keep relative paths (`../../logo.svg` for assets at root)

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
- Mobile breakpoint: 640px
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
