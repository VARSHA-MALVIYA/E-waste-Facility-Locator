import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // build: {
  //   rollupOptions: {
  //     external: ['swiper/react', 'swiper/css','swiper/css/pagination','swiper/modules'] // Add 'swiper/css' here
  //   }
  // }
})
