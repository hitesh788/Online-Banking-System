import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CurrencyConverter.css';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [convertedAmount, setConvertedAmount] = useState('');
  const navigate = useNavigate();

  // Extended dummy exchange rates
  const exchangeRates = {
    USD: { EUR: 0.93, NPR: 133.5, GBP: 0.79, INR: 83.1, JPY: 155.6, AUD: 1.5, CAD: 1.36 },
    EUR: { USD: 1.07, NPR: 144.0, GBP: 0.85, INR: 89.5, JPY: 166.8, AUD: 1.61, CAD: 1.46 },
    NPR: { USD: 0.0075, EUR: 0.0069, GBP: 0.0060, INR: 0.64, JPY: 1.16, AUD: 0.011, CAD: 0.010 },
    GBP: { USD: 1.27, EUR: 1.18, NPR: 167.0, INR: 105.1, JPY: 196.0, AUD: 1.90, CAD: 1.71 },
    INR: { USD: 0.012, EUR: 0.011, NPR: 1.56, GBP: 0.0095, JPY: 1.87, AUD: 0.018, CAD: 0.016 },
    JPY: { USD: 0.0064, EUR: 0.0060, NPR: 0.86, GBP: 0.0051, INR: 0.53, AUD: 0.010, CAD: 0.0087 },
    AUD: { USD: 0.66, EUR: 0.62, NPR: 89.2, GBP: 0.53, INR: 56.3, JPY: 100.4, CAD: 0.91 },
    CAD: { USD: 0.74, EUR: 0.68, NPR: 98.3, GBP: 0.58, INR: 61.9, JPY: 114.3, AUD: 1.10 },
  };

  const currencyOptions = Object.keys(exchangeRates);

  const handleConvert = () => {
    const rate = exchangeRates[fromCurrency]?.[toCurrency];
    if (rate && !isNaN(parseFloat(amount))) {
      setConvertedAmount((parseFloat(amount) * rate).toFixed(2));
    } else {
      setConvertedAmount('Invalid');
    }
  };

  const handleClear = () => {
    setAmount('');
    setFromCurrency('USD');
    setToCurrency('EUR');
    setConvertedAmount('');
  };

  return (
    <div className="cc-modal-overlay">
      <div className="cc-modal-content">
        <h2>Currency Converter</h2>

        <div className="cc-form-group">
          <label className="cc-label">Amount and Currency:</label>
          <div className="cc-input-group">
            <input
              type="number"
              className="cc-input"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
            />
            <select
              className="cc-select"
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
            >
              {currencyOptions.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="cc-form-group">
          <label className="cc-label">Converted Amount and Currency:</label>
          <div className="cc-input-group">
            <input
              type="text"
              className="cc-input"
              value={convertedAmount}
              readOnly
            />
            <select
              className="cc-select"
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
            >
              {currencyOptions.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="cc-action-buttons">
          <button className="cc-convert" onClick={handleConvert}>CONVERT</button>
          <button className="cc-clear" onClick={handleClear}>CLEAR</button>
        </div>

        <div className="cc-back-button-container">
          <button className="cc-back-button" onClick={() => navigate('/userDashboard')}>
            BACK
          </button>
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;
