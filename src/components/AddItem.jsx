import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaUser, FaLock, FaIdCard, FaDesktop, FaDeskpro, FaTransgender, FaGenderless, FaMale, FaCalendar, FaSitemap } from "react-icons/fa";

function AddItems() {
    const navigate = useNavigate();
    const [itemCategoryArray, setItemCategoryArray] = useState([]);
    const [itemMakeArray, setItemMakeArray] = useState([]);
    const [itemCategory, setItemCategory] = useState("");
    const [itemDescription, setItemDescription] = useState("");
    const [itemValuation, setItemValuation] = useState();
    const [itemMake, setItemMake] = useState("");
    const [itemId, setItemId] = useState();
    const [itemStatus, setItemStatus] = useState("");

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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(itemStatus);
        axios.post("http://localhost:7000/saveItem", {
            itemId,
            itemStatus,
            itemCategory,
            itemDescription,
            itemMake,
            itemValuation
        }).then(res => {
            alert(res.data);
            navigate("/viewitems");
        })
    };

    const handleItemCategoryChange = (e) => {
        setItemCategory(e.target.value);
        // document.getElementById("itemMake").selectedIndex = 0;
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

    const handleItemIdChange = (e) => {
        setItemId(e.target.value);
    };

    const handleItemStatusChange = (e) => {
        setItemStatus(e.target.value);
    };

    return (


        <div className='addEmployee'>

            <form onSubmit={handleSubmit}>

                <h2 className="title">Add Item</h2>

                <div className='input-field'>
                    <i className="fas fa-id-card-o">
                        <FaIdCard style={{ color: "#121212" }} />
                    </i>
                    <input type="text" name="name" onChange={handleItemIdChange} placeholder="Item ID" required />
                </div>

                <div className='input-field'>
                    <i className="fas fa-user">
                        <FaUser style={{ color: "#121212" }} />
                    </i>
                    <input type="text" name="name" onChange={handleItemCategoryChange} placeholder="Item Category" required /></div>

                <div className='input-field'>
                    <i className="fas fa-desktop">
                        <FaDesktop style={{ color: "#121212" }} />
                    </i>
                    <input type="text" name="name" onChange={handleItemDescriptionChange} placeholder="Item Description" required /></div>


                <div className='input-field'>
                    <i className="fas fa-deskpro">
                        <FaDeskpro style={{ color: "#121212" }} />
                    </i>
                    <input type="text" name="name" onChange={handleItemValueChange} placeholder="Item Value" required /></div>
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
                    <input type="text" name="name" onChange={handleItemMakeChange} placeholder="Item Make" required /></div>


                <button type='submit' className="btn solid">Add Item</button>

            </form>

        </div>

    );
};

export default AddItems;
