import React from 'react'
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import AddNetwork from '../components/AddNetwork';
import Banner from '../components/Banner';
import DisplayTable from '../components/DisplayTable';
import Navbar from '../components/Navbar';

const MyNetworks = () => {
    // Protect the MyNetworks page.
    // Can only be seen if user is authenticated. 
    const[userid, setuserid] = useState(null);

    useEffect( () => {
        const loggedInUser = localStorage.getItem("userid");
        if (loggedInUser) {
            setuserid(loggedInUser);
        }
    }, []);

    if (!userid) {
        // Redirect
        <Navigate replace to = "/login" />;
    } else {
        return (
            <div>
                <div>
                    <Banner />
                    <Navbar />  
                    <DisplayTable />
                    <AddNetwork/>
                </div>
                
            </div>
        );
    }
};

export default MyNetworks;