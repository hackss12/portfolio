# Ganesh Sawant Portfolio

A modern, responsive developer portfolio built with React, Vite, Tailwind CSS, Framer Motion, and Lucide icons.

## Features

- Minimal professional UI
- Dark and light mode toggle
- Fully responsive, mobile-first layout
- Animated hero typing effect
- Smooth scrolling + active navbar highlighting
- Glassmorphism cards
- Scroll progress indicator
- SEO-friendly metadata and semantic sections
- Accessible structure with skip-link support

## Tech Stack

- React
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React

## Project Structure

```text
.
|-- index.html
|-- package.json
|-- postcss.config.js
|-- tailwind.config.js
|-- vite.config.js
|-- src
|   |-- App.jsx
|   |-- main.jsx
|   |-- index.css
|   |-- components
|   |   |-- Navbar.jsx
|   |   |-- ScrollProgress.jsx
|   |   |-- Footer.jsx
|   |   |-- SectionHeading.jsx
|   |   `-- sections
|   |       |-- HeroSection.jsx
|   |       |-- AboutSection.jsx
|   |       |-- SkillsSection.jsx
|   |       |-- ProjectsSection.jsx
|   |       |-- ExperienceSection.jsx
|   |       |-- EducationSection.jsx
|   |       `-- ContactSection.jsx
|   |-- hooks
|   |   |-- useTypewriter.js
|   |   `-- useActiveSection.js
|   `-- data
|       `-- portfolioData.js
`-- README.md
```

## Run Locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start dev server:
   ```bash
   npm run dev
   ```
3. Build production bundle:
   ```bash
   npm run build
   ```
4. Preview production build:
   ```bash
   npm run preview
   ```

## Deploy on Vercel

1. Push this project to GitHub.
2. Go to [Vercel](https://vercel.com) and click **Add New Project**.
3. Import the GitHub repository.
4. Keep default settings:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Click **Deploy**.

Vercel will generate a live URL after deployment.

## Personalization Checklist

- Update GitHub/LinkedIn URLs in section components
- Replace project demo links with real links
- Add real email and phone number
- Add your real resume file at `public/Ganesh-Sawant-Resume.pdf`
