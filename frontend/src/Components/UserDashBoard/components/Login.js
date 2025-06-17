import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "../styles/Login.css";

// Define countries list with flag images
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



const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({
    code: "+977",
    flagImage: "https://flagcdn.com/16x12/np.png",
  });
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isCaptchaChecked, setIsCaptchaChecked] = useState(false);

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleCountryChange = (e) => {
    const selected = countries.find((country) => country.code === e.target.value);
    setSelectedCountry(selected);
    setIsDropdownOpen(false);
  };

  const handleMobileChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCaptchaChange = (e) => {
    setIsCaptchaChecked(e.target.checked);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!isCaptchaChecked) {
      toast.error("Please verify that you are not a robot.");
      return;
    }

    const fullMobileNumber = selectedCountry.code + mobileNumber;

    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        mobileNumber: fullMobileNumber,
        password,
      });

      if (response.data.success) {
        console.log("Login successful:", response.data);
        localStorage.setItem("userName", response.data.user.name);
        toast.success("Login successful!");
        navigate("/userdashboard");
      } else {
        setErrorMessage("Wrong credentials");
        toast.error("Wrong credentials");
      }
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("Worng detail credential!!!.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src="/logo.png" alt="ManasluLogo" className="login-logo" />
        <h3>
          Hi! Welcome to your <span className="neo-green">Manaslu Banking</span> Experience
        </h3>

        {/* Country code input field */}
        <div className="input-field country-input">
          <div className="country-code" onClick={toggleDropdown}>
            <img src={selectedCountry.flagImage} alt={`${selectedCountry.name} flag`} className="flag-icon" />
            {selectedCountry.code}
          </div>

          {isDropdownOpen && (
            <select
              value={selectedCountry.code}
              onChange={handleCountryChange}
              className="country-dropdown"
            >
              {countries.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.name} {country.code}
                </option>
              ))}
            </select>
          )}

          {/* Mobile Number input */}
          <input
            type="text"
            placeholder="Mobile Number"
            value={mobileNumber}
            onChange={handleMobileChange}
          />
        </div>

        <div className="input-field">
          <span className="icon">🔒</span>
          <input
            type={passwordVisible ? "text" : "password"}
            placeholder="Enter Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <span className="toggle-password" onClick={togglePasswordVisibility}>
            <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
          </span>
        </div>

        <div className="captcha-box">
          <div className="captcha-check">
            <input
              type="checkbox"
              id="captcha-check"
              checked={isCaptchaChecked}
              onChange={handleCaptchaChange}
            />
            <label htmlFor="captcha-check">I'm not a robot</label>
          </div>
          <img
            src={require("../assets/ReCaptcha.png")}
            alt="ReCaptcha"
            className="captcha-badge"
          />
        </div>

        {/* Error Message */}
        {errorMessage && <div className="error-message">{errorMessage}</div>}

        <div className="button-container">
          <Link to="/signup">
            <button className="btn-open">Sign Up</button>
          </Link>
          <button className="btn-continue" onClick={handleLogin}>
            Continue
          </button>
        </div>

        <div className="social-icons">
          {/* Social media icons */}
        </div>
      </div>
    </div>
  );
};

export default Login;