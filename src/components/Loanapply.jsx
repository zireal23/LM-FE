import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Loanapply.css";

function Loanapply() {
  const employeeID = sessionStorage.getItem("employeeID");
  const [itemCategoryArray, setItemCategoryArray] = useState([]);
  const [itemMakeArray, setItemMakeArray] = useState([]);
  const [itemArray, setItemArray] = useState([]);
  const [itemCategory, setItemCategory] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemValuation, setitemValuation] = useState("");
  const [itemMake, setItemMake] = useState("");

  useEffect(() => {
    axios.get("http://localhost:7000/distinctLoanTypes").then((res) => {
      setItemCategoryArray(res.data);
    });
  }, []);

  useEffect(() => {
    if (itemCategory) {
      axios
        .get(`http://localhost:7000/fetchItemMake?category=${itemCategory}`)
        .then((res) => {
          setItemMakeArray(res.data);
        });
    }
  }, [itemCategory]);

  useEffect(() => {
    if (itemCategory && itemMake)
      axios
        .get(
          `http://localhost:7000/fetchItemsFromCategoryAndMake?category=${itemCategory}&make=${itemMake}`
        )
        .then((res) => {
          console.log(res.data);
          setItemArray(res.data);
        });
  }, [itemMake, itemCategory]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      employeeID,
      itemCategory,
      itemDescription,
      itemValuation,
      itemMake,
    });
    axios.post("http://localhost:7000/saveEmployeeLoan", {
      employeeID,
      itemCategory,
      itemDescription,
      itemValuation,
      itemMake
    }).then(res => {
      alert(res.data);
    })
  };

  const handleItemCategoryChange = (e) => {
    setItemCategory(e.target.value);
    document.getElementById("itemMake").selectedIndex = 0;
    document.getElementById("itemDescription").selectedIndex = 0;
  };

  const handleItemMakeChange = (e) => {
    setItemMake(e.target.value);
    document.getElementById("itemDescription").selectedIndex = 0;
  };

  const handleItemDescriptionChange = (e) => {
    setitemValuation(itemArray[e.target.selectedIndex - 1].itemValuation);
    setItemDescription(e.target.value);
  };

  return (
    <div className="container">
      <div className="form-container">
        <h1 className="mb-4">Select Product and Apply for Loan</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="employeeId">Employee ID :</label>
            {employeeID}
          </div>
          <div className="form-group">
            <label htmlFor="itemCategory">Item Category : </label>
            <select
              className="form-control"
              id="itemCategory"
              onChange={handleItemCategoryChange}
            >
              <option disabled selected>
                Please Select a Value
              </option>
              {itemCategoryArray.map((val, idx) => {
                return (
                  <option value={val} key={idx}>
                    {val}
                  </option>
                );
              })}
              {/* <option value="Stationary">Stationary</option>
              <option value="Crockery">Crockery</option> */}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="itemMake">Item Make : </label>
            <select
              className="form-control"
              id="itemMake"
              onChange={handleItemMakeChange}
            >
              <option selected disabled>
                Please select an option
              </option>
              {itemMakeArray.map((val, idx) => {
                return (
                  <option value={val} key={idx}>
                    {val}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="itemDescription">Item Description : </label>
            <select
              className="form-control"
              id="itemDescription"
              onChange={handleItemDescriptionChange}
            >
              <option selected disabled>
                Please select an option
              </option>
              {itemArray.map((val, idx) => {
                return (
                  <option value={val} key={idx}>
                    {val.itemDescription}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="itemValuation">Item Value : </label>
            {itemValuation}
          </div>

          <button type="submit" className="btn btn-submit">
            Apply Loan
          </button>
        </form>
      </div>
    </div>
  );
}

export default Loanapply;
