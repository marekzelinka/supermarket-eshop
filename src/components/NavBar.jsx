import { NavLink } from 'react-router-dom'
import { useCart } from '../contexts/cart'

export function NavBar() {
  const cart = useCart()
  const cartCount = cart.getCurrentCount()

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
