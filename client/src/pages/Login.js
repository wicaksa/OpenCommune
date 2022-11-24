import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Axios from 'axios';

const Login = () => {
    const [usernameReg, setUsernameReg] = useState('')
    const [passwordReg, setPasswordReg] = useState('')

    const login = () => {
        Axios.post('http://localhost:3001/user/login', {
            user:
                    {
                    "username":usernameReg,
                    "password":passwordReg
                    }
        }).then((response) => {
            if (response.data==="Invalid username or password") {
                toast.error("Invalid Password or Username.", {
                    position: toast.POSITION.BOTTOM_LEFT
                });
                console.error('Invalid Password or Username.');
                
                //Redirect to /home with user object set to context

            } else {
                toast.success(response.data, {
                    position: toast.POSITION.TOP_RIGHT
                });

                localStorage.setItem("userid", JSON.stringify(response.data))

                console.log("Login successful!");
            }
        }
        ).catch(err => {
          toast.error("Error! Login Failed", {
                position: toast.POSITION.BOTTOM_LEFT
          });
          console.error(err);
        })
        
    }

    return (
    <div>
        <h3>Login</h3>
                <label>Username</label>
                <input type="text" onChange={(e)=>{ setUsernameReg(e.target.value);}}/>
                <label>Password</label>
                <input type="text" onChange={(e)=>{ setPasswordReg(e.target.value);}}/>
                <button onClick={login}> Login </button>
                <ToastContainer autoClose={1500} /> 
    </div>
    )
}

export default Login