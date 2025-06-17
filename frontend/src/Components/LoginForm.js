// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "../styles/Auth.css";
// import SignupForm from "./SignupForm";

// function LoginForm({ onClose }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showSignup, setShowSignup] = useState(false);
//   const [errorMessage, setErrorMessage] = useState(""); // To store error message
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setErrorMessage(""); // Clear previous error message

//     try {
//       const response = await fetch("http://localhost:5000/api/auth/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         alert("Login successful!");
//         // Save JWT token (e.g., in localStorage)
//         localStorage.setItem("token", data.token);
//         navigate("/home"); // Redirect to home page after login
//       } else {
//         setErrorMessage(data.message || "Login failed");
//       }
//     } catch (err) {
//       console.error("Error during login:", err);
//       setErrorMessage("Something went wrong. Please try again.");
//     }
//   };

//   const handleClose = () => {
//     if (onClose) onClose();
//     navigate("/home");
//   };

//   return (
//     <div className="modal">
//       <div className="modal-content">
//         <div className="logo-container">
//           <Link to="/">
//             <img src="/Logo.png" alt="Manaslu Bank Logo" className="login-logo" />
//           </Link>
//         </div>

//         <h2>Login</h2>

//         <form onSubmit={handleLogin}>
//           <div className="input-group">
//             <label>Email <span className="asterisk">*</span></label>
//             <input
//               type="email"
//               placeholder="Enter Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="input-group">
//             <label>Password <span className="asterisk">*</span></label>
//             <input
//               type="password"
//               placeholder="Enter Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           <button type="submit" className="login-btn">Log In</button>
//         </form>

//         {/* Display error message if login fails */}
//         {errorMessage && <p className="error-message">{errorMessage}</p>}

//         <p className="forgot-password">Forgot Password?</p>

//         <p className="signup-text">
//           Don't have an account?{" "}
//           <span className="signup-link" onClick={() => setShowSignup(true)}>
//             Signup
//           </span>
//         </p>

//         <button className="cancel-btn" onClick={handleClose}>
//           Cancel
//         </button>
//       </div>

//       {showSignup && <SignupForm onClose={() => setShowSignup(false)} />}
//     </div>
//   );
// }

// export default LoginForm;
