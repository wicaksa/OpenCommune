import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Axios from 'axios';

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
        <div>
        <h3>Sign up</h3>
                <label>Username</label>
                <input type="text" onChange={(e)=>{ setUsernameReg(e.target.value);}}/>
                <label>Email</label>
                <input type="text" onChange={(e)=>{ setEmailReg(e.target.value);}}/>
                <label>Firstname</label>
                <input type="text" onChange={(e)=>{ setFirstnameReg(e.target.value);}}/>
                <label>Lastname</label>
                <input type="text" onChange={(e)=>{ setLastnameReg(e.target.value);}}/>
                <label>Password</label>
                <input type="text" onChange={(e)=>{ setPasswordReg(e.target.value);}}/>
                <button onClick={register}> Register </button>
                <ToastContainer autoClose={1500} /> 
        </div>
    )
}

export default SignUp