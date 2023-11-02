import { Link } from 'react-router-dom'
import logo from '../data/logo_kasa.png'

function Header() {
    return (
        <header>
        <Link to="/" className="nav-item">
          <img src={logo} alt="logo kasa" className="logo" />
        </Link>

          <nav className="navbar">
              <Link to="/" className="nav-item">Accueil</Link>
              <Link to="/about" className="nav-item">A propos</Link>
          </nav>
        </header>
    )
}

export default Header
