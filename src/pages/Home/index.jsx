import { Link } from 'react-router-dom'

import Banner from '../../components/Banner'
import Card from '../../components/Card'
import homeBanner from '../../assets/banner_home.png'
import rentalList from '../../data/logements.json'

// Page d'accueil : affiche la bannière puis l'ensemble des logements disponibles.
function Home() {
  return (
    <div>
      <Banner
        picture={homeBanner}
        title="Chez vous, partout et ailleurs"
        className="banner"
      />

      <div className="rental-section">
        <div className="rental-section__cards-container">
          {/* map() génère une carte à partir de chaque logement du fichier JSON. */}
          {rentalList.map((rental) => (
            <Link
              // L'identifiant est ajouté à l'URL pour ouvrir la fiche correspondante.
              to={`/logement/${rental.id}`}
              key={rental.id}
            >
              <Card picture={rental.cover} title={rental.title} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
