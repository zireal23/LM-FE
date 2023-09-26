import React from "react";
import "../App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaUser, FaLock } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

const Login = () => {
  const employeeLoginURL = "http://localhost:7000/login";
  const adminLoginURL = "http://localhost:7000/login/loginadmin";
  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");
    if (sign_up_btn && sign_in_btn) {
      sign_up_btn.addEventListener("click", () => {
        if (container !== null) container.classList.add("sign-up-mode");
      });
      sign_in_btn.addEventListener("click", () => {
        if (container !== null) container.classList.remove("sign-up-mode");
      });

      return () => {
        sign_up_btn.removeEventListener("click", () => {
          if (container !== null) container.classList.add("sign-up-mode");
        });
        sign_in_btn.removeEventListener("click", () => {
          if (container !== null) container.classList.remove("sign-up-mode");
        });
      };
    }
  }, []);

  const handleUserLogin = (event) => {
    event.preventDefault();
    axios
      .post(employeeLoginURL, {
        employeeId: employeeId,
        password: password,
      })
      .then((response) => {
        // alert(response.data.employeeName);
        console.log(response.data);
        alert("Success!");
        sessionStorage.setItem("employeeID", employeeId);
        navigate("/userdashboard");
      })
      .catch((error) => {
        alert("Failed");
      });
    console.log("Login:", { employeeId, password });
  };
  const handleAdminLogin = (event) => {
    event.preventDefault();
    axios
      .post(adminLoginURL, {
        employeeId: employeeId,
        password: password,
      })
      .then((response) => {
        // alert(response.data.employeeName);
        console.log(response.data);
        alert("Success!");
        sessionStorage.setItem("employeeID", employeeId);
        navigate("/admindashboard");
      })
      .catch((error) => {
        alert("Failed");
      });
    console.log("Login:", { employeeId, password });
  };

  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <form onSubmit={handleUserLogin} className="sign-in-form">
            <h2 className="title">User Sign In</h2>
            <span
              className="loginError"
              style={{ color: "red", display: "none" }}
            >
              Invalid Employee ID or Password!
            </span>
            <div className="input-field">
              <i className="fas fa-user">
                <FaUser style={{ color: "#121212" }} />
              </i>
              <input
                type="text"
                id="employeeId"
                value={employeeId}
                onChange={(e) => setEmployeeId(e.target.value)}
                required
                placeholder="Employee ID"
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock">
                <FaLock style={{ color: "#121212" }} />
              </i>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Password"
              />
            </div>
            <input type="submit" value="Login" className="btn solid" />
          </form>
          <form className="sign-up-form" onSubmit={handleAdminLogin}>
            <h2 className="title">Admin Sign in</h2>
            <div>
              <p
                className="confirmPasswordError"
                style={{ color: "red", display: "none" }}
              >
                The passwords do no match
              </p>
              <span
                className="passwordError"
                style={{ color: "red", display: "none" }}
              >
                Password should be atleast 8 characters long and have an
                UpperCase character, a LowerCase character, a digit and a
                special character!
              </span>
              <span
                className="emailError"
                style={{ color: "red", display: "none" }}
              >
                Employee ID is not valid
              </span>
            </div>
            <div className="input-field">
              <i className="fas fa-user">
                <FaUser style={{ color: "#121212" }} />
              </i>
              <input
                type="text"
                id="employeeId"
                value={employeeId}
                onChange={(e) => setEmployeeId(e.target.value)}
                required
                placeholder="Employee ID"
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock">
                <FaLock style={{ color: "#121212" }} />
              </i>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Password"
              />
            </div>

            <input type="submit" className="btn" value="Sign up" />
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>An Admin here?</h3>
            <p>
              Use the Admin login portal
            </p>
            <button className="btn transparent" id="sign-up-btn">
              Admin Sign in
            </button>
          </div>
          <img src="./login.svg" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>Already an Employee</h3>
            <p>
              Use the employee login portal
            </p>
            <button className="btn transparent" id="sign-in-btn">
              Sign in
            </button>
          </div>
          <img
            src="./signup.svg"
            className="image"
            alt=""
            style={{ height: "60%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
