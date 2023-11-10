import { Link } from 'react-router-dom'
import error_404 from '../data/404.png'


function Error() {
  return (
      <div className="error-container">
          <img src={error_404} alt="Error page" className='error-404' />
          <p className='not-found'>Oups! La page que vous demandez n'existe pas.</p>
          <Link to={`/`}>
            <p className='error-to-home'>Retourner sur la page d’accueil</p>
          </Link>
      </div>
  )
}

export default Error
