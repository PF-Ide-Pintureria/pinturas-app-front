import { defineConfig } from 'vite'
import react from "@vitejs/plugin-react"
import dotenv from 'dotenv'
import eslint from 'vite-plugin-eslint'

export default defineConfig(({ mode }) => {
  const env = dotenv.config({ path: `./.env.${mode}` }).parsed

  return {
    base: '/',
    define: {
      'process.env': env
    },
    plugins: [
      // Plugin para habilitar HMR update y no cargar toda* la pagina cada vez que se actualice un solo componente.
      react()
      // eslint({
      //   include: ['src/**/*.js', 'src/**/*.jsx'],
      //   exclude: ['node_modules/**', 'dist/**']
      // })
    ]
  }
})
