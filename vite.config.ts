import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import vueI18n from '@intlify/vite-plugin-vue-i18n'
import svgLoader from 'vite-svg-loader'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueI18n({
      include: path.resolve(__dirname, './src/locales/**'),
      compositionOnly: false
    }),
    svgLoader()
  ],
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
  }
})
