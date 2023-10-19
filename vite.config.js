import { defineConfig } from 'vite'
import dotenv from 'dotenv'

export default defineConfig(({ mode }) => {
  const env = dotenv.config({ path: `./.env.${mode}` }).parsed

  return {
    base: '/',
    define: {
      'process.env': env
    },
    plugins: []
  }
})
