import { useEffect, useState } from 'react'
import { Product } from '../components/Product.jsx'
import { Loader } from '../components/ui/Loader.jsx'
import { useFetch } from '../utils.js'

export default function Products() {
  const [products, setProducts] = useState([])
  const { get, loading } = useFetch(import.meta.env.VITE_API_BASE_URL)

  useEffect(() => {
    get('supermarket.json').then(setProducts).catch(console.error)
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
            <Product key={product.id} details={product} />
          ))
        )}
      </div>
    </div>
  )
}
