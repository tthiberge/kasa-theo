import { NavLink } from 'react-router-dom'
import logo from '../data/logo_kasa.png'

function Header() {
    return (
        <header>
          <NavLink to="/" className="nav-item">
            <img src={logo} alt="logo kasa" className="logo" />
          </NavLink>

          <nav className="navbar">
              <NavLink to="/" className="nav-item">Accueil</NavLink>
              <NavLink to="/about" className="nav-item">A propos</NavLink>
          </nav>
        </header>
    )
}

export default Header
