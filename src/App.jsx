import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './style.css'

import Home from './pages/Home'
import AboutKasa from './pages/A-propos'
import Rental from './pages/Logement'
import Error from './components/Error'

import Header from './components/Header'
import Footer from './components/Footer'

// Composant racine : BrowserRouter gère la navigation entre les différentes pages.
function App() {
  return (
    <BrowserRouter>
      {/* Header et Footer restent affichés quelle que soit la route. */}
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Route dynamique : rentalId correspond à l'identifiant du logement dans l'URL. */}
          <Route path="/logement/:rentalId" element={<Rental />} />

          <Route path="/a-propos" element={<AboutKasa />} />

          {/* Toute URL inconnue affiche la page 404. */}
          <Route path="*" element={<Error />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  )
}

export default App
