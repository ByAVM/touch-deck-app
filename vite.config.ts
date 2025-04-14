import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig(({mode}) => ({
  base: mode === 'production' ? '/test' : '',
  plugins: [react()],
  resolve: {
    alias: {
      "@styled-system": path.resolve("./styled-system")
    }
  }
}))
