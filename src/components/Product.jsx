import PropTypes from 'prop-types'
import { Button } from './ui/Button.jsx'

export function Product({ details }) {
  return (
    <div className="product">
      <div className="product-image-container">
        <img
          src={details.image}
          alt={details.name}
          width={100}
          height={100}
          className="product-image"
        />
        <div className="product-quantity-container">
          <div className="product-quantity">0</div>
        </div>
      </div>
      <div className="product-info">
        <h3>{details.name}</h3>
        <p>{details.description}</p>
      </div>
      <div className="product-checkout">
        <div>
          <Button outline className="product-delete">
            x
          </Button>
        </div>
        <Button outline>${details.price}</Button>
      </div>
    </div>
  )
}
Product.propTypes = {
  details: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
}
