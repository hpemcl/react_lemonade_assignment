import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { useNavigate } from "react-router-dom";
import "./cart.css";

export const CartItem = ({ data, removeFromCart }) => {
  const { idDrink, strDrink, strDrinkThumb, price } = data;
  const { cartItems, addToCart } = useContext(ShopContext); // Tilføj cartItems og addToCart her
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(data);
  };

  return (
    <div className="cartItem">
      <img src={strDrinkThumb} alt={strDrink} />
      <div className="description">
        <p>
          <b>{strDrink}</b>
        </p>
        <p> Price: ${price}</p>
        <div className="countHandler">
          <button className="buttonRemove" onClick={() => removeFromCart(idDrink)}> - </button>
          <span>{cartItems[idDrink]}</span>
          <button className="buttonAdd" onClick={handleAddToCart}> + </button>
        </div>
      </div>
    </div>
  );
};
