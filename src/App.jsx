import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Import de la feuille de style compilée utilisée par toute l'application.
import './style.css'

// Import des pages principales de l'application.
import Home from './pages/Home'
import AboutKasa from './pages/A-propos'
import Rental from './pages/Logement'
import Error from './components/Error'

// Import des composants communs visibles sur plusieurs pages.
import Header from './components/Header'
import Footer from './components/Footer'

/**
 * COMPOSANT RACINE DE L'APPLICATION
 * ---------------------------------
 * App est le composant qui organise toute la navigation de Kasa.
 *
 */
function App() {
  return (
    <BrowserRouter>
      {/*
        Header est commun à toute l'application.
        Il est placé avant <Routes> afin d'être conservé lors de chaque changement de page.
      */}
      <Header />

      <main>
        <Routes>
          {/*
            Route statique de la page d'accueil.
            Quand l'URL vaut exactement "/", React affiche le composant Home.
          */}
          <Route path="/" element={<Home />} />

          {/*
            ROUTE DYNAMIQUE
            ----------------
            :rentalId représente une valeur variable dans l'URL.

            Exemple :
            /logement/c67ab8a7

            Ici, "c67ab8a7" devient la valeur de rentalId.
            La page Logement récupère ensuite cette valeur avec useParams()
            afin de retrouver le logement correspondant dans logements.json.

          */}
          <Route path="/logement/:rentalId" element={<Rental />} />

          {/* Route statique vers la page À propos. */}
          <Route path="/a-propos" element={<AboutKasa />} />

          {/*
            Route joker "*" : elle intercepte toutes les URL qui ne correspondent
            à aucune route déclarée ci-dessus et affiche alors la page 404.
          */}
          <Route path="*" element={<Error />} />
        </Routes>
      </main>

      {/* Footer commun à toutes les routes, comme le Header. */}
      <Footer />
    </BrowserRouter>
  )
}

export default App
