import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: 'fallstreakcloud.com', // Set this to your domain or IP
    allowedHosts: ['fallstreakcloud.com'], // Allow this host explicitly
    // Optionally, specify a port if needed
  }
})
