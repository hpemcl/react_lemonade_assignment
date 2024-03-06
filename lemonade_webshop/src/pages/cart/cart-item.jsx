import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = ({ data }) => {
  const { idDrink, strDrink, strDrinkThumb, price } = data;
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);

  const handleAddToCart = () => {
    const currentCount = cartItems[idDrink];
    addToCart(data, currentCount + 1); // Tilføj en drink til kurven med det nuværende antal plus 1
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
