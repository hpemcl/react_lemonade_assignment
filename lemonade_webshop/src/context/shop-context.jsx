import React, { createContext, useState } from 'react';

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (cocktail) => {
    setCartItems((prev) => [...prev, cocktail]);
  };

  const removeFromCart = (cocktailId) => {
    setCartItems((prev) => prev.filter((item) => item.idDrink !== cocktailId));
  };

  const getTotalCartAmount = () => {
    return cartItems.reduce((total, item) => total + (item.price || 0), 0).toFixed(2);
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
