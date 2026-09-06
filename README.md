# Bharat Shinde — Portfolio

A modern, dark-mode developer portfolio built with React, Vite, and Tailwind CSS.

## Tech stack

- React 19 + Vite
- Tailwind CSS v4
- Framer Motion (animations)
- Lucide React + React Icons (icons)

## Run locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview   # preview the production build locally
```

## Editing your content

Everything personal lives in `src/data/`, so you can update the site without
touching component code:

| File | What it controls |
|---|---|
| `src/data/site.js` | Name, title, phone, email, resume path, social links, SEO |
| `src/data/projects.js` | Featured projects (add GitHub/demo URLs and screenshots here) |
| `src/data/skills.js` | Skill categories and the tech-stack marquee |
| `src/data/education.js` | Education timeline |
| `src/data/experience.js` | Work experience and achievements |

## Adding assets

Drop these files into the `public/` folder:

- `public/profile.jpg` — profile photo (optional; site works without it)
- `public/resume.pdf` — linked from every "Download Resume" button
- `public/og-image.png` — social share preview image (1200x630 recommended)
- `public/projects/project1.png` ... `project5.png` — screenshots for each project

If an image is missing, the project cards gracefully fall back to a placeholder
icon instead of breaking.

## Wiring up the contact form

The contact form currently opens the visitor's email client via a `mailto:`
link pre-filled with their message (no backend required). To use a real
backend instead, swap the `handleSubmit` logic in
`src/components/Contact.jsx` for a service like Formspree or EmailJS.

## Notes

- Update `siteConfig.social` in `src/data/site.js` with your real GitHub,
  LinkedIn, and email addresses. Placeholders are marked with `#` and
  `your.email@example.com`.
- The MTech institution name in `src/data/education.js` is left as
  `[ADD INSTITUTE NAME]` until you fill it in.
- Reduced-motion preferences are respected automatically.
"# bharat-portfolio-updated" 
