// Link réalise une navigation interne simple.
// NavLink offre en plus l'information isActive sur la route actuellement affichée.
import { Link, NavLink } from 'react-router-dom'

// Logo principal Kasa.
import logo from '../../assets/logo.svg'

/**
 * Les éléments du menu sont regroupés dans un tableau de données.
 * Cela permet de générer les liens avec map() au lieu de dupliquer le JSX.
 */
const navLink = [
  { name: 'Accueil', href: '/' },
  { name: 'A Propos', href: '/a-propos' },
]

/**
 * HEADER COMMUN À TOUTE L'APPLICATION
 * -----------------------------------
 * Le Header est appelé dans App.jsx en dehors de <Routes>.
 * Il reste donc visible sur toutes les pages.
 *
 */
function Header() {
  return (
    <header className="header">
      {/* Le logo agit comme un raccourci vers la page d'accueil. */}
      <Link to="/">
        <img className="header__logo" src={logo} alt="Kasa" />
      </Link>

      <nav className="header__nav">
        {navLink.map((item) => (
          <NavLink
            to={item.href}
            key={item.name}
            /**
             * NavLink appelle cette fonction et fournit isActive.
             * Si la route correspond à l'URL actuelle, on applique active-link,
             * ce qui permet de souligner visuellement la page courante.
             */
            className={({ isActive }) => {
              return isActive ? 'active-link' : ''
            }}
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

export default Header
