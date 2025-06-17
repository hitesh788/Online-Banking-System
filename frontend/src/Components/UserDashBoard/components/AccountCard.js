import React, { useEffect, useState } from 'react';
import '../styles/AccountCard.css';

const AccountCard = () => {
  const [accountNumber, setAccountNumber] = useState('');
  const [accountHolderName, setAccountHolderName] = useState('');

  useEffect(() => {
    // Simulate fetching from login/localStorage (you can replace this with actual values)
    const storedAccountNumber = localStorage.getItem('accountNumber') || '04307010043434';

    const storedName = localStorage.getItem('userName') || 'ISHAN BAHADUR SINGH';

    setAccountNumber(storedAccountNumber);
    setAccountHolderName(storedName);
  }, []);

  return (
    <div className="card account-card" style={{ backgroundColor: '#4CAF50' }}>
      <h4>MANASLU GEN N ACCOUNT</h4>
      <p>Account Holder: {accountHolderName}</p>
      <p>Account No: {accountNumber}</p>
      <p>Available Balance: NPR 59,800.20</p> {/* Manual value */}
      <p>Accrued Interest: NPR 3,200.55</p>   {/* Manual value */}
    </div>
  );
};

export default AccountCard;
