import React, {useState} from 'react';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import "C:/Users/react/sample/myloanapp/src/styles/login.css"

const LoginPage = () => {
    const baseURL = "http://localhost:8080/login";
    const [employeeId, setEmployeeId] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginPage = (event) => {
        event.preventDefault();
        axios
          .post(baseURL, {
            employeeId: employeeId,
            password: password
          })
          .then((response) => {
           // alert(response.data.employeeName);
           console.log(response.data);
            alert("Success!");
            //navigate("/account");
          }).catch(error => {
            alert("Failed");
          });
        console.log("Login:", {employeeId, password});
    };

    return (
        <div className="login_page">
            <h2>Login</h2>
            <form onSubmit={handleLoginPage}>
                <div className="form-group">
                    <label htmlFor="employeeId">Employee ID</label>
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
                <Button variant="success" type="submit">Submit</Button>
            </form>
        </div>
    );
};

export default LoginPage;