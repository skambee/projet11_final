// Link permet de revenir à l'accueil sans rechargement complet de l'application.
import { Link } from 'react-router-dom'

/**
 * Page d'erreur réutilisée pour les routes inconnues et les identifiants de logement invalides.
 */
function Error() {
  return (
    <div className="error">
      <h1 className="error__title">404</h1>
      <p className="error__message">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/">
        <p className="error__redirect active-link">
          Retourner sur la page d’accueil
        </p>
      </Link>
    </div>
  )
}

export default Error
