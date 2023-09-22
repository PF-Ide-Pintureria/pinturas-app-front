import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import App from './App'
import { Provider } from 'react-redux'
import store from './redux/store'
import { Auth0Provider } from '@auth0/auth0-react'
import { CartProvider } from './context/cart'
const { VITE_DOMAIN: DOMAIN, VITE_AUTH0_CLIENT_ID: CLIENT_ID } = import.meta
  .env

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Auth0Provider
      domain={DOMAIN}
      clientId={CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <CartProvider>
        <App />
      </CartProvider>
    </Auth0Provider>
  </Provider>
)
