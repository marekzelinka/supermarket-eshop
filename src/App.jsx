import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NavBar } from './components/NavBar.jsx'
import About from './routes/About.jsx'
import Cart from './routes/Cart.jsx'
import Home from './routes/Home.jsx'
import PaymentSuccess from './routes/PaymentSuccess.jsx'
import ProductDetails from './routes/ProductDetails.jsx'
import ProductDetailInfo from './routes/ProductDetailsInfo.jsx'
import ProductDetailNutrition from './routes/ProductDetailsNutrition.jsx'
import ProductDetailStorage from './routes/ProductDetailsStorage.jsx'
import Products from './routes/Products.jsx'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />}>
            <Route path="" element={<ProductDetailInfo />} />
            <Route path="nutrition" element={<ProductDetailNutrition />} />
            <Route path="storage" element={<ProductDetailStorage />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
