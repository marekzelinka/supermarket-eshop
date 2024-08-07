import PropTypes from 'prop-types'
import { useOutletContext } from 'react-router-dom'
import { Button } from '../components/ui/Button.jsx'
import { formatCurrency } from '../utils.js'

export default function ProductDetailInfo({ onProductAdd }) {
  const product = useOutletContext()

  return (
    <>
      <p>
        {product.description} sold at{' '}
        <strong>{formatCurrency(product.price)}</strong> per piece.
      </p>
      <Button onClick={() => onProductAdd(product)}>
        {formatCurrency(product.price)}
      </Button>
    </>
  )
}
ProductDetailInfo.propTypes = {
  onProductAdd: PropTypes.func.isRequired,
}
