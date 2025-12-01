import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './Context/CartContex'
import { Home } from "./pages/Home/Home"
import { Shop } from "./pages/Shop/Shop"
import { Blog } from "./pages/Blog/Blog"
import { About } from "./pages/About/About"
import { Contact } from "./pages/Contact/Contact"
import { Cart } from "./pages/Cart/Cart"
import { ProductDetalis } from './pages/Product-Detalis/ProductDetalis';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetalis />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
