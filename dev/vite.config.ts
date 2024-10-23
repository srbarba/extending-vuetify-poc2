import path from 'node:path'
import vue from '@vitejs/plugin-vue'
import vueComponents from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import vuetify from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vuetify(),
    vueComponents({
      resolvers: [
        // example of importing Vant
        (componentName) => {
          // where `componentName` is always CapitalCase
          if (componentName.startsWith('S'))
            return { name: componentName, from: 'my-library' }
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      'my-library': path.resolve(__dirname, '../src'),
    },
  },
})
