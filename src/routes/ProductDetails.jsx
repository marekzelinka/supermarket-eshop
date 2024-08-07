import { useEffect, useState } from 'react'
import { NavLink, Outlet, useParams } from 'react-router-dom'
import { Spinner } from '../components/ui/Spinner.jsx'
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

  const tabs = [
    { label: 'Details', href: '', end: true },
    { label: 'Nutrition', href: 'nutrition' },
    { label: 'Storage', href: 'storage' },
  ]

  if (!product) {
    return (
      <div className="product-details-layout">
        <Spinner />
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
            {tabs.map((tab) => (
              <li key={tab.label}>
                <NavLink
                  to={tab.href}
                  end={tab.end}
                  className={({ isActive }) => (isActive ? 'tab-active' : '')}
                >
                  {tab.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <Outlet context={product} />
      </div>
    </div>
  )
}
