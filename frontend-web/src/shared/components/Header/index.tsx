import { Link } from 'react-router-dom'
import './Header.css'

export const Header = () => {
  return (
    <header id="header">
      <nav className="centralize">
        <Link to="/random-user">
          <h1>
            <img
              className="logo"
              src="/src/assets/images/logo_sharenergy.png"
              alt="Sharenergy"
            />
          </h1>
        </Link>

        <Link to="/http-cat">Http Cat</Link>
        <Link to="/random-dog">Random Dog</Link>
        <Link to="/random-user">Random User</Link>
        <Link to="/user">User</Link>
      </nav>
    </header>
  )
}
