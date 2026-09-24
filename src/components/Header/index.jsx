import { Link, NavLink } from 'react-router-dom'

import logo from '../../assets/logo.svg'

// Les liens sont centralisés pour générer le menu sans dupliquer le JSX.
const navLink = [
  { name: 'Accueil', href: '/' },
  { name: 'A Propos', href: '/a-propos' },
]

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="Kasa" />
      </Link>

      <nav className="header__nav">
        {navLink.map((item) => (
          <NavLink
            to={item.href}
            key={item.name}
            // NavLink fournit isActive pour styliser la page actuellement affichée.
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
