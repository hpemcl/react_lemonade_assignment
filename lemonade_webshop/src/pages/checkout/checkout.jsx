import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';
import './checkout.css';

export const Checkout = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <div className="order-summary">
        <ul>
          {cartItems.map((item) => (
            <li key={item.idDrink} className="cart-item">
              <img src={item.strDrinkThumb} alt={item.strDrink} className="checkout-image" />
              <div>
                <p className="cart-item-name">{item.strDrink}</p>
              </div>
              <div>
                <p className="cart-item-quantity">Quantity: {item.quantity}</p>
                <p className="cart-item-price">Price: ${item.price * item.quantity}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="totalAmount">
          <p>Total:</p>
          <p>${totalAmount}</p>
        </div>
        <div className="payment-details">
          <h3>Payment Details</h3>
          <div>
            <label htmlFor="cardNumber">Card Number:</label>
            <input type="text" id="cardNumber" name="cardNumber" />
          </div>
          <div>
            <label htmlFor="expiryDate">Expiry Date:</label>
            <input type="text" id="expiryDate" name="expiryDate" placeholder="MM/YYYY" />
          </div>
          <div>
            <label htmlFor="cvv">CVV:</label>
            <input type="text" id="cvv" name="cvv" />
          </div>
        </div>
      <button className="checkout-button">Place Order</button>
    </div>
  );
};
