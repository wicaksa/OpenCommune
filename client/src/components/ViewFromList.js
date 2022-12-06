import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Banner from './Banner';
import Navbar from './Navbar';

export default function ViewFromList(props) {
    const location = useLocation();
    const item = location.state;
    console.log(item);
    console.log("category: " + item.state.category);

    const message = () => {
        window.alert("Owner will contact you shortly");
        window.location.replace('/mynetworks');
    }

    return (
        <>
            <div>
                <Banner />
                <Navbar />
            </div>
            <div className='viewfromlisttable'>
                <table className='table'>
                    <tr>
                        <b> Name:  </b>
                        {item.state.itemname}
                    </tr>
                    <tr>
                        <b> Category: </b>
                        {item.state.category}
                    </tr>
                    <tr>
                        <b> Information: </b>
                        {item.state.information}
                    </tr>
                    <tr>
                        <b> Price: </b>
                        {item.state.price}
                    </tr>
                    <tr>
                        <b> Location: </b>
                        {item.state.location}
                    </tr>
                    <tr>
                        <button className='viewfromlistbutton' onClick={()=>{message()}}> Borrow Item </button>
                    </tr>
                </table>
            </div>
        </>
    )
}

