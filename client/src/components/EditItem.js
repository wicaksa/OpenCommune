import Axios from '../axios.js';
import React, { useState, setState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Banner from './Banner.js';
import Navbar from './Navbar.js';

export default function EditItem() {
    const [itemname, setItemName] = useState('');
    const [category, setCategory] = useState('');
    const [information, setInformation] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');
    const [image, setImage] = useState('');
    const [userlisted, setUserListed] = useState('');

    return (
        <>
        <div>
            <Banner />
            <Navbar />
        </div>
        <div className='container'>
            <table className='table table-striped'>
                <tbody>
                    <th>Edit Item</th>
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
                        <button>Submit</button>
                    </tr>
                </tbody>
            </table>
        </div>
        </>
    )
}