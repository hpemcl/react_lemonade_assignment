import React, { useState, useEffect } from "react";
import "./shop.css";
import CocktailList from "../../components/cocktailList";


export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Lemonade Shop</h1>
      </div>
      <CocktailList />

      <footer className="footer">
        Lavet af Hannah Clausen | React Webshop App
      </footer>
    </div>
  );
};



