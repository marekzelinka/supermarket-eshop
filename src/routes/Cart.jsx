import { loadStripe } from '@stripe/stripe-js'
import { useState } from 'react'
import { Button } from '../components/ui/Button.jsx'
import { Input } from '../components/ui/Input.jsx'
import { useCart } from '../contexts/cart.jsx'

export default function Cart() {
  const cart = useCart()
  const totalPrice = cart.getTotalPrice()

  return (
    <div className="cart-layout">
      <div>
        <h1>Your Cart</h1>
        {cart.products.length ? (
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
                {cart.products.map((product) => (
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
            <PayForm />
          </>
        ) : (
          <p>You have not added any product to your cart yet.</p>
        )}
      </div>
    </div>
  )
}

function PayForm() {
  const cart = useCart()

  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  async function handleFormSubmit(event) {
    event.preventDefault()

    setIsLoading(true)

    const lineItems = cart.products.map((product) => {
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

    setIsLoading(false)
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
      <Button type="submit" disabled={isLoading}>
        {isLoading ? 'Please wait…' : 'Pay'}
      </Button>
    </form>
  )
}
