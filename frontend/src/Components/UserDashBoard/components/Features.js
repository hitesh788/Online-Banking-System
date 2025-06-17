import React from 'react';
import '../styles/Features.css';
import { Link } from 'react-router-dom';

import topupLogo from '../assets/MobileTopup.png';
import sendMoneyLogo from '../assets/SendMoney.png';
import depositLogo from '../assets/FixedDepo.png';
import currencyLogo from '../assets/CurrencyEx.png';
import AtmLocatorLogo from '../assets/AtmLocator.png';
import CashbackLogo from '../assets/CashBack.png';

const Features = () => {
  return (
    <div className="card Features">
      <h3>Features</h3>
      <div className="shortcuts-list">
        <Link to="/mobiletopup" className="shortcut">
          <img src={topupLogo} alt="Mobile Topup" className="shortcut-logo" />
          Mobile Topup
        </Link>
    <Link to="/sendmoney" className="shortcut">
          <img src={sendMoneyLogo} alt="sendmoney" className="shortcut-logo" />
          Send Money
        </Link>
        <Link to="/fixeddeposit" className="shortcut">
          <img src={currencyLogo} alt="Fixed Deposit" className="shortcut-logo" />
          Fixed Deposit
        </Link>

      
         <Link to="/currencyconverter" className="shortcut">
          <img src={currencyLogo} alt="Currency Exchange" className="shortcut-logo" />
          Currency Exchange
        </Link>
        
         <Link to="/mycard" className="shortcut">
          <img src={CashbackLogo} alt="Cashback & Rewards" className="shortcut-logo" />
          CashBack & Rewards
        </Link>

      </div>
    </div>
  );
};

export default Features;
