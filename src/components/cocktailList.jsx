import React, { useEffect, useState, useContext } from 'react';
import "./CocktailList.css"; // Importer CSS-filen
import { ShopContext } from "../context/shop-context";

const CocktailList = () => {
  const [cocktails, setCocktails] = useState([]);
  const { addToCart } = useContext(ShopContext);

  const handleAddToCart = (cocktail) => {
    addToCart(cocktail);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // Fastsæt prisen her ved at tilføje et prisfelt til hvert cocktailobjekt
        const cocktailsWithPrice = data.drinks.map(cocktail => ({ ...cocktail, price: Math.floor(Math.random() * 10) + 5 }));
        setCocktails(cocktailsWithPrice);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="cocktail-list-container">
      <ul className="cocktail-list">
        {cocktails.map(cocktail => (
          <li className="cocktail-list-item" key={cocktail.idDrink}>
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} className="cocktail-image" />
            <h3 className="cocktail-name">{cocktail.strDrink}</h3>
            <p className="cocktail-price">${cocktail.price}</p>
            <button className="buy-button" onClick={() => handleAddToCart(cocktail)}>Buy</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CocktailList;
