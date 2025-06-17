import React from 'react';
import '../styles/Career.css';

import noVacancyIcon from './UserDashBoard/assets/no-vacancy.png'; // Correct relative path

const Career = () => {
  return (
    <div className="career-container">
      <img src={noVacancyIcon} alt="No Vacancies" className="career-icon" />
      <h2 className="career-title">Sorry!</h2>
      <p className="career-message">No vacancies updated at the moment</p>
    </div>
  );
};

export default Career;
