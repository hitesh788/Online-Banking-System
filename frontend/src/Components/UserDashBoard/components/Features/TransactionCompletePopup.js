// TransactionCompletePopup.jsx
import React from 'react';
import { jsPDF } from 'jspdf';
import './MobileTopup.css';

const TransactionCompletePopup = ({ onClose, transactionDetails }) => {
  const generateReceipt = () => {
    const doc = new jsPDF();
    
    doc.setFontSize(18);
    doc.text('Transaction Receipt', 20, 20);
    
    doc.setFontSize(12);
    doc.text(`Date: ${transactionDetails.timestamp}`, 20, 30);
    doc.text(`Phone Number: ${transactionDetails.phoneNumber || 'N/A'}`, 20, 40);
    doc.text(`Amount: ${transactionDetails.amount || 'N/A'}`, 20, 50);
    doc.text(`Reward Points: ${transactionDetails.rewardPoints}`, 20, 60);
    doc.text(`Total Amount: ${transactionDetails.totalAmount}`, 20, 70);
    doc.text('Thank you for your transaction!', 20, 90);
    
    const timestamp = transactionDetails.timestamp.replace(/[, :]/g, '-');
    const filename = `Transcation_Receipt_${timestamp}.pdf`;
    
    doc.save(filename);
  };

  const handleClose = () => {
    generateReceipt();
    onClose();
  };

  return (
    <div className="mtt-popup-overlay">
      <div className="mtt-popup-content">
        <h3>Transaction Completed</h3>
        <p>Amount has been successfully proceeded!</p>
        <button className="mtt-popup-close-btn" onClick={handleClose}>OK</button>
      </div>
    </div>
  );
};

export default TransactionCompletePopup;