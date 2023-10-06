// import { defineConfig } from 'vite'
// import path from "path"

// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       "@": path.resolve('/frontend', "./@"),
//     },
//   },
// })
import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
const __filename = import.meta.url.slice(7);
const __dirname = path.dirname(__filename);


export default defineConfig({
 plugins: [react()],
 resolve: {
  alias: {
    '@': path.resolve(__dirname, './src'),
  },
 },
})