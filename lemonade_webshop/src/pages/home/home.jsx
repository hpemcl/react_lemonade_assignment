import React from "react";
import "./home.css";
import billedeLogo from "../../assets/billeder/logo.png";
import Nyhedsbrev from "../../components/nyhedsbrev";


export const Home = () => {
  
    return (
      <div>
        <div className="first-section">
          <div className="title">
            <h1 className="first-title"> Welcome to </h1>
          </div>
          
          <div className="firstLogo">
            <img className="first-section-logo" src={billedeLogo} alt="Logo" />
          </div>

          <div>
            <h1 className="second-title"> Shop </h1>
          </div>
          
          <div className="buttonShopSection">
            <button className="buttonShop">
              Shop Now
            </button>
          </div>
        </div>

        <div className="second-section">
            <Nyhedsbrev />
        </div>
        
      </div>

        
      

    );
  };
