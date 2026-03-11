# xemX Website Project Guidelines

## Project Overview
Website for xemX materials space exploration GmbH. Three versions maintained:
- **index.html** - Original public marketing site
- **ivo.html** - Private capability overview document
- **revamped/** folder - Improved versions in different tech stacks

## Critical Non-Negotiables
1. **Never push to main without explicit permission** - Always create a new branch first
2. **Always verify visually** - Test in browser at 375px (mobile), 1024px (tablet), 1920px (desktop)
3. **External CSS/JS** - Use separate `css/style.css` and `js/main.js`, never inline styles
4. **Test on GitHub Pages** - Changes must work at https://xemx-materials.com and relative paths
5. **Logo paths must be relative** - Use `src="logo.svg"` not absolute paths
6. **CNAME file protection** - Never modify CNAME (xemx-materials.com) without explicit request

## Common Mistakes to Avoid
- ❌ Inline CSS in HTML (use style.css instead)
- ❌ Hardcoded color values (use CSS variables)
- ❌ `display: none` for nav on mobile (provide hamburger menu alternative)
- ❌ Missing `aria-label` on interactive elements
- ❌ Inline `style="color:#fff"` attributes (use CSS classes)
- ❌ Forgetting `alt` text on images
- ❌ Broken relative paths when moving files to subfolders

## Git Workflow
- Create branches for each feature: `feature/revamped-vue`, `feature/revamped-python-api`, etc.
- Commit often with descriptive messages
- Run `git status` and verify before pushing
- Use worktrees for isolated work on complex features
- Always include Co-Authored-By footer in commits

## Verification Checklist
Before any push:
- [ ] Run in browser (mobile, tablet, desktop)
- [ ] Check console for errors (F12)
- [ ] Test all navigation links
- [ ] Verify all images/assets load
- [ ] Check meta tags with Open Graph debugger
- [ ] Run lighthouse audit if available
- [ ] Test keyboard navigation (Tab key)
- [ ] Screen reader test (use NVDA or similar)

## File Structure
```
/home/parker2017/
├── index.html                 (production - modern, accessible)
├── ivo.html                   (production - modern, accessible)
├── index.original.html        (backup of original version)
├── ivo.original.html          (backup of original version)
├── logo.svg                   (xemX brand logo)
├── CNAME                      (GitHub Pages domain)
├── css/
│   └── style.css              (external stylesheet - responsive, shared)
├── js/
│   └── main.js                (vanilla JavaScript - hamburger menu, nav highlighting)
├── CLAUDE.md                  (this file - project guidelines)
│
└── revamped/                  (documentation & future framework versions)
    ├── README.md              (overview of design system & structure)
    ├── web/                   (pure HTML/CSS/JS - static, future)
    ├── vue/                   (Vue.js SPA - interactive, future)
    └── api/                   (Python Flask/FastAPI backend, future)
```

## Current Production Stack
- **index.html** - Pure HTML5 with external CSS and vanilla JavaScript
- **ivo.html** - Pure HTML5 with external CSS and vanilla JavaScript
- **css/style.css** - Responsive stylesheet with CSS variables and Grid/Flexbox
- **js/main.js** - Hamburger menu, keyboard navigation, scroll-based active links

## Future Versions (in revamped/ folder)
- **revamped/web/** - Alternative pure HTML/CSS/JS implementation
- **revamped/vue/** - Vue 3 SPA with component architecture
- **revamped/api/** - Python backend API with Flask/FastAPI

## Key Commands
```bash
# Check status before work
git status

# Create feature branch
git checkout -b feature/description

# Commit with style
git commit -m "$(cat <<'EOF'
Short description here

Longer context if needed.

Co-Authored-By: Claude Haiku 4.5 <noreply@anthropic.com>
EOF
)"

# Push to GitHub
git push origin feature/description
```

## Design System (Keep Consistent)
- Primary color: `#5F37F0` (purple)
- Dark bg: `#000030` (galaxy)
- Light text on dark: `#9DC3FA` (sky)
- Font: Gantari (Google Fonts)
- Border radius: 10px
- Mobile breakpoint: 640px

## Contact Info (in case of questions)
- Lars Banko (CTO): lars.banko@xemx.space
- Sven Maihöfer (COO): sven.maihoefer@xemx.space
- Parker Schmidt (Commercial): parker.schmidt@xemx-materials.com
