import React from "react";
import "../styles/InterestRates.css";

const interestData = [
  {
    title: "LCY Deposit - Saving",
    headers: ["LCY Deposit - Saving", "Interest Rate (% per annum)"],
    rows: [
      ["All other Savings Products", "3.10%"],
      ["Sathi Bachat Khata", "5.10%"],
      ["Sarbasrestha Remittance Bachat Khata", "6.10%"],
    ],
  },
  {
    title: "LCY Deposit - Fixed",
    headers: ["Individual Fixed Deposit Tenure", "Interest Rate (% per annum)"],
    rows: [
      ["3 Months", "3.50%"],
      ["Above 3 Months to less than 12 Months", "4.00%"],
      ["12 months to less than 5 Years", "5.50%"],
      ["5 Years And Above", "6.60%"],
    ],
  },
  {
    title: "Institutional Fixed Deposit - Tenure",
    headers: ["Institutional Fixed Deposit - Tenure", "Interest Rate (% per annum)"],
    rows: [
      ["6 Months to less than 12 months", "3.05%"],
      ["1 year to 2 Years", "3.50%"],
      
      ["Above 2 years to less than 5 Years", "4.00%"],
      ["5 Years and Above", "5.60%"],
    ],
  },
];

function InterestRates() {
  return (
    <div className="interest-container">
      {interestData.map((section, index) => (
        <div key={index} className="interest-section">
          <h2>{section.title}</h2>
          <table>
            <thead>
              <tr>
                {section.headers.map((header, idx) => (
                  <th key={idx}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  <td>{row[0]}</td>
                  <td>{row[1]}</td>
                </tr>
              ))}
              <center>
              <button className="btn-apply">Learn More</button>
              </center>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

export default InterestRates;
