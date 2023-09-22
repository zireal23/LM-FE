import React, { useState } from "react";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import axios from "axios";
import "./Adminlogin.css";
import { useNavigate } from "react-router-dom";

const Adminlogin = () => {
  const baseURL = "http://localhost:7000/loginadmin";
  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLoginPage = (event) => {
    event.preventDefault();
    axios
      .post(baseURL, {
        employeeId: employeeId,
        password: password,
      })
      .then((response) => {
        // alert(response.data.adminName);
        console.log(response.data);
        alert("Success!");
        sessionStorage.setItem("employeeID", employeeId);
        navigate("/admindashboard");
      })
      .catch((error) => {
        alert("Failed");
      });
    console.log("Login:", { employeeId: employeeId, password });
  };

  return (
    <div className="login_page">
      <h2>Admin Login</h2>
      <form onSubmit={handleLoginPage}>
        <div className="form-group">
          <label htmlFor="employeeId">Admin ID</label>
          <input
            type="text"
            id="employeeId"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <Button variant="success" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Adminlogin;
