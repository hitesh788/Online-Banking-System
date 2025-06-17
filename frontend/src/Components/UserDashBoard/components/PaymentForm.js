import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { jsPDF } from "jspdf";  // Import jsPDF
import "../styles/PaymentForm.css";

const PaymentForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    idNumber: "",
    email: "",
    amount: "",
  });

  const [transactionComplete, setTransactionComplete] = useState(false); // Track transaction status

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Function to generate PDF receipt
  const generatePDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Transaction Receipt", 20, 20);
    doc.setFontSize(12);
    doc.text(`Name: ${formData.name}`, 20, 40);
    doc.text(`Mobile: ${formData.mobile}`, 20, 50);
    doc.text(`ID Number: ${formData.idNumber}`, 20, 60);
    doc.text(`Email: ${formData.email}`, 20, 70);
    doc.text(`Amount Paid: NPR ${formData.amount}`, 20, 80);
    doc.text(`Status: Completed`, 20, 100);

    doc.save("transaction_receipt.pdf"); // Trigger file download
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Payment Info Submitted:", formData);

    // Here you can integrate your API call, after successful response:
    setTransactionComplete(true);
    generatePDF(); // Generate and download PDF receipt

    // Optionally, clear form or keep data as is
  };

  const handleBack = () => {
    navigate(-1);
  };

  if (transactionComplete) {
    return (
      <div className="payment-container">
        <h2 className="payment-title neo-green">Transaction Completed Successfully!</h2>
        <p>Thank you, {formData.name}, for your payment of NPR {formData.amount}.</p>
        <p>Your receipt has been downloaded.</p>
        <button onClick={() => setTransactionComplete(false)} className="submit-button" style={{marginTop: "20px"}}>
          Make Another Payment
        </button>
        <button onClick={handleBack} className="submit-button" style={{marginTop: "10px", backgroundColor: "#888"}}>
          ← Back
        </button>
      </div>
    );
  }

  return (
    <div className="payment-container">
      <h2 className="payment-title">Payment Form</h2>
      <form onSubmit={handleSubmit} className="payment-form">
        <div className="form-group">
          <label>Full Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="form-group">
          <label>Mobile Number:</label>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="98XXXXXXXX"
            pattern="[0-9]{10}"
            required
          />
        </div>

        <div className="form-group">
          <label>ID Number:</label>
          <input
            type="text"
            name="idNumber"
            value={formData.idNumber}
            onChange={handleChange}
            placeholder="Enter ID number"
            required
          />
        </div>

        <div className="form-group">
          <label>Email Address:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@email.com"
            required
          />
        </div>

        <div className="form-group">
          <label>Amount:</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="Enter amount"
            required
          />
        </div>

        <button type="submit" className="submit-button">
          Pay Now
        </button>

        <button
          type="button"
          className="submit-button"
          style={{ marginTop: "10px", backgroundColor: "#888" }}
          onClick={handleBack}
        >
          ← Back
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
