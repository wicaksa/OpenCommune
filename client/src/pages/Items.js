import React from "react";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Banner from '../components/Banner';
import AddItem from "../components/AddItem";
import Navbar from "../components/Navbar";
import LogoutButton from "../components/LogoutButton";

const Items = () => {
    const[userid, setuserid] = useState(null);
    
    useEffect( () => {
        const loggedInUser = localStorage.getItem("userid");
        if (loggedInUser) {
            setuserid(loggedInUser);
        }
    }, []);

    if (!userid) {
        <Navigate replace to = "/login" />;
    } else {
        console.log("success");
        return (
            <div>
                <div>
                    <LogoutButton/>
                    <Banner/>
                    <Navbar/>
                    <AddItem/>
                </div>
            </div>
        );
    }
};

export default Items;