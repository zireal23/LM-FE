import React, { useState, useEffect } from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import { useParams } from 'react-router-dom'; 
import axios from "axios";
import { FaUser, FaLock, FaIdCard, FaDesktop, FaDeskpro, FaTransgender, FaGenderless, FaMale, FaCalendar, FaSitemap } from "react-icons/fa";
import { ToastContainer, Toast } from 'react-bootstrap';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Form, Button, Container, Alert } from 'react-bootstrap';

const EditItem = () => {
  const navigate = useNavigate();
  const baseURL = "http://localhost:7000/edititembyid";
  const { itemId } = useParams();
  const { state } = useLocation();
  const {
    itemdescription,
    itemmake,
    itemcategory,
    itemvaluation,
    itemstatus} = state;
  const [itemCategoryArray, setItemCategoryArray] = useState([]);
  const [itemMakeArray, setItemMakeArray] = useState([]);
  const [itemCategory, setItemCategory] = useState(itemcategory);
  const [itemDescription, setItemDescription] = useState(itemdescription);
  const [itemValuation, setItemValuation] = useState(itemvaluation);
  const [itemMake, setItemMake] = useState(itemmake);
  const [itemStatus, setItemStatus] = useState(itemstatus);
  const [showToastSuccess, setShowToastSuccess] = useState(false)
  const [showToastFail, setShowToastFail] = useState(false)
  const [toastMessage, setToastMessage] = useState('');

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

const handleItemStatusChange = (e) => {
    setItemStatus(e.target.value);
};
  const submitActionHandler = (event) => {
    event.preventDefault();
    axios
      .put(baseURL, {
            itemId,
            itemStatus: itemStatus,
            itemCategory,
            itemDescription,
            itemMake,
            itemValuation
      })
      .then((response) => {
       // alert(response.data.employeeName);
       console.log(response.data);
        setShowToastSuccess(true);
        setToastMessage("Item edited successfully");
        setTimeout(() => {
            navigate('/viewitems');
          }, 3000)
        
      }).catch(error => {
        setShowToastFail(true)
          setToastMessage("Item can't be edited");
      });

  };

  const cancelHandler = () =>{
    //reset the values of input fields
    // setLoanType('');
    // setDuration('');
   // navigate("/read");

  }

    return(
      
        <div className='addEmployee'>

            <form onSubmit={submitActionHandler}>

                <h2 className="title">Edit Item</h2>

                <div className='input-field'>
                    <i className="fas fa-user">
                        <FaUser style={{ color: "#121212" }} />
                    </i>
                    <input type="text" name="name" value={itemCategory} onChange={handleItemCategoryChange} placeholder="Item Category" required /></div>

                <div className='input-field'>
                    <i className="fas fa-desktop">
                        <FaDesktop style={{ color: "#121212" }} />
                    </i>
                    <input type="text" name="name" value={itemDescription} onChange={handleItemDescriptionChange} placeholder="Item Description" required /></div>


                <div className='input-field'>
                    <i className="fas fa-deskpro">
                        <FaDeskpro style={{ color: "#121212" }} />
                    </i>
                    <input type="text" name="name" value={itemValuation} onChange={handleItemValueChange} placeholder="Item Value" required /></div>
                <div className='input-field'>
                    <i className="fas fa-deskpro">
                        <FaDeskpro style={{ color: "#121212" }} />
                    </i>
                    <select name="itemStatus" onChange={handleItemStatusChange} placeholder="Gender" >

                        <option value="Y">Y</option>
                        <option value="N">N</option>
                        </select>
                </div>
                <div className='input-field'>
                    <i className="fas fa-calendar">
                        <FaCalendar style={{ color: "#121212" }} />
                    </i>
                    <input type="text" name="name" value={itemMake} onChange={handleItemMakeChange} placeholder="Item Make" required /></div>


                <button type='submit' className="loginButton transparent">Edit Item</button>

            </form>

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
export default EditItem;



