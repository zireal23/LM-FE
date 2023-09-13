import React from 'react';
import './UserDashboard.css';

function UserDashboard() {
  return (
    <div className="user-dashboard">
      <h1>User Dashboard</h1>
      <div className="button-container">
        <button className="dashboard-button">View Loans</button>
        <button className="dashboard-button">Apply for Loan</button>
        <button className="dashboard-button">View Items Purchased</button>
      </div>
    </div>
  );
}

export default UserDashboard;
