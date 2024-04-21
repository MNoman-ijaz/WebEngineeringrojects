/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import "../CSS/Singup.css"
import axios from "axios"
import { useNavigate } from 'react-router-dom';
const Signup = () => {
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [username , setUsername] = useState('');
     const navigate = useNavigate();
    const handlesubmit=()=>{
       axios.post("http://localhost:3045/auth/signup" , {email , password , username})
       navigate("/login")
    }
    return (
    <div className="login-page">
    <div className="login-container">
        <h2>Signup Page</h2><br/>
        <div className="form-group">
            <label htmlFor='email'>Email:</label>
            <input type = "email" placeholder = "Enter Email"
            onChange={(e)=>setEmail(e.target.value)}
            />
        </div>
        <div className="form-group">
            <label htmlFor='username'>Username:</label>
            <input type = "text" placeholder = "Enter Username"
            onChange={(e)=>setUsername(e.target.value)}
            />
        </div>
        <div className="form-group">
            <label htmlFor='password'>Password:</label>
            <input type = "password" placeholder = "Enter Password"
            onChange={(e)=>setPassword(e.target.value)}
           />
        </div>
        <button className = "btn-login" onClick={handlesubmit} >Sign Up</button>
        <p></p>
    </div>
    </div>
  )
}

export default Signup