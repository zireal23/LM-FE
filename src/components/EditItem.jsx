import React, { useState, useEffect } from 'react';
import {useNavigate} from "react-router-dom";
import { useParams } from 'react-router-dom'; 
import axios from "axios";
//import { Form, Button, Container, Alert } from 'react-bootstrap';

const EditItem = () => {
  const navigate = useNavigate();
  const baseURL = "http://localhost:7000/edititembyid";
  const { itemId } = useParams();
  const [itemCategoryArray, setItemCategoryArray] = useState([]);
  const [itemMakeArray, setItemMakeArray] = useState([]);
  const [itemCategory, setItemCategory] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemValuation, setItemValuation] = useState();
  const [itemMake, setItemMake] = useState("");
  const [issueStatus, setIssueStatus] = useState("");

  useEffect(() => {
    axios.get("http://localhost:7000/distinctLoanTypes").then((res) => {
        console.log(res.data);
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

  const handleItemCategoryChange = (e) => {
    setItemCategory(e.target.value);
    document.getElementById("itemMake").selectedIndex = 0;
    // document.getElementById("itemDescription").selectedIndex = 0;
};

const handleItemMakeChange = (e) => {
    setItemMake(e.target.value);
    // document.getElementById("itemDescription").selectedIndex = 0;
};

const handleItemDescriptionChange = (e) => {
    setItemDescription(e.target.value);
};

const handleItemValueChange = (e) => {
    setItemValuation(e.target.value);
};

const handleIssueStatusChange = (e) => {
    setIssueStatus(e.target.value);
};
  const submitActionHandler = (event) => {
    event.preventDefault();
    axios
      .put(baseURL, {
            itemId,
            issueStatus,
            itemCategory,
            itemDescription,
            itemMake,
            itemValuation
      })
      .then((response) => {
       // alert(response.data.employeeName);
       console.log(response.data);
        alert("Item "+ itemCategory +" updated!");
        navigate("/viewitems");
        
      }).catch(error => {
        alert("error==="+error);
      });

  };

  const cancelHandler = () =>{
    //reset the values of input fields
    // setLoanType('');
    // setDuration('');
   // navigate("/read");

  }
    return(
      
        <div className="container">
        <div className="form-container">
            <h1 className="mb-4">Add Item</h1>
            <form onSubmit={submitActionHandler}>
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

                <label>
                    Item Description: <input type="text" name="name" onChange={handleItemDescriptionChange}/>
                </label>

                <label>
                    Item Value: <input type="text" name="name" onChange={handleItemValueChange}/>
                </label>

                <label>
                    Issue Status:
                    <select name="issueStatus" onChange={handleIssueStatusChange}>
                        <option value="">Select</option>
                        <option value="Y">Y</option>
                        <option value="N">N</option>
                    </select>
                </label>

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

                <button type="submit" className="btn btn-submit">
                    Add Item
                </button>
            </form>
        </div>
    </div>

    
    
    );
}
export default EditItem;



