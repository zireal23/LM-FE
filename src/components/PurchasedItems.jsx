import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './PurchasedItems.css'

const PurchasedItems = () => {
  const [items, setItems] = useState([]);

  // useEffect(() => {
  //   // Replace 'example-api.com' with the actual API endpoint
  //   fetch('https://example-api.com/items')
  //     .then((response) => response.json())
  //     .then((data) => setItems(data));
  // }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Item Purchased</h1>
      <div className="row">
        <div className="col-md-4">
          <h4>Employee ID : </h4>
        </div>
        <div className="col-md-4">
          <h4>Designation : </h4>
        </div>
        <div className="col-md-4">
          <h4>Department : </h4>
        </div>
      </div>
      <div className="mt-4">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Issue ID</th>
              <th>Item Description</th>
              <th>Item Make</th>
              <th>Item Category</th>
              <th>Item Valuation</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.issueId}>
                <td>{item.issueId}</td>
                <td>{item.description}</td>
                <td>{item.make}</td>
                <td>{item.category}</td>
                <td>{item.valuation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PurchasedItems;
