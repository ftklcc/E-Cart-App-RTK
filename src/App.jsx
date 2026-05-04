import { Route, Routes } from "react-router-dom";
//PAges
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import Contact from "./pages/Contact.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import Cart from "./pages/Cart.jsx";
//Components
import CartStorageSync from "./components/cart/CartStorageSync.jsx";
import CustomAlert from "./components/CustomAlert/CustomAlert.jsx";
import Footer from "./layouts/footer/Footer.jsx";
import ScrollTop from "./utils/ScrollTop.js";
import Navbar from "./layouts/header/Navbar.jsx";

import './index.css'

const App = () => {

  return (
    <>
      <CustomAlert />
      <CartStorageSync />
      <Navbar />
      <ScrollTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/product-details/:id' element={<ProductDetails />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
