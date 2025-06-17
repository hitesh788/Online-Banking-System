import React from "react";
import "../styles/Branches.css";

const branchesData = [
  { name: "Kathmandu - New Road", phone: "+977-1-5551234", manager: "Rajesh Shrestha" },
  { name: "Pokhara - Lakeside", phone: "+977-61-456789", manager: "Sita Adhikari" },
  { name: "Chitwan - Bharatpur", phone: "+977-56-334455", manager: "Kiran Tamang" },
  { name: "Bhaktapur - Suryabinayak", phone: "+977-1-6667778", manager: "Prakash Poudel" },
  { name: "Lalitpur - Pulchowk", phone: "+977-1-7778889", manager: "Deepa Thapa" },
  { name: "Dharan - Sunsari", phone: "+977-25-223344", manager: "Anup Giri" },
  { name: "Butwal - Rupandehi", phone: "+977-71-112233", manager: "Meera Bista" },
  { name: "Biratnagar - Morang", phone: "+977-21-445566", manager: "Bikash Joshi" },
  { name: "Janakpur - Dhanusha", phone: "+977-41-778899", manager: "Sunil Shah" },
  { name: "Hetauda - Makwanpur", phone: "+977-57-998877", manager: "Sarita Rimal" 

  },
  { name: "Kanchanpur - Mahendranagar", phone: "+977-91-665544", manager: "Ram Bahadur BK" }
];

function Branches() {
  return (
    <div className="branches-container">
      <h2>Our Branches</h2>
      <div className="branches-grid">
        {branchesData.map((branch, index) => (
          <div key={index} className="branch-tile">
            <h3>{branch.name}</h3>
            <p>📞 {branch.phone}</p>
            <p>👨‍💼 Manager: {branch.manager}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Branches;
