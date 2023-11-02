import { Link } from 'react-router-dom'
import logo from '../data/logo_kasa.png'

function Header() {
    return (
        <header>
          <img src={logo} alt="logo kasa" className="logo" />
        <nav className="navbar">
            <Link to="/">Accueil</Link>
            <Link to="/about">A propos</Link>
        </nav>

        </header>
    )
}

export default Header
