import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NavBar } from './components/NavBar.jsx'
import About from './routes/About.jsx'
import Cart from './routes/Cart.jsx'
import Home from './routes/Home.jsx'
import ProductDetails from './routes/ProductDetails.jsx'
import ProductDetailInfo from './routes/ProductDetailsInfo.jsx'
import ProductDetailNutrition from './routes/ProductDetailsNutrition.jsx'
import ProductDetailStorage from './routes/ProductDetailsStorage.jsx'
import Products from './routes/Products.jsx'

function App() {
  const [cart, setCart] = useState(() => {
    let savedCart = []

    try {
      savedCart = JSON.parse(localStorage.getItem('cart')) ?? []
    } catch {
      /* empty */
    }

    return savedCart
  })

  useEffect(() => {
    if (cart) {
      localStorage.setItem('cart', JSON.stringify(cart))
    }
  }, [cart])

  function handleProductAdd(newProduct) {
    const existingProduct = cart.find((product) => product.id === newProduct.id)

    if (existingProduct) {
      // increase quantity
      const updatedCart = cart.map((product) => {
        if (product.id === newProduct.id) {
          return {
            ...product,
            quantity: product.quantity + 1,
          }
        }
        return product
      })

      setCart(updatedCart)
    } else {
      // product is new to the cart
      setCart([
        ...cart,
        {
          ...newProduct,
          quantity: 1,
        },
      ])
    }
  }

  function handleProductDelete(id) {
    const updatedCart = cart.filter((product) => product.id !== id)
    setCart(updatedCart)
  }

  return (
    <BrowserRouter>
      <NavBar cart={cart} />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/products"
            element={
              <Products
                cart={cart}
                onProductAdd={handleProductAdd}
                onProductDelete={handleProductDelete}
              />
            }
          />
          <Route path="/products/:id" element={<ProductDetails />}>
            <Route
              path=""
              element={<ProductDetailInfo onProductAdd={handleProductAdd} />}
            />
            <Route path="nutrition" element={<ProductDetailNutrition />} />
            <Route path="storage" element={<ProductDetailStorage />} />
          </Route>
          <Route path="/cart" element={<Cart cart={cart} />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
