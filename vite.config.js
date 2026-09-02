import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // If your repository is YOUR-USERNAME.github.io, use '/'.
  // If it is a project repository such as 'mohmud-portfolio', use '/mohmud-portfolio/'.
  base: '/mohmud-portfolio/',
})
