# Portfolio Website

Modern portfolio website built with React, TypeScript, and TailwindCSS featuring a dark theme with vibrant accent colors.

## 🎨 Design Features

- **Dark Theme**: Professional dark background gradients
- **Accent Colors**: Vibrant magenta (#FF5EF7) and cyan (#02F5FF) highlights
- **Glass Morphism**: Modern glass effects and backdrop blur
- **Responsive Design**: Mobile-first responsive layout
- **Smooth Animations**: Hover effects and smooth scrolling

## 🚀 Sections

- **Home**: Hero section with call-to-action buttons
- **About**: Personal introduction and skills showcase
- **Projects**: Portfolio project cards with tech stacks
- **Contact**: Contact information and message form

## 🛠️ Tech Stack

- React 19.1.1
- TypeScript
- TailwindCSS 4.1.13
- Vite 7.1.7
- ESLint for code linting
- PostCSS for CSS processing

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (version 18.0 or higher)
- Yarn package manager

## 🔧 Installation & Development

```bash
# Clone the repository
git clone <your-repository-url>
cd portfolio

# Install dependencies
yarn install

# Start development server
yarn dev

# Build for production
yarn build

# Preview production build
yarn preview

# Run linting
yarn lint
```

## 🎯 Color Palette

- **Primary**: #FF5EF7 (Magenta)
- **Secondary**: #02F5FF (Cyan)
- **Dark Background**: Gradient from #1a1a2e to #0f3460
- **Text**: White and gray variants for contrast

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

### GitHub Pages
1. Push your code to GitHub repository
2. Go to Settings > Pages
3. Select source branch (usually `main` or `gh-pages`)

### Netlify
1. Build the project: `yarn build`
2. Upload the `dist` folder to Netlify
3. Or connect your GitHub repository for automatic deployment

### Vercel
1. Install Vercel CLI: `yarn global add vercel`
2. Run `vercel` in project directory
3. Follow the deployment prompts

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/     # Reusable components
│   ├── pages/         # Page components
│   ├── styles/        # CSS and styling files
│   ├── assets/        # Images and static assets
│   └── App.tsx        # Main application component
├── public/            # Public assets
├── dist/              # Production build (generated)
└── package.json       # Dependencies and scripts
```
