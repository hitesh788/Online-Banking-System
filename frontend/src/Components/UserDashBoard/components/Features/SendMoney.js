import React, { useState, lazy, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import './SendMoney.css';
import { FaUser } from 'react-icons/fa';

const TransactionCompletePopup = lazy(() => import('./TransactionCompletePopup'));

const SendMoney = ({ onClose }) => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [bankAccountNumber, setBankAccountNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [remarks, setRemarks] = useState('');
  const [totalAmount, setTotalAmount] = useState(0.00);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleMobileNumberChange = (e) => setMobileNumber(e.target.value);
  const handleBankAccountNumberChange = (e) => setBankAccountNumber(e.target.value);
  const handleRemarksChange = (e) => setRemarks(e.target.value);

  const handleAmountChange = (e) => {
    const inputAmount = e.target.value;
    setAmount(inputAmount);
    const parsedAmount = parseFloat(inputAmount);
    if (!isNaN(parsedAmount) && parsedAmount >= 0) {
      setTotalAmount(parsedAmount.toFixed(2));
    } else {
      setTotalAmount(0.00);
    }
  };

  const handleProceed = () => {
    console.log('Proceeding with send money', { mobileNumber, bankAccountNumber, amount, remarks });
    setShowPopup(true);
  };

  const handleClear = () => {
    setMobileNumber('');
    setBankAccountNumber('');
    setAmount('');
    setRemarks('');
    setTotalAmount(0.00);
  };

  const handleBack = () => {
    navigate('/userDashboard');
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    navigate('/userDashboard');
  };

  const transactionDetails = {
    mobileNumber,
    bankAccountNumber,
    amount,
    remarks,
    totalAmount,
    timestamp: new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }),
  };

  return (
    <div className="sm-modal-overlay">
      <div className="sm-modal-content">
        <h2>Send Money</h2>

        <div className="sm-info-box">
          Please enter the recipient's mobile number, bank account number, amount, and any remarks.
        </div>

        <div className="sm-form-group">
          <label className="sm-label">Mobile Number: <span className="sm-required">*</span></label>
          <div className="sm-input-group">
            <input
              type="text"
              className="sm-input"
              value={mobileNumber}
              onChange={handleMobileNumberChange}
              placeholder="Enter mobile number"
            />
            <button className="sm-icon-btn"><FaUser /></button>
          </div>
        </div>

        <div className="sm-form-group">
          <label className="sm-label">Bank Account Number: <span className="sm-required">*</span></label>
          <input
            type="text"
            className="sm-input"
            value={bankAccountNumber}
            onChange={handleBankAccountNumberChange}
            placeholder="Enter bank account number"
          />
        </div>

        <div className="sm-form-group">
          <label className="sm-label">Amount: <span className="sm-required">*</span></label>
          <input
            type="text"
            className="sm-input"
            value={amount}
            onChange={handleAmountChange}
            placeholder="Enter amount"
          />
        </div>

        <div className="sm-form-group">
          <label className="sm-label">Remarks:</label>
          <input
            type="text"
            className="sm-input"
            value={remarks}
            onChange={handleRemarksChange}
            placeholder="Enter remarks (optional)"
          />
        </div>

        <div className="sm-total-section">
          <span>Total Paying Amount:</span>
          <span>{parseFloat(totalAmount).toFixed(2)}</span>
        </div>

        <div className="sm-action-buttons">
          <button className="sm-proceed" onClick={handleProceed}>PROCEED</button>
          <button className="sm-clear" onClick={handleClear}>CLEAR</button>
        </div>

        <div className="sm-footer-buttons">
          <button className="sm-back-btn" onClick={handleBack}>Back</button>
        </div>

        {showPopup && (
          <Suspense fallback={<div className="sm-loading">Loading...</div>}>
            <TransactionCompletePopup
              onClose={handlePopupClose}
              transactionDetails={transactionDetails}
            />
          </Suspense>
        )}
      </div>
    </div>
  );
};

export default SendMoney;