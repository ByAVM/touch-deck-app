import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import packageJson from './package.json'

// https://vite.dev/config/
export default defineConfig(({mode}) => ({
  base: mode === 'production' ? '/test' : '',
  plugins: [react()],
  resolve: {
    alias: {
      "@styled-system": path.resolve("./styled-system"),
      "@shared": path.resolve("./src/shared"),
      "@features": path.resolve("./src/features"),
      "@pages": path.resolve("./src/pages"),
      "@locales": path.resolve('./src/locales'),
      ...(mode === 'development' ? {"@tabler/icons-react": "@tabler/icons-react/dist/esm/icons/index.mjs"} : {})
    }
  },
  define: {
    __APP_VERSION__: JSON.stringify(packageJson.version),
  }
}))
