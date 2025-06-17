import React from 'react';
import '../styles/RecentTransactions.css';

const RecentTransactions = () => {
  return (
    <div className="card transactions-card">
      <h4>Recent Transactions</h4>
      <ul className="transactions-list">
        <li>
          <span className="transaction-date">Apr 13</span>
          <span className="transaction-amount">Rs. 5.68</span>
          <span className="transaction-type">Interest</span>
        </li>
        <li>
          <span className="transaction-date">Apr 13</span>
          <span className="transaction-amount">Rs. 0.34</span>
          <span className="transaction-type">Tax</span>
        </li>
        <li>
          <span className="transaction-date">Apr 09</span>
          <span className="transaction-amount">Rs. 500.00</span>
          <span className="transaction-type">Debit Card Fee</span>
        </li>
      </ul>
    </div>
  );
};

export default RecentTransactions;
