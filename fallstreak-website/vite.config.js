import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  plugins: [react()],
  server: {
    // Use the production IP only in production, otherwise use localhost for development.
    host: isProduction ? '18.222.21.45' : 'localhost',
    allowedHosts: ['fallstreakcloud.com']
  }
})
