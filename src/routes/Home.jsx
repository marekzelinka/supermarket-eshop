import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Home({ cart }) {
  return (
    <div className="home-layout">
      <div>
        <h1>Online shopping simplified</h1>
        <p>
          Order your groceries from <em>SuperM</em> with our easy to use app,
          and get your products delivered straight to your doorstep.
        </p>
        <div className="home-cta">
          <Link to="/products" className="btn btn-default">
            Start shopping
          </Link>
          {cart.length ? (
            <Link to="/cart" className="btn btn-accent">
              Your cart
            </Link>
          ) : null}
        </div>
      </div>
      <img
        src="https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto,w_700/v1607770215/react-tutorial/supermarket/home.jpg"
        alt=""
        width={350}
        height={240}
        className="rounded home-image"
      />
    </div>
  )
}
Home.propTypes = {
  cart: PropTypes.array.isRequired,
}
