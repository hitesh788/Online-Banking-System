import React, { useState } from 'react';
import '../styles/AccountDetail.css';
import { FaUniversity, FaBriefcase, FaEye, FaEyeSlash, FaShareAlt, FaChartLine, FaRegFileAlt } from 'react-icons/fa';
import { jsPDF } from 'jspdf'; // Import jsPDF

const AccountDetail = () => {
  const [showBalance, setShowBalance] = useState(true); 
  const [balance, setBalance] = useState('59,800.20');
  const [totalBalance, setTotalBalance] = useState('59,800.20');
  const [accruedInterest, setAccruedInterest] = useState('3200.55');
  const [interestRate] = useState('3.0%');
  const [status] = useState('ACTIVE');
  const accountHolderName = 'HITESH JOSHI';
  const accountNumber = '04307010043434';
  const accountType = 'MANASLU GEN N ACCOUNT';

  const toggleVisibility = () => {
    setShowBalance(prev => !prev);
  };

  const handleFixedDeposit = () => {
    alert("Redirecting to Open Fixed Deposit page...");
  };

  const shareInfo = () => {
    const doc = new jsPDF();

    // Adding content to the PDF
    doc.setFontSize(16);
    doc.text("Account Information", 20, 20);

    doc.setFontSize(12);
   const accountHolderName = localStorage.getItem("userName") || "N/A";
const accountNumber = localStorage.getItem("accountNumber") || "N/A";
const accountType = localStorage.getItem("accountType") || "N/A";

    // Dynamically showing balance based on showBalance state
    const visibleBalance = showBalance ? balance : '******';
    const visibleTotalBalance = showBalance ? totalBalance : '******';
    const visibleAccruedInterest = showBalance ? accruedInterest : '******';

    doc.text(`Available Balance: Rs. ${visibleBalance}`, 20, 60);
    doc.text(`Total Balance: Rs. ${visibleTotalBalance}`, 20, 70);
    doc.text(`Accrued Interest: Rs. ${visibleAccruedInterest}`, 20, 80);
    doc.text(`Interest Rate: ${interestRate}`, 20, 90);
    doc.text(`Status: ${status}`, 20, 100);

    doc.text("Additional Information:", 20, 110);
    doc.text(`Fixed Deposit: Open Fixed Deposit`, 20, 120);
    doc.text(`Loans: Available`, 20, 130);

    // Save the PDF
    doc.save("account_information.pdf");
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h3>General</h3>
        <div className="account-box">
          <p className="acc-number">{accountNumber} <span className="primary-tag">PRIMARY</span></p>
          <strong>{accountType}</strong>
        </div>
        <div className="sidebar-item"><FaUniversity /> Fixed Deposit</div>
        <div className="sidebar-item"><FaBriefcase /> Loans</div>
      </aside>

      <main className="main-content">
        <div className="top-bar">
          <h2>Account Detail</h2>
          <button className="share-btn" onClick={shareInfo}><FaShareAlt /> Share Account Information</button>
        </div>

        <div className="account-details">
          <div className="detail-row">
            <div>
              <p className="label">Available Balance</p>
              <p className="balance-value">
                {showBalance ? `Rs. ${balance}` : '******'}
              </p>
            </div>
            <button className="eye-btn" onClick={toggleVisibility}>
              {showBalance ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <div className="detail-row">
            <div>
              <p className="label">Account Holder's Name</p>
              <p className="holder-name">{accountHolderName}</p>
            </div>
            <button className="fixed-btn" onClick={handleFixedDeposit}>Open Fixed Deposit</button>
          </div>

          <div className="sub-details">
            <div>
              <p className="label">Total Balance</p>
              <p>{showBalance ? `Rs. ${totalBalance}` : '******'}</p>
            </div>
            <div>
              <p className="label">Accrued Interest</p>
              <p>{showBalance ? `Rs. ${accruedInterest}` : '******'}</p>
            </div>
            <div>
              <p className="label">Interest Rate</p>
              <p>{interestRate}</p>
            </div>
            <div>
              <p className="label">Status</p>
              <p className="status-tag">{status}</p>
            </div>
          </div>

          <div className="tabs">
            <div className="tab active"><FaChartLine /> Income vs Expense</div>
            <div className="tab"><FaChartLine /> Activity Graph</div>
            <div className="tab"><FaRegFileAlt /> Statement</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AccountDetail;
