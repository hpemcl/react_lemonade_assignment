import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";

import "./cart.css";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, removeFromCart, updateCartItemCount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {cartItems.map((item) => (
          <CartItem key={item.idDrink} data={item} />
        ))}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p className="subtotal"> Subtotal: ${totalAmount} </p>
          <button className="cartBttn" onClick={() => navigate("/")}> Continue Shopping </button>
          <button className="cartBttn" onClick={() => navigate("/checkout")}> Checkout </button>
        </div>
      ) : (
        <p className="checkout-p"> Your Shopping Cart is Empty</p>
      )}
    </div>
  );
};
