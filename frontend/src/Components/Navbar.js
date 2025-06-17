import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MessageSquare, PhoneCall, Target } from "lucide-react"; // Import icons
import "../styles/Navbar.css";

function Navbar() {
  const [dropdown, setDropdown] = useState(null);

  // Function to toggle dropdown menus
  const handleDropdown = (menu) => {
    setDropdown(dropdown === menu ? null : menu);
  };

  return (
    <>
      {/* Top Navigation Bar */}
      <div className="top-navbar">
        <div className="top-nav-links">
          <Link to="/contactpage">
            <MessageSquare size={20} className="nav-icon" /> Customer Support
          </Link>
          <Link to="/contactpage">
            <PhoneCall size={20} className="nav-icon" /> Contact Us
          </Link>
          <Link to="/careers">
            <Target size={20} className="nav-icon" /> Careers
          </Link>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="navbar">
        <div className="logo-container">
          <Link to="/home">
            <img src="/Logo.png" alt="Manaslu Bank Logo" className="logo" />
          </Link>
        </div>

        <ul className="nav-links">
          <li><Link to="/home">Home</Link></li>

          <li onMouseEnter={() => handleDropdown("accounts")} onMouseLeave={() => handleDropdown(null)}>
            <Link to="/accounts">Accounts</Link>
          </li>

          <li onMouseEnter={() => handleDropdown("loans")} onMouseLeave={() => handleDropdown(null)}>
            <Link to="/loans">Loans</Link>
          
          </li>

          <li onMouseEnter={() => handleDropdown("investments")} onMouseLeave={() => handleDropdown(null)}>
            <Link to="/comingsoon">Investments</Link>
          
          </li>

          <li onMouseEnter={() => handleDropdown("insurance")} onMouseLeave={() => handleDropdown(null)}>
            <Link to="/comingsoon">Insurance</Link>
          
          </li>

          <li><Link to="/digital-products">Digital Products</Link></li>
          <li><Link to="/branches">Our Branches</Link></li>
          <li>
  <Link to="/userDashboard" className="dashboard-btn">
    Back to Dashboard
  </Link>
</li>

        </ul>

        <div className="auth-buttons">
  <Link to="/login" className="login-btn">Sign Out</Link>
</div>

      </nav>
    </>
  );
}

export default Navbar;
