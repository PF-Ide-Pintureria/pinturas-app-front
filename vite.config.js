import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'
import path from 'path'

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
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@components': path.resolve(__dirname, './src/components'),
        '@views': path.resolve(__dirname, './src/views'),
        '@redux': path.resolve(__dirname, './src/redux'),
        '@img': path.resolve(__dirname, './src/img'),
        '@assets': path.resolve(__dirname, './src/assets'),
        '@hooks': path.resolve(__dirname, './src/hooks')
      }
    }
  }
})
