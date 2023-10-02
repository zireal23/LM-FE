import React from "react";
import "../App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaUser, FaLock } from "react-icons/fa";
import { ToastContainer, Toast } from 'react-bootstrap';
import 'react-toastify/dist/ReactToastify.css';

import { useNavigate } from "react-router-dom";

const Login = () => {
  
  
  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");
  const [showToastSuccess, setShowToastSuccess] = useState(false)
  const [showToastFail, setShowToastFail] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const navigate = useNavigate();

  useEffect(() => {
    const sign_in_loginButton = document.querySelector("#sign-in-loginButton");
    const sign_up_loginButton = document.querySelector("#sign-up-loginButton");
    const container = document.querySelector(".loginContainer");
    if (sign_up_loginButton && sign_in_loginButton) {
      sign_up_loginButton.addEventListener("click", () => {
        if (container !== null) container.classList.add("sign-up-mode");
      });
      sign_in_loginButton.addEventListener("click", () => {
        if (container !== null) container.classList.remove("sign-up-mode");
      });

      return () => {
        sign_up_loginButton.removeEventListener("click", () => {
          if (container !== null) container.classList.add("sign-up-mode");
        });
        sign_in_loginButton.removeEventListener("click", () => {
          if (container !== null) container.classList.remove("sign-up-mode");
        });
      };
    }
  }, []);

  const handleUserLogin = (event) => {
    const employeeLoginURL = "http://localhost:7000/login";
    event.preventDefault();
    axios
      .post(employeeLoginURL, {
        employeeId: employeeId,
        password: password,
      })
      .then((response) => {
        // alert(response.data.employeeName);
        console.log(response.data);
        

        const {employeeName, designation, department, result} = response.data;
        if(result === "Login Successful"){
          // alert("Success!");
          sessionStorage.setItem("employeeName", employeeName);
          sessionStorage.setItem("designation", designation);
          sessionStorage.setItem("department", department);
          sessionStorage.setItem("employeeID", employeeId);
          setShowToastSuccess(true)
          setToastMessage("User logged in successfully")
          setTimeout(() => {
            navigate('/userdashboard');
          }, 3000);
        }
        else{
          setShowToastFail(true)
          setToastMessage("Username or password incorrect. Please try again");
        }
        
        
      })
      .catch((error) => {
        setShowToastFail(true)
        setToastMessage("Username doesn't exist!");
      });
    console.log("Login:", { employeeId, password });
  };
  const handleAdminLogin = (event) => {
    event.preventDefault();
    const adminLoginURL = "http://localhost:7000/loginadmin";
    axios
      .post(adminLoginURL, {
        employeeId: employeeId,
        password: password,
      })
      .then((response) => {
        // alert(response.data.employeeName);
        console.log(response.data);
              
        // const {employeeName, designation, department, result} = response.data;
        sessionStorage.setItem("employeeID", employeeId);
        if(response.data === "Login Successful"){
          setShowToastSuccess(true)
          setToastMessage("Admin logged in successfully")
          setTimeout(() => {
            navigate('/admindashboard');
          }, 3000)
        }
        else{
          setShowToastFail(true)
          setToastMessage("Login failed");
        }
        // alert("Success!");
          // sessionStorage.setItem("employeeName", employeeName);
          // sessionStorage.setItem("designation", designation);
          // sessionStorage.setItem("department", department);
          // sessionStorage.setItem("employeeID", employeeId);
          
        // else{
        //   alert("Failed");
        // }
      })
      .catch((error) => {
        setShowToastFail(true)
        setToastMessage("Admin doesn't exist!");
      });
    console.log("Login:", { employeeId, password });
  };

  return (
    <div className="loginContainer">
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
            <input type="submit" value="Login" className="loginButton solid" />
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

            <input type="submit" className="loginButton" value="Sign up" />
          </form>
        </div>
      </div>

      <ToastContainer style={{ top: "10px", right: "10px", position:"fixed" }}>

         <Toast show={showToastFail} onClose={() => setShowToastFail(false)} delay={3000} autohide bg="danger" style={{color:"#fff", backgroundColor:"#CA0800", padding:"2em"}}>

           <Toast.Body>{toastMessage}</Toast.Body>
       </Toast>
      </ToastContainer>
      <ToastContainer style={{ top: "10px", right: "10px", position:"fixed" }} >

        <Toast show={showToastSuccess} onClose={() => setShowToastSuccess(false)} delay={3000} autohide bg='success' style={{color:"#fff", backgroundColor:"#28A745", padding:"2em"}}>
          <Toast.Body>{toastMessage}</Toast.Body>
        </Toast>
      </ToastContainer>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>An Admin here?</h3>
            <p>
              Use the Admin login portal
            </p>
            <button className="loginButton transparent" id="sign-up-loginButton">
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
            <button className="loginButton transparent" id="sign-in-loginButton">
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
