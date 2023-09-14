import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./PurchasedItems.css";

function PurchasedItems() {
  const [employeeId, setEmployeeId] = useState('');
  const [designation, setDesignation] = useState('');
  const [department, setDepartment] = useState('');
  const [tableData, setTableData] = useState([]);

  // useEffect(() => {
  //   // Fetch data from your API (example.com) and update tableData state
  //   // Replace this with your actual API fetch logic
  //   fetch('https://example.com/api/data')
  //     .then((response) => response.json())
  //     .then((data) => setTableData(data));
  // }, []);

  return (
    <div className="container">
      <h1>Item Purchased</h1>
      <div className="row">
        <div className="col">
          <div className="form-group">
            <label htmlFor="employeeId">Employee id:</label>
            <input
              type="text"
              className="form-control"
              id="employeeId"
              placeholder="Enter Employee ID"
              value={employeeId}
              onChange={(e) => setEmployeeId(e.target.value)}
            />
          </div>
        </div>
        <div className="col">
          <div className="form-group">
            <label htmlFor="designation">Designation:</label>
            <input
              type="text"
              className="form-control"
              id="designation"
              placeholder="Enter Designation"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
            />
          </div>
        </div>
        <div className="col">
          <div className="form-group">
            <label htmlFor="department">Department:</label>
            <input
              type="text"
              className="form-control"
              id="department"
              placeholder="Enter Department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            />
          </div>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Issue_id</th>
            <th>Item Description</th>
            <th>Item Make</th>
            <th>Item Category</th>
            <th>Item Valuation</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item) => (
            <tr key={item.issueId}>
              <td>{item.issueId}</td>
              <td>{item.itemDescription}</td>
              <td>{item.itemMake}</td>
              <td>{item.itemCategory}</td>
              <td>{item.itemValuation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PurchasedItems;
