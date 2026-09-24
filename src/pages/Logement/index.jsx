import { useParams } from 'react-router-dom'

import rentalList from '../../data/logements.json'

import Carousel from '../../components/Carousel'
import Collapse from '../../components/Collapse'
import Error from '../../components/Error'
import Rating from '../../components/Rating'
import Tags from '../../components/Tags'

// Page dynamique utilisée pour afficher le logement correspondant à l'URL.
function Rental() {
  // Récupère l'identifiant défini par la route /logement/:rentalId.
  const { rentalId } = useParams()

  // find() retourne le logement dont l'id correspond à celui présent dans l'URL.
  const rental = rentalList.find((item) => item.id === rentalId)

  // Un identifiant inexistant affiche directement la page 404.
  if (!rental) {
    return <Error />
  }

  return (
    <section className="rental-page">
      <Carousel slides={rental.pictures} title={rental.title} />

      <div className="rental-info-container">
        <div className="rental-info">
          <h1 className="rental-info__title">{rental.title}</h1>
          <p className="rental-info__location">{rental.location}</p>

          <div className="rental-info__tags">
            {/* Le tableau de tags est transmis au composant dédié. */}
            <Tags tag={rental.tags} />
          </div>
        </div>

        <div className="renter-info">
          <div className="renter-info__identity">
            <p className="renter-info__identity__name">{rental.host.name}</p>
            <img
              className="renter-info__identity__pic"
              src={rental.host.picture}
              alt={`Portrait de ${rental.host.name}`}
            />
          </div>

          {/* Rating gère lui-même l'affichage des cinq étoiles. */}
          <Rating rating={rental.rating} />
        </div>
      </div>

      <div className="rental-collapse-container">
        {/* Le même composant Collapse est réutilisé avec un contenu différent. */}
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
              {/* Chaque équipement du tableau devient un élément de liste. */}
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
