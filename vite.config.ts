import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'url'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import AutoImport from 'unplugin-auto-import/vite'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [
        IconsResolver({
          prefix: 'icon',
        }),
      ],
      dts: 'src/components.d.ts',
    }),

    Pages(),
    Layouts(),
    AutoImport({
      imports: ['vue', 'vue-router', 'vee-validate', '@vueuse/core'],
      dts: 'src/auto-imports.d.ts',
      dirs: ['src/use', 'src/use/**', 'src/components/**', 'src/store'],
      vueTemplate: true,
    }),

    Icons({
      autoInstall: true,
      compiler: 'vue3',
    }),
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
