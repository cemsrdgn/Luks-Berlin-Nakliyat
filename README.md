# Lüks Berlin Nakliyat – Promotional Website

Modern, fully responsive marketing site for Lüks Berlin Nakliyat built with React. The project focuses on mirroring high-fidelity desktop visuals while delivering custom-designed tablet and mobile views, multilingual content, and content-rich landing pages for each business unit.

## Highlights

- **Pixel-accurate desktop UI** that matches the provided artboards (hero, header/topbar trapezoid, bespoke buttons, etc.).
- **Custom tablet & mobile layouts** with a sticky header, hamburger navigation, trust badges, and drawer-style sections.
- **Complete multi-page experience:** Home, Services, Gallery, About Us, Contact—each with its own hero, grids, and CTA blocks.
- **Internationalization (TR/EN)** via `react-i18next`, including brand copy, buttons, data files, and WhatsApp messages.
- **Rich content components** such as drawer-based service explorers, lightbox-enabled gallery tabs, testimonial sliders, and contact CTAs.
- **Clean architecture** with shared layout (`SiteLayout`), data-driven sections, and per-page CSS scoped to the component.

## Tech Stack

| Layer            | Details                                                                 |
| ---------------- | ------------------------------------------------------------------------ |
| Framework        | [React 18](https://react.dev/) + [React Router DOM](https://reactrouter.com/) |
| Styling          | Hand-crafted CSS modules per component/page + global variables in `App.css` |
| i18n             | [i18next](https://www.i18next.com/) + `react-i18next`                    |
| State management | React hooks (`useState`, `useEffect`, `useMemo`)                         |
| Tooling          | Create React App scripts (`react-scripts start/build/test`)              |

## Application Structure

```
luksBerlinNakliyat/
├── client/
│   ├── public/                 # HTML shell, favicon, manifest
│   ├── src/
│   │   ├── assets/             # Images/icons (logo, gallery, backgrounds)
│   │   ├── components/         # Shared UI blocks (Header, Navbar, HeroSection, ServicesTabs, etc.)
│   │   ├── layouts/SiteLayout  # Common shell wrapping TopBar, Header, Footer, Outlet
│   │   ├── pages/              # Page-level containers (HomePage, ServicesPage, GalleryPage, AboutPage, ContactPage)
│   │   ├── data/               # Structured content (servicesData, galleryMedia, galleryItems)
│   │   ├── locales/            # `tr.json`, `en.json` dictionaries
│   │   ├── sections/           # Cross-page sections (ContactTestimonialsSection, WhyChooseUs, etc.)
│   │   ├── App.js / App.css    # Router + global styles
│   │   └── index.js            # App bootstrap
│   └── package.json
└── README.md (this file)
```

## Pages & Features

- **Home**
  - Hero carousel with sliding animation, parallelogram CTA, fixed copy block.
  - Drawer-style Services section: three master categories, animated accordions, synchronized description card, “view all” & “read more” CTA hooks.
  - Why Choose Us, Stats counters, testimonial/contact combo, preview gallery ribbon.

- **Services**
  - Hero banner + subtitle over background image.
  - Left column: scrollable drawer categories, sub-service list, brochure download section, contact details.
  - Right column: feature-rich detail view with long-form copy and vertical feature list.
  - Global WhatsApp CTA at the bottom.

- **Gallery**
  - Hero band with image/title, photo vs video tabs, CSS-refined tab states, masonry-like grid, and lightbox modal with navigation arrows.

- **About Us**
  - Hero + introduction, centered “Who are we?” card, vision/mission cards with icons, social follow section, 8-value grid, testimonials + stats stack.

- **Contact**
  - Hero-free layout matching reference art: contact info, map block, WhatsApp form button replicating hero CTA shape, Why Choose Us reuse plus a custom CTA component, “7/24” working-hours emphasis.

- **Navigation**
  - Desktop: trapezoid logo section, aligned topbar & navbar, underline-active links, gradient WhatsApp button.
  - Mobile/tablet: sticky header, hamburger drawer with company badge, topbar info, language switch, trust badges, and body scroll locking.

## Getting Started

> Requirements: Node.js ≥ 16, npm ≥ 8

```bash
cd luksBerlinNakliyat/client
npm install
npm start        # http://localhost:3000
```

### Production Build

```bash
npm run build    # outputs to client/build
```

Serve the `build` directory via any static host (Vercel, Netlify, Firebase, etc.).

## Internationalization

- Language resources live in `client/src/locales/en.json` and `client/src/locales/tr.json`.
- Use `t('key.path')` inside components; for data-driven sections (services, gallery) translations are stored alongside data objects.
- Add new languages by creating an additional JSON file and registering it in the i18n config (see `client/src/i18n.js` if extended later).

## Notes & Conventions

- **Styling:** Preference for reusable CSS variables (`--page-bg`, `--card-shadow`, etc.), `clamp()` typography, and component-scoped CSS files to minimize leakage.
- **Assets:** Resolved with `process.env.PUBLIC_URL` helpers to support static hosting roots.
- **Accessibility:** Nav drawer buttons manage focus/scroll locking; hero copy remains visible regardless of slide length.
- **Responsive Strategy:** Desktop visuals remain untouched; tablet/mobile redesigns leverage CSS grid/flex plus bespoke layouts per section instead of simple stacking.

## Roadmap / Ideas

- Hook the contact form into a backend (email or CRM) in addition to WhatsApp deeplinks.
- Add CMS integration (e.g., headless CMS for services/gallery) to allow client-side content editing.
- Implement automated visual regression tests to preserve pixel-accuracy.
- Extend language support beyond TR/EN if needed.

---

Made for showcasing Lüks Berlin Nakliyat’s premium relocation services with exacting visual fidelity and a solid technical foundation. Feel free to fork, adapt, or reach out for collaboration. ✨

