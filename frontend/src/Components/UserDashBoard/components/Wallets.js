import React from "react";
import "../styles/Wallets.css";
import esewaLogo from "../assets/esewa.png";
import khaltiLogo from "../assets/khalti.png";

const Wallets = () => {
  return (
    <div className="wallets">
      <h3>In Association with:</h3>

      <a href="https://esewa.com.np" target="_blank" rel="noopener noreferrer" className="wallet-item esewa">
        <img src={esewaLogo} alt="eSewa" className="wallet-logo" />
        eSewa
      </a>

      <a href="https://khalti.com" target="_blank" rel="noopener noreferrer" className="wallet-item khalti">
        <img src={khaltiLogo} alt="Khalti" className="wallet-logo" />
        Khalti
      </a>
    </div>
  );
};

export default Wallets;
