import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Axios from 'axios';
import Banner from '../components/Banner';
import NavbarHomePage from '../components/NavbarHomePage'

const SignUp = () => {
    const [usernameReg, setUsernameReg] = useState('')
    const [emailReg, setEmailReg] = useState('')
    const [firstnameReg, setFirstnameReg] = useState('')
    const [lastnameReg, setLastnameReg] = useState('')
    const [passwordReg, setPasswordReg] = useState('')

    const register = () => {
        Axios.post('http://localhost:3001/user/create', {
            user:
                    {
                    "username":usernameReg,
                    "email":emailReg,
                    "firstname":firstnameReg,
                    "lastname":lastnameReg,
                    "password":passwordReg
                    }
        }).then((response) => {
            if (response.data==="User created successfully.") {
                toast.success("User created successfully.", {
                    position: toast.POSITION.TOP_RIGHT
                });
                console.log("User created successfully.");
            } else if(response.data==="Username already exist.") {
                toast.error("Username already exist.", {
                    position: toast.POSITION.BOTTOM_LEFT
                });
                console.error('Username already exist.');
            } else {
                toast.error("Email already exist.", {
                    position: toast.POSITION.BOTTOM_LEFT
                });
                console.error('Email already exist.');
            }
        }
        ).catch(err => {
          toast.error("Error! Sign Up Failed.", {
                position: toast.POSITION.BOTTOM_LEFT
          });
          console.error(err);
        })
    }

    return (
        <div className="App">
            <Banner />
            <NavbarHomePage />  
            <div class="wrap">
                <h3 style={{'textAlign':'center'}}>Registration</h3>
                <input type="text" id="username" placeholder="ex:JSmith1876" onChange={(e)=>{ setUsernameReg(e.target.value);}}></input>
                <input type="text" id="email" placeholder="johnsmith@yahoo.com" onChange={(e)=>{ setEmailReg(e.target.value);}}></input>
                <input type="text" id="first_name" placeholder="John" onChange={(e)=>{ setFirstnameReg(e.target.value);}}></input>
                <input type="text" id="last_name" placeholder="Smith" onChange={(e)=>{ setLastnameReg(e.target.value);}}></input>
                <input type="text" id="password" placeholder="diDhnz87!" onChange={(e)=>{ setPasswordReg(e.target.value);}}></input>
                <input type="submit" class="submit" id="register" value="Register" onClick={register}></input>
                <ToastContainer autoClose={1500} /> 
            </div>
        </div>
    )
}

export default SignUp