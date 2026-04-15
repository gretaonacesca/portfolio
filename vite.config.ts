import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Default `/` works for Vercel. For GitHub Pages project sites, set env
// GITHUB_PAGES_BASE to the repo name (e.g. `portfolio` or `greta_corporate_portfolio`).
const ghBase = process.env.GITHUB_PAGES_BASE?.replace(/^\/+|\/+$/g, '')
const productionBase = ghBase ? `/${ghBase}/` : '/'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' ? productionBase : '/',
}))
