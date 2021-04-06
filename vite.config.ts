import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import vueI18n from '@intlify/vite-plugin-vue-i18n'
import svgLoader from 'vite-svg-loader'
import styleImport from 'vite-plugin-style-import'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueI18n({
      include: path.resolve(__dirname, './src/locales/**'),
      compositionOnly: false
    }),
    svgLoader(),
    styleImport({
      libs: [{
        libraryName: 'ant-design-vue',
        esModule: true,
        resolveStyle: (name) => {
          return `ant-design-vue/es/${name}/style/css`;
        },
      }]
    })
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
      { find: '@/styles', replacement: path.resolve('./src/styles') },
      { find: '@/store', replacement: path.resolve('./src/store') }
    ]
  }
})
