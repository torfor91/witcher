import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Это нужно для корректной работы на GitHub Pages
  // Если ваш репозиторий называется witcher-bestiary, то base должен быть '/witcher-bestiary/'
  // Но './' обычно работает универсально для относительных путей
  base: './',
})