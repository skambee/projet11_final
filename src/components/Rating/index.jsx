// Deux versions d'une étoile : inactive (grise) et active (orange).
import greyStar from '../../assets/rate_star.svg'
import orangeStar from '../../assets/rate_star_active.svg'

/**
 * COMPOSANT DE NOTATION
 * ---------------------
 * rating contient la note du logement, comprise entre 1 et 5.
 * Le composant affiche toujours cinq étoiles mais choisit leur image
 * selon la valeur de rating.
 *
 */
function Rating({ rating }) {
  // Cinq positions correspondant aux cinq étoiles possibles.
  const range = [1, 2, 3, 4, 5]

  return (
    <div className="rating-container" aria-label={`Note : ${rating} sur 5`}>
      {range.map((rangeElem) => (
        <img
          className="rating-container__stars"
          /**
           * CONDITION TERNAIRE
           * ------------------
           * Si la note est supérieure ou égale à la position actuelle,
           * l'étoile orange est utilisée ; sinon, on affiche l'étoile grise.
           *
           * Exemple avec rating = 3 :
           * positions 1, 2 et 3 -> orange ; positions 4 et 5 -> grise.
           */
          src={rating >= rangeElem ? orangeStar : greyStar}
          alt=""
          // Le conteneur fournit déjà la note textuellement via aria-label.
          aria-hidden="true"
          key={rangeElem}
        />
      ))}
    </div>
  )
}

export default Rating
