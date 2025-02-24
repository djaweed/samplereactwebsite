import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: 'fallstreakcloud.com', // Set this to your domain or IP
    // Optional: specify a port if needed
  }
})
