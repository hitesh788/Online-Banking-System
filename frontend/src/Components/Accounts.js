import React from "react";
import "../styles/Accounts.css";

const accountTypes = [
  {
    name: "Manaslu Savings Account",
    altName: "Everest Saver",
    description: [
      "Secure your future with steady interest.",
      "Competitive interest rates.",
      "Easy deposits and withdrawals.",
      "Online and mobile banking access."
    ],
    image: "https://shorturl.at/e47aD",
  },
  {
    name: "Manaslu Gen N Account",
    altName: "Himalayan Business Plus",
    description: [
      "Ideal for smooth business transactions.",
      "No limits on deposits and withdrawals.",
      "Overdraft facility available.",
      "24/7 online transaction capability."
    ],
    image: "https://shorturl.at/xeNSK",
  },
  {
    name: "Manaslu Fixed Deposit",
    altName: "Summit Secure FD",
    description: [
      "Grow your savings with high-interest returns.",
      "Flexible tenure options.",
      "Higher interest rates for longer terms.",
      "Premature withdrawal facility available."
    ],
    image: "https://shorturl.at/RDKqo",
  },
  {
    name: "Manaslu Recurring Deposit",
    altName: "Annapurna Growth Plan",
    description: [
      "A disciplined way to save every month.",
      "Earn interest on regular monthly savings.",
      "Auto-debit facility from savings account.",
      "Multiple tenure options available."
    ],
    image: "https://shorturl.at/3z8Wd",
  },
  {
    name: "Manaslu NRI Account",
    altName: "Global Everest Connect",
    description: [
      "Exclusive banking for NRIs with global access.",
      "Easy repatriation of funds.",
      "Attractive foreign exchange rates.",
      "Access to international banking services."
    ],
    image: "https://tinyurl.com/58n5tfff",
  },
];

function Accounts() {
  return (
    <div className="accounts-container">
      <h2>Types of Bank Accounts</h2>
      <div className="accounts-grid">
        {accountTypes.map((account, index) => (
          <div key={index} className="account-tile">
            <img src={account.image} alt={account.name} className="account-image" />
            <h3>{account.name}</h3>
            <h4>({account.altName})</h4>
            <ul>
              {account.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accounts;
