import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Sidebar from './Sidebar'
import "../App.css";
import { ToastContainer, Toast } from 'react-bootstrap';
import 'react-toastify/dist/ReactToastify.css';

function Loanapply() {
  const navigate = useNavigate();
  const employeeID = sessionStorage.getItem("employeeID");
  const [showToastSuccess, setShowToastSuccess] = useState(false)
  const [showToastFail, setShowToastFail] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
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
    console.log(itemDescription, employeeID,itemCategory,itemValuation,itemMake);
    axios.post("http://localhost:7000/saveEmployeeLoan", {
      employeeID,
      itemCategory,
      itemDescription,
      itemValuation,
      itemMake
    }).then(res => {
      setShowToastSuccess(true)
          setToastMessage("Loan applied successfully")
          setTimeout(() => {
            navigate('/userdashboard');
          }, 3000);
    })
    // navigate("/userdashboard");
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
    <div className="applyLoan">
      <Sidebar />
<h4 className="headw">Select Product and Apply for Loan</h4>

      
      <div className="dww">
        {/* <h1 className="headw">Select Product and Apply for Loan</h1> */}
        <form onSubmit={handleSubmit}>
          <div className="footw">
            <label htmlFor="employeeId" className="lol">Employee ID</label><br />
            <div className="formdata">{employeeID}</div>
          </div>
          <div className="footw">
            <div className="lol" htmlFor="itemCategory" >Item Category</div>
            <select
              className="opt"
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
          <div className="footw">
            <div className="lol" htmlFor="itemMake">Item Make</div>
            <select
              className="opt"
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
          <div className="footw">
            <div className="lol" htmlFor="itemDescription">Item Description </div>
            <select
              className="opt"
              id="itemDescription"
              onChange={handleItemDescriptionChange}
            >
              <option selected disabled>
                Please select an option
              </option>
              {itemArray.map((val, idx) => {
                return (
                  <option value={val.itemDescription} key={idx}>
                    {val.itemDescription}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="footw">
            <div className="lol" htmlFor="itemValuation">Item Value</div>
            <div className="formdata">{itemValuation}</div>
          </div>

          <button type="submit" className="loginButton transparent">
            Apply Loan
          </button>
        </form>
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

    </div>
  );
}

export default Loanapply;
