/**
 * BANNIÈRE RÉUTILISABLE
 * ---------------------
 * Les props permettent d'utiliser le même composant sur plusieurs pages :
 * - picture : image de fond de la bannière ;
 * - title : titre éventuel affiché au-dessus de l'image ;
 * - className : variante CSS utilisée selon la page.
 *
 */
function Banner({ title, picture, className }) {
  return (
    <div className={className}>
      {/* Image décorative : le texte utile est fourni séparément lorsqu'un titre existe. */}
      <img className="banner__img" src={picture} alt="" />

      {/*
        Rendu conditionnel : le <h1> n'existe que si title contient une valeur.
        Sur la page À propos, title="" ; aucun titre n'est donc affiché.
      */}
      {title && <h1 className="banner__title">{title}</h1>}
    </div>
  )
}

export default Banner
