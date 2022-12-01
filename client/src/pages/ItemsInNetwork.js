import React from 'react'
import { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Banner from '../components/Banner';
import ItemsTable from '../components/ItemsTable';
import Navbar from '../components/Navbar';
import LogoutButton from '../components/LogoutButton';

const ItemsInNetwork = () => {
    const[userid, setuserid] = useState(null);
    const { networkid } = useParams();

    useEffect( () => {
        const loggedInUser = localStorage.getItem("userid");
        if (loggedInUser) {
            setuserid(loggedInUser);
        }
    }, []);

    if (!userid) {
        <Navigate replace to = "/login" />;
    } else {
        console.log("success")
        return (
            <div>
                <div>
                    <Banner/>
                    <Navbar/>
                    <ItemsTable networkid={networkid} />
                </div>
            </div>
        );
    }
};

export default ItemsInNetwork;