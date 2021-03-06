import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    watch: {
      usePolling: true
    }
  },
  resolve: {
    alias: [
      { find: '@/views', replacement: path.resolve('./src/views') },
      { find: '@/components', replacement: path.resolve('./src/components') },
      { find: '@/utils', replacement: path.resolve('./src/utils') },
      { find: '@/assets', replacement: path.resolve('./src/assets') },
      { find: '@/styles', replacement: path.resolve('./src/styles') }
    ]
  },
})
