import { useOutletContext } from 'react-router-dom'
import { Button } from '../components/ui/Button.jsx'
import { useCart } from '../contexts/cart.jsx'
import { formatCurrency } from '../utils.js'

export default function ProductDetailInfo() {
  const cart = useCart()

  const product = useOutletContext()

  return (
    <>
      <p>
        {product.description} sold at{' '}
        <strong>{formatCurrency(product.price)}</strong> per piece.
      </p>
      <Button onClick={() => cart.addProduct(product)}>
        {formatCurrency(product.price)}
      </Button>
    </>
  )
}
