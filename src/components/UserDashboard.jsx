import React from "react";
import "./UserDashboard.css";
import { useNavigate } from "react-router-dom";
function UserDashboard() {
  const navigate = useNavigate();
  const handleViewLoans = () => {
    navigate("/fetch");
  };
  const handleApplyLoan = () => {
    navigate("/applyLoan");
  };
  const employeeID = sessionStorage.getItem("employeeID");

  return (
    <div className="user-dashboard">
      <h1>User Dashboard</h1>
      <div className="button-container">
        <button className="dashboard-button" onClick={handleViewLoans}>
          View Loans
        </button>
        <button className="dashboard-button" onClick={handleApplyLoan}>
          Apply for Loan
        </button>
        <button className="dashboard-button">View Items Purchased</button>
        <span>{employeeID}</span>
      </div>
    </div>
  );
}

export default UserDashboard;
