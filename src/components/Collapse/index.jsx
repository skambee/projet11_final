import { useId, useState } from 'react'

// Icône affichée dans le bouton du Collapse.
import expandArrow from '../../assets/expand_arrow.svg'

/**
 * COMPOSANT COLLAPSE RÉUTILISABLE
 * -------------------------------
 * Le composant reçoit :
 * - title : le titre visible du bloc ;
 * - text : le contenu à afficher lorsqu'il est ouvert ;
 * - className : permet d'adapter la présentation selon la page.
 *
 * Il est réutilisé :
 * - sur la page À propos pour les valeurs de Kasa ;
 * - sur la page Logement pour Description et Équipements.
 *
 */
function Collapse({ title, text, className }) {
  /**
   * open contient l'état d'ouverture du composant :
   * - false : fermé ;
   * - true : ouvert.
   *
   * false est utilisé comme valeur initiale conformément à la maquette :
   * tous les Collapse sont fermés lors du premier affichage.
   */
  const [open, setOpen] = useState(false)

  /**
   * useId() génère un identifiant unique pour cette instance du composant.
   * Cela est utile car plusieurs Collapse peuvent être présents sur la même page.
   *
   * Le bouton utilise aria-controls={contentId} pour indiquer précisément
   * quel contenu il contrôle.
   */
  const contentId = useId()

  /**
   * FONCTION D'OUVERTURE / FERMETURE
   * --------------------------------
   * setOpen reçoit une fonction basée sur la valeur précédente.
   * !previousState inverse le booléen :
   * false -> true / true -> false.
   *
   * Cette forme est adaptée lorsqu'un nouvel état dépend directement de l'ancien état.
   */
  const toggle = () => {
    setOpen((previousState) => !previousState)
  }

  return (
    <div className={className}>
      {/*
        Un vrai <button> est utilisé pour l'interaction.
        Cela apporte nativement la navigation clavier et un comportement accessible.
      */}
      <button
        type="button"
        className="collapse__title-container"
        onClick={toggle}
        // aria-expanded reflète directement l'état réel du Collapse.
        aria-expanded={open}
        // Lie ce bouton au contenu dont l'id est généré avec useId().
        aria-controls={contentId}
      >
        <span className="collapse__title-container__title">{title}</span>

        {/*
          La classe CSS change selon l'état open.
          Lorsque le Collapse est ouvert, expand_icon--opened fait pivoter la flèche.
        */}
        <img
          className={!open ? 'expand_icon' : 'expand_icon expand_icon--opened'}
          src={expandArrow}
          alt=""
          aria-hidden="true"
        />
      </button>

      {/*
        RENDU CONDITIONNEL
        -----------------
        Avec {open && (...)}, le contenu n'est rendu que lorsque open vaut true.
        Lorsqu'il est fermé, le bloc n'est donc pas présent dans le DOM.

        text peut contenir une simple chaîne de caractères OU du JSX.
        C'est pour cela que le même Collapse peut afficher une description texte
        et une liste <ul> d'équipements.
      */}
      {open && (
        <div className="collapse__text" id={contentId}>
          {text}
        </div>
      )}
    </div>
  )
}

export default Collapse
