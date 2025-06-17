import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { FaYoutube, FaWhatsapp, FaRobot } from "react-icons/fa";
import "../styles/Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  const bannerSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const announcements = [
    { id: 1, title: "Bid for Group Term Life Insurance Policy", date: "29 Mar 2025", link: "/announcements/group-insurance" },
    { id: 2, title: "Bank announces Financial Results for quarter ended, 31st December 2024.", date: "30 Jan 2025", link: "/announcements/financial-results" },
    { id: 3, title: "Invitation of applications for empanelment of advocates / firms on banks panel", date: "01 Nov 2024", link: "/announcements/advocates-panel" },
    { id: 4, title: "Bank announces Financial Results for quarter ended, 30th September 2024.", date: "25 Oct 2024", link: "/announcements/financial-results-sep" },
    { id: 5, title: "List of bank’s authorised vendors for Overdue Collection Activities", date: "01 Oct 2024", link: "/announcements/vendors" }
  ];

  return (
    <div className="home-container">
      <Slider {...bannerSettings} className="banner-slider">
        <div><img src="/Banner1.jpg" alt="Banner 1" className="banner" /></div>
        <div><img src="/Banner2.png" alt="Banner 2" className="banner" /></div>
        <div><img src="/banner3.jpg" alt="Banner 3" className="banner" /></div>
      </Slider>

      <div className="section">
        <h2>Our Picks</h2>
        <div className="picks-container">
          <Link to="/savings" className="pick"><img src="/picks/Saving.png" alt="Savings" /><p>Savings</p></Link>
          <Link to="/loans" className="pick"><img src="/picks/Loan.png" alt="Loan" /><p>Loan</p></Link>
          <Link to="/cards" className="pick"><img src="/picks/Cards.png" alt="Cards" /><p>Cards</p></Link>
          <Link to="/interest-rate" className="pick"><img src="/picks/Interest.png" alt="Interest Rate" /><p>Interest Rate</p></Link>
        </div>
        <div className="picks-footer">
          <button className="show-more">SHOW MORE</button>
          <button className="learn-more">LEARN ABOUT OUR BANK TODAY!</button>
        </div>
      </div>

      <div className="section announcements">
        <h2>📢 Announcements</h2>
        <div className="announcements-container">
          <div className="announcements-table">
            <div className="table-header">
              <span className="column-title">Title</span>
              <span className="column-date">Date</span>
              <span className="column-action">Action</span>
            </div>
            {announcements.map((announcement) => (
              <div className="table-row" key={announcement.id}>
                <span className="row-title">{announcement.title}</span>
                <span className="row-date">{announcement.date}</span>
                <Link to={announcement.link} className="row-action">Read More →</Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="floating-buttons">
        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="floating-btn youtube">
          <FaYoutube size={28} />
        </a>
        <a href="https://wa.me/918015600894" target="_blank" rel="noopener noreferrer" className="floating-btn whatsapp">
          <FaWhatsapp size={28} />
        </a>
        <Link to="/chatbot" className="floating-btn ai-bot">
          <FaRobot size={28} />
        </Link>
      </div>
    </div>
  );
}

export default Home;