import React, { createContext, useState, useEffect } from 'react';

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  // Effekt til at indlæse kurvens elementer fra lokal opbevaring, når komponenten er monteret
  useEffect(() => {
    // Henter indkøbskurvens elementer fra lokal opbevaring
    const storedCartItems = window.localStorage.getItem('cartItems');
    if (storedCartItems !== null) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []); // Tomt afhængighedsarray for at køre kun en gang ved indlæsning

  // Effekt til at gemme kurvens elementer i lokal opbevaring, når kurvens tilstand ændres
  useEffect(() => {
    // Gemmer indkøbskurvens elementer i lokal opbevaring
    window.localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // Funktion til at tilføje et element til kurven
  const addToCart = (item) => {
    const existingItemIndex = cartItems.findIndex((cartItem) => cartItem.idDrink === item.idDrink);
    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  // Funktion til at fjerne et element fra kurven
  const removeFromCart = (itemId) => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = prevCartItems.filter((item) => item.idDrink !== itemId);
      return updatedCartItems;
    });
  };

  // Funktion til at beregne den totale værdi af kurven
  const getTotalCartAmount = () => {
    let total = 0;
    for (const item of cartItems) {
      total += item.quantity * item.price;
    }
    return total.toFixed(2); // Returnerer værdien med to decimaler
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
