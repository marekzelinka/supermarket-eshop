import { useEffect, useState } from 'react'
import { NavLink, Outlet, useParams } from 'react-router-dom'
import { Loader } from '../components/ui/Loader.jsx'
import { useFetch } from '../utils.js'

export default function ProductDetails() {
  const [product, setProduct] = useState(null)

  const { id } = useParams()
  const { get } = useFetch(import.meta.env.VITE_API_BASE_URL)
  useEffect(() => {
    get(`productinfo/id${id}.json`)
      .then(setProduct)
      .catch((error) => console.error('Could not load product details', error))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!product) {
    return (
      <div className="product-details-layout">
        <Loader />
      </div>
    )
  }

  return (
    <div className="product-details-layout">
      <div>
        <h2>{product.name}</h2>
        <img
          src={product.image}
          alt={product.name}
          width={125}
          height={125}
          className="product-details-image"
        />
      </div>
      <div>
        <div className="tabs">
          <ul>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'tab-active' : '')}
                to=""
                end
              >
                Details
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'tab-active' : '')}
                to="nutrition"
              >
                Nutrition
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'tab-active' : '')}
                to="storage"
              >
                Storage
              </NavLink>
            </li>
          </ul>
        </div>
        <Outlet context={product} />
      </div>
    </div>
  )
}
