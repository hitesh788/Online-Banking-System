import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/MyCard.css';
import logo from '../assets/Logo.png'; // Replace with your actual logo path
import ErrorIcon from '../assets/ErrorIcon.png'; // Adjust the path based on where your file is

const MyCard = () => {
  const [hasError, setHasError] = useState(true);

  const handleTryAgain = () => {
    setHasError(false);
    console.log('Retrying...');
  };

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <img src={logo} alt="ManasluLogo" className="sidebar-logo" />
        <ul>
          <li className="home"><Link to="/userdashboard">Home</Link></li>
          <li className="accounts"><Link to="/accountdetail">Account</Link></li>
          <li className="cards"><Link to="/mycard">Card</Link></li>
          <li className="sendmoney"><Link to="/sendmoney">Sendmoney</Link></li>
          <li className="payments"><Link to="/payments">Payments</Link></li>
          <li className="customerservice"><Link to="/contactpage">customerservice</Link></li>
        </ul>
      </aside>

      {/* Main Content */}
      <div className="card-container">
        <div className="error-message">
          {hasError && (
            <>
              <img
                src={ErrorIcon}
                alt="Error Icon"
                className="error-icon"
              />
              <div className="message">
                <h2>Looks like we have a problem</h2>
                <p>We are unable to load your card activity at the moment. Please try again later.</p>
                <button className="retry-button" onClick={handleTryAgain}>
                  Try again!
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyCard;
