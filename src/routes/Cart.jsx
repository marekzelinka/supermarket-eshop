import { loadStripe } from '@stripe/stripe-js'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { Button } from '../components/ui/Button.jsx'
import { Input } from '../components/ui/Input.jsx'

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
          <>
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
            <PayForm cart={cart} />
          </>
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

function PayForm({ cart }) {
  const [email, setEmail] = useState('')

  async function handleFormSubmit(event) {
    event.preventDefault()

    const lineItems = cart.map((product) => {
      return { price: product.price_id, quantity: product.quantity }
    })

    const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY)
    await stripe.redirectToCheckout({
      lineItems: lineItems,
      mode: 'payment',
      successUrl: import.meta.env.VITE_STRIPE_SUCCESS_URL,
      cancelUrl: import.meta.env.VITE_STRIPE_CANCEL_URL,
      customerEmail: email,
    })
  }

  return (
    <form className="pay-form" onSubmit={handleFormSubmit}>
      <p>Enter your email and then click on pay</p>
      <p>Your products will be delivered to you on the same day!</p>
      <Input
        type="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Your email"
      />
      <Button type="submit">Pay</Button>
    </form>
  )
}
PayForm.propTypes = Cart.propTypes
