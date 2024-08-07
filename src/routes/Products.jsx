import PropTypes from 'prop-types'
import { Product } from '../components/Product.jsx'
import { Spinner } from '../components/ui/Spinner.jsx'
import { useProducts } from '../data.js'

export default function Products({ cart, onProductAdd, onProductDelete }) {
  const products = useProducts()

  return (
    <div className="products-layout">
      <h1>Products</h1>
      <p>Take a look at our products</p>
      {products.isLoading ? (
        <Spinner />
      ) : (
        <div className="products-grid">
          {products.data.map((product) => (
            <Product
              key={product.id}
              details={product}
              cart={cart}
              onProductAdd={onProductAdd}
              onProductDelete={onProductDelete}
            />
          ))}
        </div>
      )}
    </div>
  )
}
Products.propTypes = {
  cart: PropTypes.array.isRequired,
  onProductAdd: PropTypes.func.isRequired,
  onProductDelete: PropTypes.func.isRequired,
}
