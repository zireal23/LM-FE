import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
        <div className="container">
            <h1 className="mb-4">Add Item</h1>
            <div className="form-container">
                
                <form onSubmit={handleSubmit}>
                    <label>
                        Item ID: <input type="text" name="name" onChange={handleItemIdChange}/>
                    </label>
                    <div className="form-group">
                        <label htmlFor="itemCategory">Item Category : </label>
                        <input type="text" name="name" onChange={handleItemCategoryChange}/>
                    </div>

                    <label>
                        Item Description: <input type="text" name="name" onChange={handleItemDescriptionChange}/>
                    </label>

                    <label>
                        Item Value: <input type="text" name="name" onChange={handleItemValueChange}/>
                    </label>

                    <label>
                        Issue Status:
                        <select name="itemStatus" onChange={handleItemStatusChange}>
                            <option value="">Select</option>
                            <option value="Y">Y</option>
                            <option value="N">N</option>
                        </select>
                    </label>

                    <div className="form-group">
                        <label htmlFor="itemMake">Item Make : </label>
                        <input type="text" name="name" onChange={handleItemMakeChange}/>
                       
                    </div>

                    <button type="submit" className="btn btn-submit">
                        Add Item
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;
