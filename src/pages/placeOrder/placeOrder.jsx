import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/billeder/logo.png';
import './placeOrder.css';

export const PlaceOrder = () => {
  return (
    <div className="place-order-container">
      <img src={logo} alt="Logo" className="logo" />
      <h2>Tak for din ordre!</h2>
      <p>Din ordre er blevet placeret med succes.</p>
      <p>Du vil modtage en bekræftelses-e-mail med yderligere oplysninger.</p>
      <div className="buttons">
        <Link to="/" className="button">
          Tilbage til forsiden
        </Link>
        <Link to="/shop" className="button">
          Gå til shoppen
        </Link>
      </div>
    </div>
  );
};
