import React, { useEffect, useState } from 'react';
import '../styles/ProfilePage.css';

const ProfilePage = () => {
  const [userDetails, setUserDetails] = useState({
    email: '',
    phone: '',
    age: '',
    address: '',
    accountNumber: '',
  });

  useEffect(() => {
    fetch('http://localhost:5000/api/profile', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUserDetails({
          email: data.email || 'N/A',
          phone: data.phone || 'N/A',
          age: data.age || 'N/A',
          address: data.address || 'N/A',
          accountNumber: data.accountNumber || 'N/A',
        });
      })
      .catch((err) => {
        console.error('Error fetching profile:', err);
      });
  }, []);

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h2>Your Profile</h2>
        <div className="profile-item"><strong>Email:</strong> {userDetails.email}</div>
        <div className="profile-item"><strong>Phone:</strong> {userDetails.phone}</div>
        <div className="profile-item"><strong>Age:</strong> {userDetails.age}</div>
        <div className="profile-item"><strong>Address:</strong> {userDetails.address}</div>
        <div className="profile-item"><strong>Account Number:</strong> {userDetails.accountNumber}</div>
      </div>
    </div>
  );
};

export default ProfilePage;
