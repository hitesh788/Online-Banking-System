import React, { useEffect } from "react";
import "../styles/LoadingScreen.css";
import "../Components/Home.js";

function LoadingScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(); // Hide loading screen after 4 seconds
    }, 4000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="loading-container">
      <video autoPlay loop muted className="loading-video">
        <source src="/ManasluBank-Load.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default LoadingScreen;
