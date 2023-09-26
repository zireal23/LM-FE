import React from 'react'
import { NavLink } from 'react-router-dom'
import "../App.css"

function ErrorInternal() {
  return (
    <div className='errorpage'>
        <h1>500 Error Page</h1>
        <p>Sorry, Something went wrong.</p>
        <NavLink className="naving"to="/"> Go Back to Home </NavLink>
    </div>
  )
}

export default ErrorInternal