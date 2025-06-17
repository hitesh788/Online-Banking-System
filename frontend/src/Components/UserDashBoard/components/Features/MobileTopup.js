// MobileTopup.jsx
import React, { useState, lazy, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import './MobileTopup.css';
import { FaUser } from 'react-icons/fa';

const TransactionCompletePopup = lazy(() => import('./TransactionCompletePopup'));

const MobileTopup = ({ onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [promoCode, setPromoCode] = useState('');
  const [rewardPoints, setRewardPoints] = useState(0.15);
  const [totalAmount, setTotalAmount] = useState(0.00);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handlePhoneNumberChange = (e) => setPhoneNumber(e.target.value);

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

  const handlePromoCodeChange = () => setPromoCode('');

  const handleProceed = () => {
    console.log('Proceeding with top-up', { phoneNumber, amount, promoCode });
    setShowPopup(true);
  };

  const handleClear = () => {
    setPhoneNumber('');
    setAmount('');
    setPromoCode('');
    setRewardPoints(0.15);
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
    phoneNumber,
    amount,
    rewardPoints,
    totalAmount,
    timestamp: new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }),
  };

  return (
    <div className="mtt-modal-overlay">
      <div className="mtt-modal-content">
        <h2>Mobile Topup</h2>

        <div className="mtt-info-box">
          Please enter the phone number. NT Prepaid, NT Postpaid, NT Landline/ADSL, CDMA, Ncell Prepaid, Ncell Postpaid, UTL
        </div>

        <div className="mtt-form-group">
          <label className="mtt-label">Topup Number: <span className="mtt-required">*</span></label>
          <div className="mtt-input-group">
            <input
              type="text"
              className="mtt-input"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              placeholder="Enter phone number"
            />
            <button className="mtt-icon-btn"><FaUser /></button>
          </div>
        </div>

        <div className="mtt-form-group">
          <label className="mtt-label">Amount: <span className="mtt-required">*</span></label>
          <input
            type="text"
            className="mtt-input"
            value={amount}
            onChange={handleAmountChange}
            placeholder="Enter amount"
          />
        </div>

        <button className="mtt-promocode-btn" onClick={handlePromoCodeChange}>Have Promo Code?</button>

        <div className="mtt-reward-section">
          <span>Reward Points:</span>
          <span>{rewardPoints}</span>
        </div>

        <div className="mtt-total-section">
          <span>Total Paying Amount:</span>
          <span>{parseFloat(totalAmount).toFixed(2)}</span>
        </div>

        <div className="mtt-action-buttons">
          <button className="mtt-proceed" onClick={handleProceed}>PROCEED</button>
          <button className="mtt-clear" onClick={handleClear}>CLEAR</button>
        </div>

        <div className="mtt-footer-buttons">
          <button className="mtt-back-btn" onClick={handleBack}>Back</button>
        </div>

        {showPopup && (
          <Suspense fallback={<div className="mtt-loading">Loading...</div>}>
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

export default MobileTopup;