import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/UserDashboard.css';
import AccountCard from './AccountCard';
import RecentTransactions from './RecentTransaction';
import Features from './Features';
import Bills from './Bills';
import Wallets from './Wallets';

const UserDashboard = () => {
  const fullName = localStorage.getItem("userName") || "User";
  const email = localStorage.getItem("userEmail") || "user@example.com";
  const address = localStorage.getItem("userAddress") || "Not Provided";
  const phone = localStorage.getItem("userPhone") || "Not Provided";
  const gender = "Male"; // You can replace with input logic or state later

  const [isHovered, setIsHovered] = useState(false);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div
          className="profile-section"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="profile-icon">
            {fullName
              .split(' ')
              .map((n) => n[0])
              .join('')
              .toUpperCase()}
          </div>
          <div className="profile-details">
            <h3>{fullName}</h3>
            {isHovered && (
              <div className="profile-hover-card">
                <p><strong>Email:hejoshi77@gmail.com</strong></p>
                <p><strong>Address:Mahendranagar</strong></p>
                <p><strong>Phone:+977-9748285243</strong> </p>
                <p><strong>Gender:Male</strong></p>
              </div>
            )}
          </div>
        </div>

        <ul>
          <li className="sidebar-items"><Link to="/userdashboard">Home</Link></li>
          <li className="sidebar-items"><Link to="/accountdetail">Account</Link></li>
          <li className="sidebar-items"><Link to="/mycard">Card</Link></li>
          <li className="sidebar-items"><Link to="/sendmoney">Sendmoney</Link></li>
          <li className="sidebar-items"><Link to="/payments">Payments</Link></li>
          <li className="sidebar-items"><Link to="/loadmoney">Load Money</Link></li>
        </ul>
      </aside>

      <main className="main-content">
        <div className="header">
          <h3>{getGreeting()}, {fullName}</h3>
        </div>

        <div className="top-section">
          <AccountCard />
          <RecentTransactions />
        </div>

        <div className="bottom-section">
          <div className="features-bills-container">
            <Features />
            <Bills />
          </div>
          <Wallets />
        </div>
      </main>
    </div>
  );
};

export default UserDashboard;
