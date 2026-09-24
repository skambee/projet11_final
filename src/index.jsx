import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

// Point d'entrée React : l'application est montée dans la balise #root du HTML.
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
