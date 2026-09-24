// useParams permet de lire les paramètres dynamiques présents dans l'URL.
import { useParams } from 'react-router-dom'

// Données locales contenant l'ensemble des logements.
import rentalList from '../../data/logements.json'

// Composants réutilisables utilisés pour construire une fiche logement.
import Carousel from '../../components/Carousel'
import Collapse from '../../components/Collapse'
import Error from '../../components/Error'
import Rating from '../../components/Rating'
import Tags from '../../components/Tags'

/**
 * PAGE DE DÉTAIL D'UN LOGEMENT
 * ----------------------------
 * Cette page est dynamique : le même composant Rental est utilisé pour tous les logements.
 * Le contenu affiché dépend uniquement de l'identifiant présent dans l'URL.
 *
 */
function Rental() {
  /**
   * RÉCUPÉRATION DE L'ID DANS L'URL
   * --------------------------------
   * Exemple : /logement/c67ab8a7
   * Avec la route définie comme /logement/:rentalId,
   * useParams() retourne notamment : { rentalId: 'c67ab8a7' }
   *
   * La déstructuration permet ici de récupérer directement rentalId.
   */
  const { rentalId } = useParams()

  /**
   * RECHERCHE DU LOGEMENT
   * ---------------------
   * find() parcourt rentalList et renvoie le PREMIER objet pour lequel
   * item.id === rentalId est vrai.
   *
   * Contrairement à map(), find() ne crée pas une nouvelle liste :
   * il cherche un seul élément précis.
   *
   * Si aucun logement ne correspond, find() renvoie undefined.
   */
  const rental = rentalList.find((item) => item.id === rentalId)

  /**
   * GESTION D'UN ID INVALIDE
   * -----------------------
   * Si l'utilisateur modifie manuellement l'URL ou utilise un identifiant inexistant,
   * rental vaut undefined.
   * On arrête alors le rendu normal de la fiche et on retourne immédiatement Error.
   *
   */
  if (!rental) {
    return <Error />
  }

  return (
    <section className="rental-page">
      {/*
        Le Carousel reçoit :
        - slides : le tableau complet des URLs des photos ;
        - title : le titre du logement, utilisé notamment dans les textes alternatifs.
      */}
      <Carousel slides={rental.pictures} title={rental.title} />

      <div className="rental-info-container">
        <div className="rental-info">
          {/* Les informations simples peuvent être affichées directement depuis l'objet rental. */}
          <h1 className="rental-info__title">{rental.title}</h1>
          <p className="rental-info__location">{rental.location}</p>

          <div className="rental-info__tags">
            {/*
              rental.tags est un tableau.
              On transmet ce tableau au composant Tags qui se charge de générer la liste.
            */}
            <Tags tag={rental.tags} />
          </div>
        </div>

        <div className="renter-info">
          <div className="renter-info__identity">
            {/*
              host est un objet imbriqué dans le logement.
              On accède donc à son nom et à sa photo avec rental.host.name / picture.
            */}
            <p className="renter-info__identity__name">{rental.host.name}</p>
            <img
              className="renter-info__identity__pic"
              src={rental.host.picture}
              alt={`Portrait de ${rental.host.name}`}
            />
          </div>

          {/*
            Rating reçoit uniquement la note.
            La logique qui décide quelles étoiles sont actives reste encapsulée
            dans le composant Rating afin d'alléger cette page.
          */}
          <Rating rating={rental.rating} />
        </div>
      </div>

      <div className="rental-collapse-container">
        {/*
          RÉUTILISATION DU MÊME COMPOSANT
          --------------------------------
          Les deux blocs utilisent exactement le même composant Collapse.
          Seules leurs props changent.

          C'est un bon exemple de composant réutilisable : on évite de coder deux fois
          la logique d'ouverture/fermeture.
        */}
        <Collapse
          className="collapse collapse--small"
          title="Description"
          text={rental.description}
        />

        <Collapse
          className="collapse collapse--small"
          title="Équipements"
          text={
            <ul>
              {/*
                equipments est un tableau.
                map() transforme chaque équipement en <li>.
                La valeur de l'équipement sert ici de key car chaque valeur est distincte.
              */}
              {rental.equipments.map((equipment) => (
                <li key={equipment}>{equipment}</li>
              ))}
            </ul>
          }
        />
      </div>
    </section>
  )
}

export default Rental
