import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  base:"/Zappos_Project/",
  plugins: [react()],
  resolve:{
    alias:{
      '@/components':resolve(__dirname,'./src/components'),
      '@/assets':resolve(__dirname,'./src/assets'),
    }
  },
  server:{
    host:true,
    port: 3000,
  }
})
