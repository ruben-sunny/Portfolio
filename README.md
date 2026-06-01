# 🚀 Ruben Sunny — Angular Portfolio

A production-ready portfolio built with **Angular 17** (Standalone Components).
Dark-themed, gold/blue accents, scroll-reveal animations, fully responsive.

## ⚙️ Setup

### Prerequisites
- Node.js v18+
- Angular CLI v17: `npm install -g @angular/cli@17`

### Install & Run
```bash
npm install
ng serve
```
Open → **http://localhost:4200**

### Production Build
```bash
ng build --configuration production
```
Output: `dist/ruben-sunny-portfolio/browser/`

## 📁 Project Structure
```
src/app/
├── components/
│   ├── navbar/       # Fixed navbar, scroll-spy, mobile menu
│   ├── hero/         # Hero section with floating badges
│   ├── tech-strip/   # Infinite marquee tech strip
│   ├── about/        # About + journey timeline + stats
│   ├── skills/       # Skill categories + proficiency bars
│   ├── experience/   # Infosys work experience card
│   ├── projects/     # Project cards with hover overlay
│   ├── services/     # Services grid
│   ├── contact/      # Contact form + info
│   └── footer/       # Footer with links & back-to-top
├── services/
│   ├── portfolio.service.ts   # All portfolio data
│   └── reveal.directive.ts    # Scroll-reveal directive
└── app.component.ts           # Root component
```

## ✏️ Customize Your Data
All content lives in: `src/app/services/portfolio.service.ts`
- Projects → `getProjects()`
- Skills → `getSkillCategories()`
- Timeline → `getTimeline()`
- Experience → `getExperience()`
- Services → `getServices()`

## 📄 Resume / Photo
- Place resume at: `src/assets/resume.pdf`
- Place photo at: `src/assets/photo.jpg` and update `hero.component.html`

## 🚀 Deploy
- **Netlify/Vercel**: Upload `dist/ruben-sunny-portfolio/browser/`
- **GitHub Pages**: `ng add angular-cli-ghpages && ng deploy`
