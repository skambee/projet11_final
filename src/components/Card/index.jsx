/**
 * Carte réutilisable représentant un logement sur la page d'accueil.
 * Le titre et l'image sont reçus depuis le composant Home via les props.
 */
function Card({ title, picture }) {
  return (
    <div className="card">
      <img className="card__img" src={picture} alt="" />
      <h2 className="card__title"> {title} </h2>
    </div>
  )
}

export default Card
