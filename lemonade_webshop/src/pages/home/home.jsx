import React from "react";
import "./home.css";
import billedeLogo from "../../assets/billeder/logo.png";


export const Home = () => {
  
    return (
      <div className="first-section">
        <div className="title">
          <h1 className="first-title"> Welcome to the lemonade shop</h1>
        </div>
        
        <div className="firstLogo">
          <img className="first-section-logo" src={billedeLogo} alt="Logo" />
        </div>
        <h1>Nico was here</h1>
      </div>

    );
  };
