import React from 'react'
import ReactDOM from 'react-dom/client'
import { SWRConfig } from 'swr'
import App from './App.jsx'
import { CartProvider } from './contexts/cart.jsx'
import './index.css'
import { fetcher } from './utils.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SWRConfig value={{ fetcher }}>
      <CartProvider>
        <App />
      </CartProvider>
    </SWRConfig>
  </React.StrictMode>,
)
