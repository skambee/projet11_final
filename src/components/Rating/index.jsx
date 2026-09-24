import greyStar from '../../assets/rate_star.svg'
import orangeStar from '../../assets/rate_star_active.svg'

// Affiche une note sur cinq à partir de la valeur reçue en prop.
function Rating({ rating }) {
  const range = [1, 2, 3, 4, 5]

  return (
    <div
      className="rating-container"
      role="img"
      aria-label={`Note : ${rating} sur 5`}
    >
      {range.map((rangeElem) => (
        <img
          className="rating-container__stars"
          // Active l'étoile tant que sa position ne dépasse pas la note.
          src={rating >= rangeElem ? orangeStar : greyStar}
          alt=""
          aria-hidden="true"
          key={rangeElem}
        />
      ))}
    </div>
  )
}

export default Rating
