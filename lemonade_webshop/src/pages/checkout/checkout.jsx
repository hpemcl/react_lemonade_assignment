import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';
import { useNavigate } from "react-router-dom"; 
import './checkout.css';

export const Checkout = ({ setCartItems }) => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate(); 

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <div className="order-summary">
        <ul>
          {/* Map gennem cartItems og vis hvert element som en li */}
          {cartItems.map((item) => (
            <li key={item.idDrink} className="cart-item">
              <img src={item.strDrinkThumb} alt={item.strDrink} className="checkout-image" />
              <div>
                <p className="cart-item-name">{item.strDrink}</p>
              </div>
              <div>
                <p className="cart-item-quantity">Quantity: {item.quantity}</p>
                {/* Beregn prisen for hvert element ved at multiplicere prisen med antallet */}
                <p className="cart-item-price">Price: ${item.price * item.quantity}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* Vis den samlede pris for alle elementer i kurven */}
      <div className="totalAmount">
          <p>Total:</p>
          <p>${totalAmount}</p>
        </div>
        <div className="payment-details">
          <h3>Payment Details</h3>
          {/* Inputfelter til betalingsoplysninger */}
          <div>
            <label htmlFor="cardNumber">Card Number:</label>
            <input type="text" id="cardNumber" name="cardNumber" placeholder="3218 xxxx xxxx xxxx" />
          </div>
          <div>
            <label htmlFor="expiryDate">Expiry Date:</label>
            <input type="text" id="expiryDate" name="expiryDate" placeholder="MM/YYYY" />
          </div>
          <div>
            <label htmlFor="cvv">CVV:</label>
            <input type="text" id="cvv" name="cvv" placeholder="345" />
          </div>
        </div>
        {/* Knappen til at placere ordren */}
        <button className="checkout-button" onClick={() => navigate("/placeOrder")}>Place Order</button>
    </div>
  );
};
