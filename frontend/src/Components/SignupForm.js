import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Auth.css";

// Country code options with flag images
const countries = [
  { name: "Australia", code: "+61", flagImage: "https://flagcdn.com/16x12/au.png" },
  { name: "Brazil", code: "+55", flagImage: "https://flagcdn.com/16x12/br.png" },
  { name: "Canada", code: "+1", flagImage: "https://flagcdn.com/16x12/ca.png" },
  { name: "China", code: "+86", flagImage: "https://flagcdn.com/16x12/cn.png" },
  { name: "France", code: "+33", flagImage: "https://flagcdn.com/16x12/fr.png" },
  { name: "Germany", code: "+49", flagImage: "https://flagcdn.com/16x12/de.png" },
  { name: "India", code: "+91", flagImage: "https://flagcdn.com/16x12/in.png" },
  { name: "Italy", code: "+39", flagImage: "https://flagcdn.com/16x12/it.png" },
  { name: "Japan", code: "+81", flagImage: "https://flagcdn.com/16x12/jp.png" },
  { name: "Mexico", code: "+52", flagImage: "https://flagcdn.com/16x12/mx.png" },
  { name: "Nepal", code: "+977", flagImage: "https://flagcdn.com/16x12/np.png" },
  { name: "Russia", code: "+7", flagImage: "https://flagcdn.com/16x12/ru.png" },
  { name: "Saudi Arabia", code: "+966", flagImage: "https://flagcdn.com/16x12/sa.png" },
  { name: "South Africa", code: "+27", flagImage: "https://flagcdn.com/16x12/za.png" },
  { name: "South Korea", code: "+82", flagImage: "https://flagcdn.com/16x12/kr.png" },
  { name: "United Kingdom", code: "+44", flagImage: "https://flagcdn.com/16x12/gb.png" },
  { name: "USA", code: "+1", flagImage: "https://flagcdn.com/16x12/us.png" },
];


function SignupForm() {
  const [formData, setFormData] = useState({
    accountNumber: "",
    fullName: "",
    gmail: "",
    mobileNumber: "",
    countryCode: "+977",
    password: "",
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown toggle

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCountryChange = (e) => {
    const { value } = e.target;
    setFormData((prev) => ({
      ...prev,
      countryCode: value,
    }));
    setIsDropdownOpen(false); // Close dropdown after selection
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    const { accountNumber, fullName, gmail, mobileNumber, countryCode, password } = formData;
    const mobileWithCode = countryCode + mobileNumber;

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          accountNumber,
          fullName,
          gmail,
          mobileNumber: mobileWithCode,
          password,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("User registered successfully!");
        setFormData({
          accountNumber: "",
          fullName: "",
          gmail: "",
          mobileNumber: "",
          countryCode: "+977",
          password: "",
        });
      } else {
        alert(data.message || "Registration failed");
      }
    } catch (err) {
      console.error("Error during registration:", err);
      alert("Something went wrong");
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <div className="logo-container">
          <Link to="/">
            <img src="/Logo.png" alt="Manaslu Bank Logo" className="signup-logo" />
          </Link>
        </div>

        <h2 className="form-title">Sign Up</h2>

        <form onSubmit={handleSignup} className="signup-form">
          <div className="input-group">
            <label htmlFor="accountNumber">
              Account Number <span className="asterisk">*</span>
            </label>
            <input
              type="text"
              id="accountNumber"
              name="accountNumber"
              placeholder="Enter your account number"
              value={formData.accountNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="fullName">
              Full Name <span className="asterisk">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="gmail">
              Email <span className="asterisk">*</span>
            </label>
            <input
              type="email"
              id="gmail"
              name="gmail"
              placeholder="Enter your email"
              value={formData.gmail}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="mobileNumber">
              Mobile Number <span className="asterisk">*</span>
            </label>
            <div className="mobile-input">
              <div className="country-code" onClick={toggleDropdown}>
                <img
                  src={countries.find((c) => c.code === formData.countryCode).flagImage}
                  alt={`${countries.find((c) => c.code === formData.countryCode).name} flag`}
                  className="flag-icon"
                />
                {formData.countryCode}
              </div>
              {isDropdownOpen && (
                <select
                  id="countryCode"
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleCountryChange}
                  className="country-dropdown"
                  required
                >
                  {countries.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.name} {country.code}
                    </option>
                  ))}
                </select>
              )}
              <input
                type="text"
                id="mobileNumber"
                name="mobileNumber"
                placeholder="Enter your mobile number"
                value={formData.mobileNumber}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="password">
              Password <span className="asterisk">*</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="signup-btn">
            Sign Up
          </button>
        </form>

        <p className="signup-text">
          Already have an account?{" "}
          <span className="signup-link">
            <Link to="/login">Login</Link>
          </span>
        </p>
      </div>
    </div>
  );
}

export default SignupForm;