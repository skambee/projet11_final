import React from 'react'
import ReactDOM from 'react-dom/client'

// Import du composant racine qui contient ensuite toute l'application.
import App from './App'

/**
 * POINT D'ENTRÉE REACT
 * --------------------
 * Ce fichier relie React au fichier HTML public/index.html.
 *
 * document.getElementById('root') récupère la balise :
 * <div id="root"></div>
 * présente dans index.html.
 *
 * ReactDOM.createRoot(...) crée ensuite la racine React dans laquelle
 * l'ensemble de l'application sera rendu.
 *
 */
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    {/*
      StrictMode est surtout utile en développement.
      Il aide React à signaler certains comportements ou usages potentiellement problématiques.
      Il ne constitue pas une page visible pour l'utilisateur.
    */}
    <App />
  </React.StrictMode>
)
