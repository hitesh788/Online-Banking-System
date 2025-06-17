import React, { useState, useEffect } from "react";
import "../styles/Loans.css";
import { useNavigate, useLocation } from "react-router-dom";

const loanTypes = [
    {
        name: "Manaslu Home Loan",
        image: "https://img.freepik.com/premium-photo/wooden-figure-man-meets-guest-concept-apartment-house-real-estate_1048944-12179069.jpg?w=1380",
        description: `<p>Make your dream home a reality with our flexible and low-interest home loans.</p>
                  <ul>
                      <li><span class="bullet">●</span> Low-interest rates with flexible repayment options.</li>
                      <li><span class="bullet">●</span> Loan tenure up to 30 years.</li>
                      <li><span class="bullet">●</span> Tax benefits under Section 80C and 24(b).</li>
                      <li><span class="bullet">●</span> No hidden charges or prepayment penalties.</li>
                      <li><span class="bullet">●</span> Special rates for first-time homebuyers.</li>
                  </ul>`
    },
    {
        name: "Manaslu Personal Loan",
        image: "https://img.freepik.com/free-photo/account-assets-audit-bank-bookkeeping-finance-concept_53876-124924.jpg?t=st=1742212783~exp=1742216383~hmac=a493699f8c9f9f1638ca5d93d430b88193328570922198bb9cc494c7299153e6&w=1380",
        description: `<p>Get instant funds for your personal needs with our easy-to-avail personal loans.</p>
                  <ul>
                      <li><span class="bullet">●</span> Quick approval with minimal documentation.</li>
                      <li><span class="bullet">●</span> Flexible repayment tenure up to 5 years.</li>
                      <li><span class="bullet">●</span> No collateral required.</li>
                      <li><span class="bullet">●</span> Attractive interest rates starting at 10.5%.</li>
                      <li><span class="bullet">●</span> Instant disbursal for pre-approved customers.</li>
                  </ul>`
    },
    {
        name: "Manaslu Car Loan",
        image: "https://img.freepik.com/free-photo/stylish-elegant-woman-car-salon_1157-20980.jpg?t=st=1742213042~exp=1742216642~hmac=ff458983c931d0aa4dd6b098861e9d0da662c1e1b3d4f9d935ac60d64b3d23d5&w=1380",
        description: `<p>Drive home your dream car with our affordable car loans.</p>
                  <ul>
                      <li><span class="bullet">●</span> 90% financing on the car’s on-road price.</li>
                      <li><span class="bullet">●</span> Low EMI plans and flexible tenure up to 7 years.</li>
                      <li><span class="bullet">●</span> Quick processing and minimal paperwork.</li>
                      <li><span class="bullet">●</span> Special interest rates for electric vehicles.</li>
                      <li><span class="bullet">●</span> Pre-approved offers for existing customers.</li>
                  </ul>`
    },
    {
        name: "Manaslu Education Loan",
        image: "https://img.freepik.com/free-photo/arrangement-education-growth-concept_23-2148721288.jpg?t=st=1742212930~exp=1742216530~hmac=5808f4f4aa06708fd7b72686bf19994e2e28114318b4448250ea9aa9f3e8e2f7&w=1380",
        description: `<p>Secure your future with our student-friendly education loans.</p>
                  <ul>
                      <li><span class="bullet">●</span> Up to 100% financing for tuition and living expenses.</li>
                      <li><span class="bullet">●</span> Low-interest rates and flexible repayment options.</li>
                      <li><span class="bullet">●</span> Moratorium period up to course completion + 1 year.</li>
                      <li><span class="bullet">●</span> Special benefits for female students.</li>
                      <li><span class="bullet">●</span> Tax benefits under Section 80E.</li>
                  </ul>`
    },
    {
        name: "Manaslu Business Loan",
        image: "https://img.freepik.com/free-photo/business-people-shaking-hands-finishing-up-meeting_1150-37745.jpg?t=st=1742212997~exp=1742216597~hmac=33d2b7f1e884550af03db5cfae2dae4bc9d54d78d884f8d9e52a9dc05e23c99b&w=1380",
        description: `<p>Expand your business with our customized business loans.</p>
                  <ul>
                      <li><span class="bullet">●</span> Loans up to ₹1 Crore with minimal documentation.</li>
                      <li><span class="bullet">●</span> Flexible tenure options up to 10 years.</li>
                      <li><span class="bullet">●</span> Collateral-free loans for SMEs.</li>
                      <li><span class="bullet">●</span> Competitive interest rates with easy repayment options.</li>
                      <li><span class="bullet">●</span> Special offers for women entrepreneurs.</li>
                  </ul>`
    }
];

function Loans() {
    const [showPopup, setShowPopup] = useState(false);
    const [loanConfirmed, setLoanConfirmed] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        if (params.get("apply") === "true" || location.state?.showApplyPopup) {
            setShowPopup(true);
        }
    }, [location]);

    const handleApply = () => {
        setShowPopup(true);
    };

    const handleConfirm = () => {
        setLoanConfirmed(true);
        setTimeout(() => {
            setShowPopup(false);
            setLoanConfirmed(false);
        }, 1000);
    };

    const handleCancel = () => {
        setShowPopup(false);
    };

    return (
        <div className="Loans-container">
            {loanTypes.map((loan, index) => (
                <div key={index} className="loan-card">
                    <img src={loan.image} alt={loan.name} className="card-banner" />
                    <h2>{loan.name}</h2>
                    <div dangerouslySetInnerHTML={{ __html: loan.description }} />
                    <div className="buttons">
                        <button className="btn-know-more">Know More</button>
                        <button className="btn-apply" onClick={handleApply}>Apply Now</button>
                    </div>
                </div>
            ))}

            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-modal">
                        {!loanConfirmed ? (
                            <>
                                <p>Are you sure you want to apply for loan?</p>
                                <div className="popup-buttons">
                                    <button className="btn-confirm" onClick={handleConfirm}>Confirm</button>
                                    <button className="btn-cancel" onClick={handleCancel}>Cancel</button>
                                </div>
                            </>
                        ) : (
                            <div className="success-message">
                                <img src="https://cdn-icons-png.flaticon.com/512/8750/8750924.png" alt="success" width="50" />
                                <p>
                                    Loan is applied successfully!<br />
                                    Our representative will contact you shortly.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Loans;
