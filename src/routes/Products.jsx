import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { Product } from '../components/Product.jsx'
import { Loader } from '../components/ui/Loader.jsx'
import { useFetch } from '../utils.js'

export default function Products({ cart, onProductAdd, onProductDelete }) {
  const [products, setProducts] = useState([])

  const { get, loading } = useFetch(import.meta.env.VITE_API_BASE_URL)
  useEffect(() => {
    get('supermarket.json')
      .then(setProducts)
      .catch((error) => console.error('Could not load products', error))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="products-layout">
      <h1>Products</h1>
      <p>Take a look at our products</p>
      <div className="products-grid">
        {loading ? (
          <Loader />
        ) : (
          products.map((product) => (
            <Product
              key={product.id}
              details={product}
              cart={cart}
              onProductAdd={onProductAdd}
              onProductDelete={onProductDelete}
            />
          ))
        )}
      </div>
    </div>
  )
}
Products.propTypes = {
  cart: PropTypes.array.isRequired,
  onProductAdd: PropTypes.func.isRequired,
  onProductDelete: PropTypes.func.isRequired,
}
