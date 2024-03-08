import React, { useContext, useState } from "react";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import "./cart.css";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, removeFromCart } = useContext(ShopContext);
  const navigate = useNavigate();
  const totalAmount = getTotalCartAmount();

  // Opdaterer cartItems-tilstanden
  const [updatedCartItems, setUpdatedCartItems] = useState(cartItems);

  // Kontroller om cartItems er et array, ellers initialiser det som et tomt array
  if (!Array.isArray(cartItems)) {
    return <p>Loading...</p>;
  }

  const addToCart = (item) => {
    // Tjek om item allerede er i kurven ved at finde indekset af det
    const index = cartItems.findIndex((cartItem) => cartItem.idDrink === item.idDrink);
    if (index !== -1) {
      // Hvis item allerede er i kurven, opdateres antallet af det eksisterende item
      const updatedCartItems = [...cartItems];
      updatedCartItems[index].quantity++;
      setUpdatedCartItems(updatedCartItems);
    } else {
      // Hvis item ikke er i kurven, tilføj det til kurven
      setUpdatedCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  return (
    <div className="cart-container">
      <div>
        <h1 className="cart-heading">Your Cart Items</h1>
      </div>
      <div className="cart-items">
        {cartItems.map((item, index) => (
          <CartItem key={index} data={item} removeFromCart={removeFromCart} />
        ))}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p className="subtotal">Subtotal: ${totalAmount}</p>
          <button className="cart-button" onClick={() => navigate("/")}>Continue Shopping</button>
          <button className="cart-button" onClick={() => navigate("/checkout")}>Checkout</button>
        </div>
      ) : (
        <p className="empty-cart-message">Your Shopping Cart is Empty</p>
      )}
    </div>
  );
};
