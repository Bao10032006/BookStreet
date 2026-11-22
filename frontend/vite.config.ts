import react from '@vitejs/plugin-react'
import { defineConfig, type ProxyOptions } from 'vite'

// The browser talks to Vite on the same origin, including when Vite is opened over LAN.
// Spring only trusts the local development origin, so translate that origin at the proxy boundary.
function localBackendProxy(): ProxyOptions {
  return {
    target: 'http://localhost:8080',
    changeOrigin: true,
    configure(proxy) {
      proxy.on('proxyReq', (proxyReq, req) => {
        const { origin, host } = req.headers
        if (!origin || !host) return
        try {
          if (new URL(origin).host === host) {
            proxyReq.setHeader('Origin', 'http://localhost:5173')
          }
        } catch {
          // Forward malformed origins unchanged; Spring will reject them.
        }
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: { include: ['react-router-dom', 'qrcode.react'] },
  server: {
    headers: { 'Referrer-Policy': 'no-referrer' },
    proxy: {
      '/api': {
        ...localBackendProxy(),
      },
      '/assets/heritage/uploads': {
        ...localBackendProxy(),
      },
    },
  },
  preview: {
    headers: { 'Referrer-Policy': 'no-referrer' },
  },
})
