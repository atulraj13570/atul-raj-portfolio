# Vortex Forge - Atul Raj Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Deployment Options

### Option 1: Deploy to Vercel (Recommended)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Vercel will auto-detect settings from `vercel.json`
   - Click "Deploy"

### Option 2: Deploy to GitHub Pages

1. **Enable GitHub Pages:**
   - Go to your repository settings
   - Scroll to "Pages" section
   - Source: "GitHub Actions"

2. **Push to trigger deployment:**
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

## 🛠️ Local Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm run build:client
```

## 📁 Project Structure

```
vortex-forge/
├── client/           # React frontend
├── server/           # Express backend
├── dist/spa/         # Built files
├── .github/workflows/ # GitHub Actions
└── vercel.json       # Vercel config
```

## 🌐 Live URLs

- **Vercel:** `https://your-repo-name.vercel.app`
- **GitHub Pages:** `https://username.github.io/repository-name`