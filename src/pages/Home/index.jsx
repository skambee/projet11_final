// Link permet une navigation interne sans rechargement complet de la page.
import { Link } from 'react-router-dom'

// Composants réutilisables utilisés pour construire la page d'accueil.
import Banner from '../../components/Banner'
import Card from '../../components/Card'

// Image affichée dans la bannière de la page d'accueil.
import homeBanner from '../../assets/banner_home.png'

// Données locales contenant tous les logements à afficher.
import rentalList from '../../data/logements.json'

/**
 * PAGE D'ACCUEIL
 * --------------
 * Cette page affiche :
 * 1. la bannière principale ;
 * 2. la liste des logements sous forme de cartes cliquables.
 *
 */
function Home() {
  return (
    <div>
      {/*
        Banner est un composant réutilisable.
        Ici, on lui transmet l'image, le titre et la classe CSS adaptés à l'accueil.
      */}
      <Banner
        picture={homeBanner}
        title="Chez vous, partout et ailleurs"
        className="banner"
      />

      <section className="rental-section">
        <div className="rental-section__cards-container">
          {/*
            rentalList.map(...)
            -------------------
            map() parcourt le tableau de logements et retourne un élément React
            pour chaque objet du fichier JSON.

            "rental" représente le logement actuellement parcouru.
            On peut donc utiliser rental.id, rental.cover et rental.title.

          */}
          {rentalList.map((rental) => (
            <Link
              // L'id du logement est injecté dans l'URL pour ouvrir la bonne fiche.
              to={`/logement/${rental.id}`}
              // key aide React à identifier chaque élément d'une liste de manière stable.
              key={rental.id}
            >
              {/* Les données du logement sont transmises à Card via les props. */}
              <Card picture={rental.cover} title={rental.title} />
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
