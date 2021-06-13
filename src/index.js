import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { CartProvider } from './context/cart_context'


ReactDOM.render(


  <CartProvider>
    <App />
  </CartProvider>
  ,

  document.getElementById('root')
)
