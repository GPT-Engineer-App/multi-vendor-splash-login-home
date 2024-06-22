import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  server: {
    host: "::",
    port: "8080",
    strictPort: true,
    clearScreen: false,
    logLevel: "info",
    warmup: {
      clientFiles: ["src/**/*.(js|jsx|ts|tsx|html|css)", "index.html"]
    },
  },
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'Multi Vendor App',
        short_name: 'MultiVendorApp',
        description: 'A multi-vendor application',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'favicon.ico',
            sizes: '64x64 32x32 24x24 16x16',
            type: 'image/x-icon'
          }
        ]
      }
    })
  ]
});
