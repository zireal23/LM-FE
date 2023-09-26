import React from 'react'
import { NavLink } from 'react-router-dom'
import "../App.css"

function ErrorPage() {
  return (
    <div className='errorpage'>
        <h1>404 Error Page</h1>
        <p>Sorry, This page does not exist.</p>
        <NavLink className="naving"to="/"> Go Back to Home </NavLink>
    </div>
  )
}

export default ErrorPage