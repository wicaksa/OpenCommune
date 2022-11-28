import Axios from '../axios.js';
import React, { useState, setState } from 'react';
import { toast } from 'react-toastify';

export default function AddItem() {
    const [itemname, setItemName] = useState('');
    const [category, setCategory] = useState('');
    const [information, setInformation] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');
    const [image, setImage] = useState('');
    const [userlisted, setUserListed] = useState('');

    const addItem = () => {
        Axios.post('listedItems/create', {
            "itemname" : itemname,
            "category" : category,
            "information" : information,
            "price" : price,
            "location" : location,
            "image" : image,
            "userlisted" : userlisted
        }).then((response) => {
            if (response.status === 200) {
                toast.success(response.data, {
                    position: toast.POSITION.TOP_CENTER
                });
            } else {
                toast.error("Unable to add item", {
                    position: toast.POSITION.TOP_CENTER
                });
            }
        })
    }

    return (
        <div className='container'>
            <table className='table table-striped'>
                <tbody>
                    <th>Add Item</th>
                    <tr>
                        <th>Item Name</th>
                        <th><input class="form-control form-control-sm" placeholder="Item Name" onChange={(e)=>{setItemName(e.target.value);}}></input></th>
                    </tr>
                    <tr>
                        <th>Category</th>
                        <th><input class="form-control form-control-sm" placeholder="Category" onChange={(e)=>{setCategory(e.target.value);}}></input></th>
                    </tr>
                    <tr>
                        <th>Information</th>
                        <th><input class="form-control form-control-sm" placeholder="Information" onChange={(e)=>{setInformation(e.target.value);}}></input></th>
                    </tr>
                    <tr>
                        <th>Price</th>
                        <th><input class="form-control form-control-sm" placeholder="Price" onChange={(e)=>{setPrice(e.target.value);}}></input></th>
                    </tr>
                    <tr>
                        <th>Location</th>
                        <th><input class="form-control form-control-sm" placeholder="Location" onChange={(e)=>{setLocation(e.target.value);}}></input></th>
                    </tr>
                    <tr>
                        <th>Owner</th>
                        <th><input class="form-control form-control-sm" placeholder="Owner" onChange={(e)=>{setUserListed(e.target.value);}}></input></th>
                    </tr>
                    <tr>
                        <button onClick={addItem}>Submit</button>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}