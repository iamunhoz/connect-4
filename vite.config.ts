import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

/// <reference types="vitest" />
export default defineConfig({
  plugins: [react()],
  // @ts-expect-error text exists
  test: {
    environment: 'jsdom',
    setupFiles: './src/lib/setupTests.ts',
    globals: true,
  },

})
