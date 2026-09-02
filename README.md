# React Portfolio

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS — inspired by a professional three-column portfolio layout.

## Features

- **5 Sections:** Hero, My Services, Projects, Price Plans, Contact Form
- **Three-column layout** on desktop (profile sidebar, main content, navigation)
- **Fully responsive** with mobile drawer sidebar and bottom navigation
- **Scalable structure** with separated data, UI components, and sections

## Project Structure

```
src/
├── components/
│   ├── layout/       # Sidebar, RightNav
│   ├── sections/     # Hero, Services, Projects, Price, Contact
│   └── ui/           # Reusable UI components
├── data/
│   └── portfolio.js  # All content data (easy to customize)
├── App.jsx
├── main.jsx
└── index.css
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build

```bash
npm run build
npm run preview
```

## Customization

Edit `src/data/portfolio.js` to update profile info, services, projects, pricing, and navigation items.
