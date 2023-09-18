import React from "react";
import "./AdminDashboard.css";
import { useNavigate } from "react-router-dom";
function AdminDashboard() {
  const navigate = useNavigate();
  const handleViewEmployees = () => {
    navigate("/fetchemployeedata");
  };
  const handlefetchloans = () => {
    navigate("/fetchloancard");
  };
  const handlefetchitems = () => {
    navigate("/fetchitemadmin");
  };
  //const employeeID = sessionStorage.getItem("employeeID");

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      {/* <h2>Welcome <span>{employeeID}</span></h2> */}
      <div className="button-container">
        <button className="dashboard-button" onClick={handleViewEmployees}>
        Custom Data Management
        </button>
        <button className="dashboard-button" onClick={handlefetchloans}>
          Loan Card Management
        </button>
        <button className="dashboard-button" onClick={handlefetchitems}>Item Master Data</button>
        
      </div>
    </div>
  );
}

export default AdminDashboard;