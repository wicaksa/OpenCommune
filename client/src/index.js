import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import MyNetworks from './pages/MyNetworks';
import ItemsInNetwork from './pages/ItemsInNetwork';
import AddItem from './components/AddItem';
import ViewItem from './components/ViewItem';
import FrontPage from './pages/FrontPage';
import ViewFromList from './components/ViewFromList';
import EditItem from './components/EditItem';
const axios = require('axios');

const root = ReactDOM.createRoot(document.getElementById('root'));

const saved = localStorage.getItem("userid");

if (!saved){
  localStorage.setItem("userid", JSON.stringify(null))
}else{
  localStorage.setItem("userid", saved)
}

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<App />}>
          <Route index element={<FrontPage />} />
          <Route path="viewitem" element={<ViewItem />} />
        </Route>
        <Route path="/login" element={<Login />}  />
        <Route path="/signup" element={<SignUp />}  />
        <Route path="/mynetworks" element={<MyNetworks />} />
        <Route path="/itemsinnetwork/:networkid" element={<ItemsInNetwork />} />
        <Route path="/addItem" element={<AddItem />} />
        <Route path="/viewitem" element={<ViewItem />} />
        <Route path="/viewfromlist" element={<ViewFromList />} />
        <Route path="/edit" element={<EditItem />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
