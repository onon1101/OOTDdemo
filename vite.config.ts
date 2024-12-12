import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { fileURLToPath, URL } from 'node:url'
import path from 'path'
// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src')
      // '@': fileURLToPath(new URL('./src', import.meta.url)) // Alias for src folder
    }
  }
})
