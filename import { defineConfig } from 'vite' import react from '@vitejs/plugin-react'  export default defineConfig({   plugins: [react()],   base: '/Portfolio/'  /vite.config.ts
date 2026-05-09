import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/'  // এই লাইনটি যোগ করুন (রিপোজিটরির নাম)
})
