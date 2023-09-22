import { defineConfig } from 'vite'
import dotenv from 'dotenv'
// import eslint from 'vite-plugin-eslint'

export default defineConfig(({ mode }) => {
  const env = dotenv.config({ path: `./.env.${mode}` }).parsed

  return {
    base: '/',
    define: {
      'process.env': env
    }
    // ,
    // plugins: [eslint({
    //   include: ['src/**/*.vue', 'src/**/*.js', 'src/**/*.ts'],
    //   exclude: ['node_modules/**', 'dist/**']
    // })]
  }
})
