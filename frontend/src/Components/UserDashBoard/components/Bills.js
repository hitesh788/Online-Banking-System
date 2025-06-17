import React from 'react';
import { useNavigate } from 'react-router-dom'; // <-- React Router
import '../styles/Bills.css';
import insuranceLogo from '../assets/Insurance.png';
import electricityLogo from '../assets/Electricity.png';
import internetLogo from '../assets/Internet.png';

// Bill data
const billsData = [
  {
    name: 'Internet',
    logo: internetLogo,
  },
  {
    name: 'Electricity',
    logo: electricityLogo,
  },
  {
    name: 'Insurance',
    logo: insuranceLogo,
  },
];

const Bills = () => {
  const navigate = useNavigate();

  const handleClick = (billName) => {
    navigate('/paymentform', { state: { billType: billName } });
  };

  return (
    <div className="bills">
      <h3>My Bills</h3>
      <div className="bills-list">
        {billsData.map((bill, index) => (
          <button
            key={index}
            className="bill-button"
            onClick={() => handleClick(bill.name)}
          >
            <img src={bill.logo} alt={bill.name} className="logo" />
            {bill.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Bills;
