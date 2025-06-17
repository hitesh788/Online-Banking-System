import React from "react";
import "../styles/ContactPage.css";

function ContactPage() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Talk to Us - Manaslu Bank Customer Service</h1>

      <div className="contact-card">
        <div className="contact-details">
          {/* NRI Support */}
          <div className="contact-box">
            <img src="/ContactPage/CustomerSupport.png" alt="NRI Support" className="contact-icon" />
            <div>
              <h3>Personal Banking (24x7)</h3>
              <p className="contact-number">+977 9748285243</p>
            </div>
          </div>

          {/* India Support */}
          <div className="contact-box">
            <img src="/ContactPage/CustomerSupport.png" alt="India Support" className="contact-icon" />
            <div>
                <h3>Missed Call Services</h3>
              <p className="contact-number">1700 1537 / 1700 15636</p>
            </div>
          </div>

          {/* Raise Complaint */}
          <div className="contact-box">
            <img src="/ContactPage/Complaint.png" alt="Raise Complaint" className="contact-icon" />
            <div>
              <h3>Raise a complaint / Query</h3>
              <p className="contact-email">customercare@Manaslubank.com</p>
            </div>
          </div>
        </div>

        <hr className="divider" />

        <div className="additional-details">
          {/* Toll Free Numbers */}
          <div className="contact-box">
            <img src="/ContactPage/TollFree.png" alt="Toll Free Numbers" className="contact-icon" />
            <div>
              <h3>Toll Free Numbers for NRIs (From overseas locations)</h3>
              <p>Oman - <span className="contact-number">80077196</span></p>
              <p>Kenya - <span className="contact-number">0800721742</span></p>
              <p>UAE - <span className="contact-number">80001830996</span></p>
              <p>United States - <span className="contact-number">18445379719</span></p>
              <p>UK - <span className="contact-number">08000478340</span></p>
            </div>
          </div>

          {/* Video Call */}
          <div className="contact-box">
            <img src="/ContactPage/VideoCall.png" alt="Video Call" className="contact-icon video-icon" />
            <h3>Video Call</h3>
          </div>
        </div>

        {/* Feedback Section */}
        <div className="feedback-section">
          <p>Online Complaints / Track Status / Feedback</p>
          <button className="feedback-btn">Click here</button>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
