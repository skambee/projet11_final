import { useId, useState } from 'react'

import expandArrow from '../../assets/expand_arrow.svg'

// Bloc dépliable réutilisé sur les pages Logement et À propos.
function Collapse({ title, text, className }) {
  // Les Collapse sont fermés par défaut.
  const [open, setOpen] = useState(false)

  // Identifiant unique reliant le bouton au contenu contrôlé.
  const contentId = useId()

  const toggle = () => {
    setOpen((previousState) => !previousState)
  }

  return (
    <div className={className}>
      <button
        type="button"
        className="collapse__title-container"
        onClick={toggle}
        aria-expanded={open}
        aria-controls={contentId}
      >
        <span className="collapse__title-container__title">{title}</span>

        {/* La classe supplémentaire fait pivoter la flèche lorsque le bloc est ouvert. */}
        <img
          className={!open ? 'expand_icon' : 'expand_icon expand_icon--opened'}
          src={expandArrow}
          alt=""
          aria-hidden="true"
        />
      </button>

      {/* Le contenu n'est rendu que lorsque le Collapse est ouvert. */}
      {open && (
        <div className="collapse__text" id={contentId}>
          {text}
        </div>
      )}
    </div>
  )
}

export default Collapse
