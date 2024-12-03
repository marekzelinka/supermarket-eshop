import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "../contexts/cart.jsx";
import { Button } from "./ui/Button.jsx";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Products", href: "/products" },
];

export function NavBar() {
  const cart = useCart();
  const cartCount = cart.getCurrentCount();

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    if (prefersDark) {
      setIsDarkTheme(true);
    }
  }, []);

  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkTheme]);

  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-brand">
        SuperM
      </NavLink>
      <ul>
        <li className="nav-item">
          <Button
            className="theme-switcher"
            onClick={() => setIsDarkTheme((isDarkTheme) => !isDarkTheme)}
          >
            {isDarkTheme ? "Dark" : "Light"}
          </Button>
        </li>
        {navigation.map((item) => (
          <li key={item.label} className="nav-item">
            <NavLink
              to={item.href}
              className={({ isActive }) => (isActive ? "active" : "")}
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
  );
}
