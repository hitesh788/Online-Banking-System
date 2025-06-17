import React, { useState, lazy, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoadMoney.css';
import { FaUniversity } from 'react-icons/fa';

const TransactionCompletePopup = lazy(() => import('./TransactionCompletePopup'));

const LoadMoney = ({ onClose }) => {
  const [accountNumber, setAccountNumber] = useState('');
  const [bankName, setBankName] = useState('');
  const [amount, setAmount] = useState('');
  const [promoCode, setPromoCode] = useState('');
  const [rewardPoints, setRewardPoints] = useState(0.10);
  const [totalAmount, setTotalAmount] = useState(0.00);
  const [showPopup, setShowPopup] = useState(false);
  const [showBankList, setShowBankList] = useState(false);

  const navigate = useNavigate();

 
    const banks = [
  'Nabil Bank',
  'Global IME Bank',
  'NIC Asia Bank',
  'Kumari Bank',
  'Machhapuchchhre Bank',
  'Prabhu Bank',
  'Sanima Bank',
  'Nepal SBI Bank',
  'NMB Bank',
  'Laxmi Sunrise Bank'
];



  const handleAccountNumberChange = (e) => setAccountNumber(e.target.value);
  const handleBankNameChange = (e) => setBankName(e.target.value);

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
    console.log('Proceeding with bank load', { accountNumber, bankName, amount, promoCode });
    setShowPopup(true);
  };

  const handleClear = () => {
    setAccountNumber('');
    setBankName('');
    setAmount('');
    setPromoCode('');
    setRewardPoints(0.10);
    setTotalAmount(0.00);
    setShowBankList(false);
  };

  const handleBack = () => {
    navigate('/userDashboard');
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    navigate('/userDashboard');
  };

  const toggleBankList = () => {
    setShowBankList(!showBankList);
  };

  const selectBank = (name) => {
    setBankName(name);
    setShowBankList(false);
  };

  const transactionDetails = {
    accountNumber,
    bankName,
    amount,
    rewardPoints,
    totalAmount,
    timestamp: new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }),
  };

  return (
    <div className="lm-modal-overlay">
      <div className="lm-modal-content">
        <h2>Load Money from Bank</h2>

        <div className="lm-info-box">
          Please enter your bank details to load money.
        </div>

        <div className="lm-form-group">
          <label className="lm-label">Bank Name: <span className="lm-required">*</span></label>
          <div className="lm-input-group">
            <input
              type="text"
              className="lm-input"
              value={bankName}
              onChange={handleBankNameChange}
              placeholder="Enter bank name"
            />
            <button className="lm-icon-btn" onClick={toggleBankList}><FaUniversity /></button>
          </div>
          {showBankList && (
            <div className="lm-bank-dropdown">
              {banks.map((bank, idx) => (
                <div
                  key={idx}
                  className="lm-bank-item"
                  onClick={() => selectBank(bank)}
                >
                  {bank}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="lm-form-group">
          <label className="lm-label">Account Number: <span className="lm-required">*</span></label>
          <input
            type="text"
            className="lm-input"
            value={accountNumber}
            onChange={handleAccountNumberChange}
            placeholder="Enter account number"
          />
        </div>

        <div className="lm-form-group">
          <label className="lm-label">Amount: <span className="lm-required">*</span></label>
          <input
            type="text"
            className="lm-input"
            value={amount}
            onChange={handleAmountChange}
            placeholder="Enter amount"
          />
        </div>

        <button className="lm-promocode-btn" onClick={handlePromoCodeChange}>Have Promo Code?</button>

        <div className="lm-reward-section">
          <span>Reward Points:</span>
          <span>{rewardPoints}</span>
        </div>

        <div className="lm-total-section">
          <span>Total Paying Amount:</span>
          <span>{parseFloat(totalAmount).toFixed(2)}</span>
        </div>

        <div className="lm-action-buttons">
          <button className="lm-proceed" onClick={handleProceed}>PROCEED</button>
          <button className="lm-clear" onClick={handleClear}>CLEAR</button>
        </div>

        <div className="lm-footer-buttons">
          <button className="lm-back-btn" onClick={handleBack}>Back</button>
        </div>

        {showPopup && (
          <Suspense fallback={<div className="lm-loading">Loading...</div>}>
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

export default LoadMoney;
