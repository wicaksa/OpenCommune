import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import '../App.css';

const Login = () => {
    const [usernameReg, setUsernameReg] = useState('')
    const [passwordReg, setPasswordReg] = useState('')
    const nav = useNavigate();

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
                nav("/");

            } else {
                toast.success(response.data, {
                    position: toast.POSITION.TOP_RIGHT
                });

                localStorage.setItem("userid", JSON.stringify(response.data))
                console.log("Login successful!");
                nav("/mynetworks");
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
        <Banner />
        <Navbar />
        <div class="wrap">
                <input type="text" id="username" placeholder="Username" onChange={(e)=>{ setUsernameReg(e.target.value);}}></input>
                <input type="password" id="password" placeholder="Password" onChange={(e)=>{ setPasswordReg(e.target.value);}}></input>
                <input type="submit" class="submit" id="login" value="Login" onClick={login}></input>
        </div>
    </div>
    );
};

export default Login;