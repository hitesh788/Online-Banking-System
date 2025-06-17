import React from "react";
import "../styles/Cards.css";

const accountTypes = [
  { 
    name: "Manaslu Contactless Debit Card",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2bbce467653363.5b418d79d57c9.jpg", // Banner image
    description: `<p>
                    Experience the next level of banking with our Contactless Debit Card, designed for swift and secure transactions.
                  </p>
                  <ul>
                      <li><span class="bullet">●</span> Fast and secure NFC-enabled tap payments.</li>
                      <li><span class="bullet">●</span> Zero contact transactions for hygiene and safety.</li>
                      <li><span class="bullet">●</span> Accepted worldwide at millions of merchants.</li>
                      <li><span class="bullet">●</span> EMI options for high-value purchases.</li>
                      <li><span class="bullet">●</span> Fraud protection with real-time transaction alerts.</li>
                  </ul>`
  },
  { 
    name: "Manaslu Cashback Credit Card",
    image: "https://images.fintra.co.in/cms/17-top-rupay-credit-cards-in-india.png",
    description: `<p>
                    Enjoy unlimited cashback benefits on your everyday purchases with the Manaslu Cashback Credit Card.
                  </p>
                  <ul>
                      <li><span class="bullet">●</span> Earn cashback on shopping, dining, and fuel.</li>
                      <li><span class="bullet">●</span> Exclusive discounts on partner brands.</li>
                      <li><span class="bullet">●</span> Zero annual fees on reaching spending milestones.</li>
                      <li><span class="bullet">●</span> Reward points convertible to cashback.</li>
                      <li><span class="bullet">●</span> Interest-free credit period on purchases.</li>
                  </ul>`
  },
  { 
    name: "Manaslu Platinum Travel Card",
    image: "https://mir-s3-cdn-cf.behance.net/projects/max_808/f861b9113522931.Y3JvcCwxNDAwLDEwOTUsMCwxMw.jpg",
    description: `<p>
                    Travel with luxury and convenience using the Manaslu Platinum Travel Card.
                  </p>
                  <ul>
                      <li><span class="bullet">●</span> Complimentary airport lounge access worldwide.</li>
                      <li><span class="bullet">●</span> Zero foreign transaction fees.</li>
                      <li><span class="bullet">●</span> Exclusive hotel and travel discounts.</li>
                      <li><span class="bullet">●</span> Comprehensive travel insurance coverage.</li>
                      <li><span class="bullet">●</span> Earn travel miles on every transaction.</li>
                  </ul>`
  },
  { 
    name: "Manaslu Prepaid Forex Card",
    image: "https://blog.thomascook.in/wp-content/uploads/2022/06/Prepaid-Forex-Card-1024x683.jpg",
    description: `<p>
                    Manage your foreign transactions seamlessly with the Manaslu Prepaid Forex Card.
                  </p>
                  <ul>
                      <li><span class="bullet">●</span> Multi-currency support for seamless global payments.</li>
                      <li><span class="bullet">●</span> Locked exchange rates to avoid forex fluctuations.</li>
                      <li><span class="bullet">●</span> 24/7 emergency card replacement service.</li>
                      <li><span class="bullet">●</span> Accepted at ATMs and merchants worldwide.</li>
                      <li><span class="bullet">●</span> Zero cross-currency conversion charges.</li>
                  </ul>`
  },
  { 
    name: "Manaslu Corporate Business Card",
    image: "https://media.smallbiztrends.com/2022/02/small-business-credit-cards-for-new-businesses.png",
    description: `<p>
                    Empower your business with higher spending limits and exclusive corporate benefits.
                  </p>
                  <ul>
                      <li><span class="bullet">●</span> Higher spending limits for corporate needs.</li>
                      <li><span class="bullet">●</span> Detailed expense tracking and reporting.</li>
                      <li><span class="bullet">●</span> Employee card management and spending controls.</li>
                      <li><span class="bullet">●</span> Exclusive business rewards and cashback.</li>
                      <li><span class="bullet">●</span> Interest-free credit period for working capital.</li>
                  </ul>`
  }
];

function Cards() {
  return (
    <div className="Cards-container">
      {accountTypes.map((account, index) => (
        <div key={index} className="account-card">
          <img src={account.image} alt={account.name} className="card-banner" />
          <h2>{account.name}</h2>
          <div dangerouslySetInnerHTML={{ __html: account.description }} />
          <div className="buttons">
            <button className="btn-know-more">Know More</button>
            <button className="btn-apply">Apply Online</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
