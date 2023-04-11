import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './app/store'
import { BrowserRouter } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
    <AnimatePresence>
      <App />
    </AnimatePresence>
    </BrowserRouter>
  </Provider>
)
