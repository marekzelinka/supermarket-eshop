import PropTypes from 'prop-types'
import { useOutletContext } from 'react-router-dom'
import { Button } from '../components/ui/Button.jsx'

export default function ProductDetailInfo({ onProductAdd }) {
  const product = useOutletContext()

  return (
    <>
      <p>
        {product.description} sold at <strong>${product.price}</strong> per
        piece.
      </p>
      <Button onClick={() => onProductAdd(product)}>${product.price}</Button>
    </>
  )
}
ProductDetailInfo.propTypes = {
  onProductAdd: PropTypes.func.isRequired,
}
