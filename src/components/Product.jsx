import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useCart } from '../contexts/cart.jsx'
import { formatCurrency } from '../utils.js'
import { Button } from './ui/Button.jsx'

export function Product({ details }) {
  const cart = useCart()
  const productFromCart = cart.findProductById(details.id)
  const quantity = productFromCart?.quantity ?? 0

  return (
    <div className="product">
      <div className="product-image-container">
        <Link to={`/products/${details.id}`}>
          <img
            src={details.image}
            alt={details.name}
            width={100}
            height={100}
            className="product-image"
          />
        </Link>
        {quantity ? (
          <div className="product-quantity-container">
            <div className="product-quantity">{quantity}</div>
          </div>
        ) : null}
      </div>
      <div className="product-info">
        <h3>{details.name}</h3>
        <p>{details.description}</p>
      </div>
      <div className="product-checkout">
        <div>
          {quantity ? (
            <Button
              outline
              onClick={() => cart.deleteProductById(details.id)}
              className="product-delete"
            >
              x
            </Button>
          ) : null}
        </div>
        <Button outline onClick={() => cart.addProduct(details)}>
          {formatCurrency(details.price)}
        </Button>
      </div>
    </div>
  )
}
Product.propTypes = {
  details: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    price_id: PropTypes.string.isRequired,
  }).isRequired,
}
