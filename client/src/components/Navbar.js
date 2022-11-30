import React from 'react'
import Login from '../pages/Login';
import { useNavigate } from 'react-router-dom';
import '../App.css'

export default function Navbar() {

  const nav = useNavigate();
  
  const clearLocalStorage = () =>{
    localStorage.setItem("userid", JSON.stringify(null))
    nav("/login");
  }

  return (
    <>
    <ul className="App">
        <li><a href="/">Home</a></li>
        <li><a href="news.asp">News</a></li>
        <li><a href="contact.asp">Contact</a></li>
        <li><a href="about.asp">About</a></li>
        <li><a onClick={clearLocalStorage} href="/">Logout</a></li>
    </ul>
    </>
  )
}
