import { useState } from 'react'

import Arrow from '../../assets/forward_arrow.svg'

// Galerie réutilisable affichant les photos d'un logement.
function Carousel({ slides, title = 'Logement' }) {
  const length = slides.length

  // Mémorise l'index de la photo actuellement affichée.
  const [currentSlide, setCurrentSlide] = useState(0)

  // Revient à la dernière image lorsqu'on recule depuis la première.
  const previousSlide = () => {
    const index = currentSlide > 0 ? currentSlide - 1 : length - 1
    setCurrentSlide(index)
  }

  // Revient à la première image après la dernière.
  const nextSlide = () => {
    const index = currentSlide < length - 1 ? currentSlide + 1 : 0
    setCurrentSlide(index)
  }

  return (
    <div
      className="carousel"
      role="region"
      aria-label={`Galerie photos : ${title}`}
    >
      {/* Le slider se décale de 100 % par image selon l'index courant. */}
      <div
        className="carousel__slider"
        style={{ transform: `translateX(${-currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <img
            className="carousel__slider__pictures"
            key={slide}
            src={slide}
            alt={`${title} - vue ${index + 1}`}
          />
        ))}
      </div>

      {/* Les commandes sont inutiles lorsqu'il n'y a qu'une seule photo. */}
      {length > 1 && (
        <div className="carousel__commands">
          <button
            type="button"
            className="carousel__commands__buttons"
            onClick={previousSlide}
            aria-label="Afficher l’image précédente"
          >
            <img
              className="arrow arrow--backward"
              src={Arrow}
              alt=""
              aria-hidden="true"
            />
          </button>

          {/* +1 permet d'afficher une numérotation utilisateur à partir de 1. */}
          <p className="carousel__commands__photocount" aria-live="polite">
            {currentSlide + 1}/{slides.length}
          </p>

          <button
            type="button"
            className="carousel__commands__buttons"
            onClick={nextSlide}
            aria-label="Afficher l’image suivante"
          >
            <img className="arrow" src={Arrow} alt="" aria-hidden="true" />
          </button>
        </div>
      )}
    </div>
  )
}

export default Carousel
