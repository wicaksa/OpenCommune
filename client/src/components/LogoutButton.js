import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import '../styles/styles.css';

export default function LogoutButton() {

  
  const nav = useNavigate();

  const clearLocalStorage = () =>{
    localStorage.setItem("userid", JSON.stringify(null))
    nav("/login");
  }

  return (
    <>
    <nav>
      <ul>
          <button onClick={clearLocalStorage }> Logout </button>
      </ul>
    </nav>
    </>
  )
}
