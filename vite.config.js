import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // 👇 Add this to fix 404 on refresh
  server: {
    historyApiFallback: true,
  },
  // 👇 Optional: ensure it works after build too
  preview: {
    historyApiFallback: true,
  },
})
