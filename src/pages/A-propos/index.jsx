// Composants réutilisables de la page.
import Banner from '../../components/Banner'
import Collapse from '../../components/Collapse'

// Image spécifique à la bannière de la page À propos.
import aboutBanner from '../../assets/banner_aboutkasa.png'

/**
 * Les valeurs de Kasa sont stockées dans un tableau d'objets.
 * Chaque objet possède exactement les informations nécessaires au Collapse :
 * un title et un text.
 *
 */
const values = [
  {
    title: 'Fiabilité',
    text: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.',
  },
  {
    title: 'Respect',
    text: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
  },
  {
    title: 'Service',
    text: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
  },
  {
    title: 'Sécurité',
    text: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
]

/**
 * PAGE À PROPOS
 * -------------
 * Cette page illustre la réutilisation de composants :
 * - Banner est réutilisé avec une image/classe différentes ;
 * - Collapse est généré quatre fois à partir du tableau values.
 */
function AboutKasa() {
  return (
    <div>
      <Banner
        picture={aboutBanner}
        // Aucun titre visible n'est requis sur cette bannière.
        title=""
        className="banner banner--higher"
      />

      <section className="kasa-values">
        {/*
          map() génère un Collapse pour chaque valeur de Kasa.
          item.title et item.text sont transmis comme props.
        */}
        {values.map((item) => (
          <Collapse
            // Le titre est unique dans ce tableau et constitue donc une key stable.
            key={item.title}
            title={item.title}
            text={item.text}
            className="collapse"
          />
        ))}
      </section>
    </div>
  )
}

export default AboutKasa
