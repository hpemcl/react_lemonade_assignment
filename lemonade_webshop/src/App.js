import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart";
import { Checkout } from "./pages/checkout/checkout";
import { Home } from "./pages/home/home";
import { PlaceOrder } from "./pages/placeOrder/placeOrder";
import { ShopContextProvider } from './context/shop-context';

export default function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />  
            <Route path="/shop" element={<Shop />} /> 
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/placeOrder" element={<PlaceOrder />} />
          </Routes>
          
        </Router>
      </ShopContextProvider>
    </div>
  );
}
