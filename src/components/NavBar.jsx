import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

export function NavBar({ cart }) {
  const cartCount = cart.reduce((total, product) => total + product.quantity, 0)

  const navigation = [
    { label: 'Home', href: '/' },
    { label: 'About us', href: '/about' },
    { label: 'Products', href: '/products' },
  ]

  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-brand">
        SuperM
      </NavLink>
      <ul>
        {navigation.map((item) => (
          <li key={item.label} className="nav-item">
            <NavLink
              to={item.href}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
        <li>
          <NavLink to="/cart" className="nav-item nav-cart btn btn-accent">
            Cart ({cartCount})
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
NavBar.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      price_id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
}
