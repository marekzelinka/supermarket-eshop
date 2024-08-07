import PropTypes from 'prop-types'

export default function Cart({ cart }) {
  const totalPrice = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0,
  )

  return (
    <div className="cart-layout">
      <div>
        <h1>Your Cart</h1>
        {cart.length ? (
          <table className="table table-cart">
            <thead>
              <tr>
                <th width="25%" className="th-product">
                  Product
                </th>
                <th width="20%">Unit price</th>
                <th width="10%">Quanity</th>
                <th width="25%">Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product) => (
                <tr key={product.id}>
                  <td>
                    <img src={product.image} width={30} height={30} alt="" />{' '}
                    {product.name}
                  </td>
                  <td>${product.price}</td>
                  <td>{product.quantity}</td>
                  <td>
                    <strong>${product.price * product.quantity}</strong>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th colSpan={2}></th>
                <th className="cart-highlight">Total</th>
                <th className="cart-highlight">${totalPrice}</th>
              </tr>
            </tfoot>
          </table>
        ) : (
          <p>You have not added any product to your cart yet.</p>
        )}
      </div>
    </div>
  )
}
Cart.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      price_id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
}
