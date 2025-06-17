import React from "react";
import "../styles/Footer.css";

function Footer() {
  // Define direct links for payment icons
  const visaIcon = "https://logos-world.net/wp-content/uploads/2020/04/Visa-Symbol.png";
  const mastercardIcon = "https://s3.amazonaws.com/freebiesupply/large/2x/mastercard-logo-png-transparent.png";
  const rupayIcon = "https://pngimagefree.com/wp-content/uploads/Rupay-Logo-PNG.png";
  const paypalIcon = "https://static.vecteezy.com/system/resources/previews/022/100/701/large_2x/paypal-logo-transparent-free-png.png";

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section - Bank Features */}
        <div className="footer-section">
          <h3>Why Choose Us?</h3>
          <ul>
            <li>✅ Secure Online Banking</li>
            <li>✅ 24/7 Customer Support</li>
            <li>✅ Instant Loan Approvals</li>
            <li>✅ High Interest Savings</li>
            <li>Contact For More!!!!!</li>
          </ul>
        </div>

        {/* Middle Section - Contact Details */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>📍 Head Office: New Road, Kathmandu</p>
          <p>📞 Phone: <a href="tel:+97715555555">+977-1-5555555</a></p>
          <p>
            ✉ Email: <a href="mailto:support@manaslubank.com">support@manaslubank.com</a>
          </p>
          {/* Exclusive Partner Section */}
          <div className="exclusive-partner">
            <h3>Exclusive Partner</h3>
            <div className="payment-icons">
              <img src={visaIcon} alt="Visa" className="payment-icon" />
              <img src={mastercardIcon} alt="Mastercard" className="payment-icon" />
              <img src={rupayIcon} alt="RuPay" className="payment-icon" />
              <img src={paypalIcon} alt="PayPal" className="payment-icon" />
            </div>
          </div>
        </div>

        {/* Right Section - Small Google Map */}
        <div className="footer-section map-container">
          <h3>Our Location</h3>
          <iframe
            title="Bank Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.0133932733943!2d85.3131490760736!3d27.715022276209633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1914925b9277%3A0x3f77524cb7ad5087!2sNew%20Road%2C%20Kathmandu%2044600%2C%20Nepal!5e0!3m2!1sen!2snp!4v1700000000000"
            width="100%"
            height="150"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© 2025 Manaslu Bank. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;