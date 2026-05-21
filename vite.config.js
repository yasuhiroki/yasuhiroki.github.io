import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.js',
      formats: ['iife'],
      name: 'app',
      fileName: () => 'main.js'
    },
    outDir: 'dist',
    emptyOutDir: false
  },
  plugins: [
    {
      name: 'html-transform',
      apply: 'serve',
      transformIndexHtml(html) {
        return html.replace('dist/main.js', 'src/index.js')
      }
    }
  ]
})
