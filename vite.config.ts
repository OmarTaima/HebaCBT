import { fileURLToPath } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'

const PREVIEW_SEGMENTS = ['preview2', 'preview3']

function rewritePreviewUrl(req: { url?: string }): void {
  const url = req.url
  if (url === undefined) return

  const queryIndex = url.indexOf('?')
  const pathname = queryIndex === -1 ? url : url.slice(0, queryIndex)

  const segment = PREVIEW_SEGMENTS.find(
    (name) => pathname === `/${name}` || pathname.startsWith(`/${name}/`),
  )
  if (segment === undefined) return

  const query = queryIndex === -1 ? '' : url.slice(queryIndex)
  req.url = `/${segment}.html${query}`
}

const previewHtmlFallback: Plugin = {
  name: 'previewHtmlFallback',
  configureServer(server) {
    server.middlewares.use((req, _res, next) => {
      rewritePreviewUrl(req)
      next()
    })
  },
  configurePreviewServer(server) {
    server.middlewares.use((req, _res, next) => {
      rewritePreviewUrl(req)
      next()
    })
  },
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), previewHtmlFallback],
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        preview2: fileURLToPath(new URL('./preview2.html', import.meta.url)),
        preview3: fileURLToPath(new URL('./preview3.html', import.meta.url)),
      },
    },
  },
})
