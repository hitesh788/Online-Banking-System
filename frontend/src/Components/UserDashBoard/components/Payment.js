import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Payment.css';
import logo from '../assets/Logo.png';

const OnlinePayments = () => {
  const categories = [
    { icon: '💡', name: 'Electricity' },
    { icon: '📶', name: 'Internet' },
    { icon: '📺', name: 'TV' },
    { icon: '🏛️', name: 'Government Revenue' },
    { icon: '☂️', name: 'Insurance' },
    { icon: '💧', name: 'Water' },
    { icon: '📚', name: 'School' },
    { icon: '💰', name: 'Capital' },
    { icon: '🗓️', name: 'EMI' },
    { icon: '🚠', name: 'Cable Cars' },
    { icon: '🚌', name: 'Buses' },
    { icon: '🌳', name: 'Park' },
    { icon: '🎁', name: 'Fonepay Vouchers' },
  ];

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <img src={logo} alt="Logo" className="sidebar-logo" />
        <ul>
          <li className="home"><Link to="/userdashboard">Home</Link></li>
          <li className="accounts"><Link to="/accountdetail">Account</Link></li>
          <li className="cards"><Link to="/mycard">Card</Link></li>
          <li className="sendmoney"><Link to="/sendmoney">Sendmoney</Link></li>
          <li className="payments"><Link to="/payments">Payments</Link></li>
          <li className="customerservice"><Link to="/contactpage">Customer Service</Link></li>
        </ul>
      </aside>

      {/* Main Content */}
      <div className="p-container">
        <h2>Online Payments</h2>
        <div className="payment-categories">
          {categories.map((category, index) => (
            <Link to="/paymentform" key={index} className="payment-item-link">
              <div className="payment-item">
                <span className="icon">{category.icon}</span>
                <p>{category.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OnlinePayments;
