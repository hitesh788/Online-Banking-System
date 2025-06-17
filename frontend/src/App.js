import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";       // <-- Import ToastContainer
import "react-toastify/dist/ReactToastify.css";         // <-- Import Toastify CSS

import Login from "./Components/UserDashBoard/components/Login";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Accounts from "./Components/Accounts";
import Transactions from "./Components/Transactions";
import Loans from "./Components/Loans";
import Profile from "./Components/Profile";
import Branches from "./Components/Branches";
import Footer from "./Components/Footer";
import LoginForm from "./Components/LoginForm";
import LoadingScreen from "./Components/LoadingScreen";
import Cards from "./Components/Cards";
import InterestRates from "./Components/InterestRates";
import ContactPage from "./Components/ContactPage";
import CommingSoon from "./Components/ComingSoon";
import AccountCard from "./Components/UserDashBoard/components/AccountCard";
import Bills from "./Components/UserDashBoard/components/Bills";
import RecentTransactions from "./Components/UserDashBoard/components/RecentTransaction";
import Features from "./Components/UserDashBoard/components/Features";
import UserDashboard from "./Components/UserDashBoard/components/UserDashboard";
import AccountDetail from "./Components/UserDashBoard/components/AccountDetail";
import MyCard from "./Components/UserDashBoard/components/MyCard";
import Payments from "./Components/UserDashBoard/components/Payment";
import MobileTopup from './Components/UserDashBoard/components/Features/MobileTopup';
import SignupForm from "./Components/SignupForm";
import PaymentForm from "./Components/UserDashBoard/components/PaymentForm";
import SendMoney from "./Components/UserDashBoard/components/Features/SendMoney";
import CurrencyConverter from "./Components/UserDashBoard/components/Features/CurrencyConverter";
import ProfilePage from "./Components/UserDashBoard/components/ProfilePage";
import Career from "./Components/Career";
import LoadMoney from "./Components/UserDashBoard/components/Features/LoadMoney";

function App() {
  const [loading, setLoading] = useState(true);

  return (  
    <Router>
      {loading ? (
        <LoadingScreen onFinish={() => setLoading(false)} />
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Login />} /> {/* Show Login first */}
    
            <Route path="/home" element={<><Navbar /><Home /><Footer /></>} />
            <Route path="/accounts" element={<><Navbar /><Accounts /><Footer /></>} />
            <Route path="/transactions" element={<><Navbar /><Transactions /><Footer /></>} />
            <Route path="/loans" element={<><Navbar /><Loans /><Footer /></>} />
            <Route path="/profile" element={<><Navbar /><Profile /><Footer /></>} />
            <Route path="/branches" element={<><Navbar /><Branches /><Footer /></>} />
            <Route path="/cards" element={<><Navbar /><Cards /><Footer /></>} />
            <Route path="/interest-rate" element={<><Navbar /><InterestRates /><Footer /></>} />
            <Route path="/contactpage" element={<><Navbar /><ContactPage /><Footer /></>} />
            <Route path="/comingsoon" element={<><Navbar /><CommingSoon /><Footer /></>} />
            <Route path="/accountcard" element={<><Navbar /><AccountCard /><Footer /></>} />
            <Route path="/bills" element={<><Navbar /><Bills /><Footer /></>} />
            <Route path="/RecentTranscation" element={<><Navbar /><RecentTransactions /><Footer /></>} />
            <Route path="/features" element={<><Navbar /><Features /><Footer /></>} />
            <Route path="/userdashboard" element={<><Navbar /><UserDashboard /><Footer /></>} />
            <Route path="/accountdetail" element={<><Navbar /><AccountDetail /><Footer /></>} />
            <Route path="/mycard" element={<><Navbar /><MyCard /><Footer /></>} />
            <Route path="/payments" element={<><Navbar /><Payments /><Footer /></>} />
            <Route path="/mobiletopup" element={<><Navbar /><MobileTopup /><Footer /></>} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/login" element={<Login />} /> {/* Show Login first */}
            <Route path="/paymentform" element={<PaymentForm />} />
            <Route path="/sendmoney" element={<><Navbar /><SendMoney /><Footer /></>} />
            <Route path="/currencyconverter" element={<><Navbar /><CurrencyConverter /><Footer /></>} />

            <Route path="/profilepage" element={<><Navbar /><ProfilePage /><Footer /></>} />
            <Route path="/careers" element={<><Navbar /><Career /><Footer /></>} />
            <Route path="/loadmoney" element={<><Navbar /><LoadMoney /><Footer /></>} />
       
          </Routes>
          <ToastContainer /> {/* <-- Add ToastContainer here */}
        </>
      )}
    </Router>
  );
}

export default App;
