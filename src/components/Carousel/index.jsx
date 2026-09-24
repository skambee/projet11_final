import { useState } from 'react'

// Icône commune aux boutons précédent et suivant.
// La flèche "précédente" est obtenue grâce à une rotation en CSS.
import Arrow from '../../assets/forward_arrow.svg'

/**
 * CARROUSEL / GALERIE D'IMAGES
 * ----------------------------
 * Ce composant reçoit deux props :
 * - slides : tableau contenant les URL des photos du logement ;
 * - title : titre du logement, avec une valeur par défaut "Logement".
 *
 */
function Carousel({ slides, title = 'Logement' }) {
  /**
   * Nombre total de photos.
   * Cette valeur sert à :
   * - savoir quand on est arrivé à la dernière image ;
   * - calculer le retour à la dernière image depuis la première ;
   * - décider si les boutons doivent être affichés.
   */
  const length = slides.length

  /**
   * ÉTAT DU CARROUSEL
   * ----------------
   * useState(0) initialise currentSlide à 0.
   * En JavaScript, le premier élément d'un tableau possède l'index 0.
   * La première photo est donc affichée au chargement du composant.
   *
   * setCurrentSlide est la fonction fournie par React pour mettre cet état à jour.
   * Une modification de l'état provoque un nouveau rendu du composant.
   */
  const [currentSlide, setCurrentSlide] = useState(0)

  /**
   * IMAGE PRÉCÉDENTE
   * ----------------
   * Si currentSlide est supérieur à 0, on retire simplement 1.
   * Sinon, nous sommes déjà sur la première image : on repart à la dernière
   * grâce à length - 1.
   *
   * Exemple avec 4 photos : les index vont de 0 à 3.
   * Depuis l'index 0, length - 1 donne donc 3.
   */
  const previousSlide = () => {
    const index = currentSlide > 0 ? currentSlide - 1 : length - 1
    setCurrentSlide(index)
  }

  /**
   * IMAGE SUIVANTE
   * --------------
   * Tant que currentSlide est inférieur au dernier index (length - 1),
   * on ajoute 1.
   * Lorsque la dernière image est atteinte, l'index repasse à 0.
   */
  const nextSlide = () => {
    const index = currentSlide < length - 1 ? currentSlide + 1 : 0
    setCurrentSlide(index)
  }

  return (
    <div className="carousel" role="region" aria-label={`Galerie photos : ${title}`}>
      {/*
        PRINCIPE DU SLIDER
        -----------------
        Toutes les images sont placées horizontalement dans carousel__slider.
        Chaque image occupe 100 % de la largeur du carrousel.

        On déplace ensuite le conteneur complet vers la gauche :
        - index 0 => translateX(0%)
        - index 1 => translateX(-100%)
        - index 2 => translateX(-200%)

        Ainsi, seule l'image correspondant à currentSlide se retrouve dans la zone visible.
        La transition définie en Sass rend ce déplacement animé.
      */}
      <div
        className="carousel__slider"
        style={{ transform: `translateX(${-currentSlide * 100}%)` }}
      >
        {/*
          map() crée une balise <img> pour chaque URL du tableau slides.
          index sert également à produire une numérotation lisible dans le alt.
        */}
        {slides.map((slide, index) => (
          <img
            className="carousel__slider__pictures"
            key={slide}
            src={slide}
            // +1 car l'utilisateur compte les photos à partir de 1, contrairement aux index JS.
            alt={`${title} - photo ${index + 1}`}
          />
        ))}
      </div>

      {/*
        AFFICHAGE CONDITIONNEL
        ---------------------
        Les commandes n'ont aucun intérêt lorsqu'il n'existe qu'une seule photo.
        La condition length > 1 permet donc de ne pas afficher :
        - les deux flèches ;
        - le compteur.

      */}
      {length > 1 && (
        <div className="carousel__commands">
          <button
            type="button"
            className="carousel__commands__buttons"
            onClick={previousSlide}
            aria-label="Afficher l’image précédente"
          >
            {/*
              L'image de flèche est décorative car le bouton possède déjà un aria-label.
              aria-hidden évite donc une information redondante pour les lecteurs d'écran.
            */}
            <img
              className="arrow arrow--backward"
              src={Arrow}
              alt=""
              aria-hidden="true"
            />
          </button>

          {/*
            Le compteur affiche currentSlide + 1 car currentSlide commence à 0.
            Exemple : index 0 => "1/4".
            aria-live permet aux technologies d'assistance d'être informées du changement.
          */}
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
