import React from 'react'
import { useNavigate } from "react-router-dom";
import "./LandingPage.css"

function LandingPage() {


    const navigate = useNavigate();
    const adminlogin = () => {
        navigate("/adminlogin");
    };
    const userlogin = () => {
        navigate("/login");
    };


    return (
        <div>

            <h1>LOAN MANAGEMENT APPLICATION</h1>

            <h3>Loan management system is a digital platform that helps lenders to automate their loan processes. This loan management process makes user experience very smooth and very simplify.</h3>

            <button className="admin-login" onClick={adminlogin}>
                Admin Login
            </button>



            <button className="user-login" onClick={userlogin}>
                User Login
            </button>

            <img alt='Loan manage pic' src='https://th.bing.com/th/id/OIP.ipHceY5n40jj-JdOgln1dQHaFj?w=232&h=180&c=7&r=0&o=5&pid=1.7' />



        </div>
    )
}

export default LandingPage