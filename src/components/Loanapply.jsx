import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './Loanapply.css'



function Loanapply() {
  const [employeeId, setEmployeeId] = useState('');
  const [itemCategory, setItemCategory] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [itemValue, setItemValue] = useState('');
  const [itemMake, setItemMake] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      employeeId,
      itemCategory,
      itemDescription,
      itemValue,
      itemMake,
    });
  };

  return (
    <div className="container">
      <div className="form-container">
        <h1 className="mb-4">Select Product and Apply for Loan</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="employeeId">Employee ID :</label>
            <input
              type="text"
              className="form-control"
              id="employeeId"
              value={employeeId}
              onChange={(e) => setEmployeeId(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="itemCategory">Item Category : </label>
            <select
              className="form-control"
              id="itemCategory"
              value={itemCategory}
              onChange={(e) => setItemCategory(e.target.value)}
            >
              <option value="Furniture">Furniture</option>
              <option value="Stationary">Stationary</option>
              <option value="Crockery">Crockery</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="itemDescription">Item Description : </label>
            <textarea
              className="form-control"
              id="itemDescription"
              value={itemDescription}
              onChange={(e) => setItemDescription(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="itemValue">Item Value : </label>
            <input
              type="text"
              className="form-control"
              id="itemValue"
              value={itemValue}
              onChange={(e) => setItemValue(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="itemMake">Item Make : </label>
            <select
              className="form-control"
              id="itemMake"
              value={itemMake}
              onChange={(e) => setItemMake(e.target.value)}
            >
              <option value="Wooden">Wooden</option>
              <option value="Glass">Glass</option>
              <option value="Plastic">Plastic</option>
            </select>
          </div>
          <button type="submit" className="btn btn-submit">Apply Loan</button>
        </form>
      </div>
    </div>
  );
}


export default Loanapply;
