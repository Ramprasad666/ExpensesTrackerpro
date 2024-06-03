
import React, { useState } from "react";
import "./App.css";
import './Login.css';
import { Link, useNavigate } from "react-router-dom";
import email from '../src/images/email1.png';
import psw from '../src/images/psw2.jpg';

function LoginForm() {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
  
    const storedUserDetails = JSON.parse(localStorage.getItem('userDetails'));
    

    if (!storedUserDetails) {
      setErrorMessage('No user found. Please register.');
      return;
    }
  

    if (storedUserDetails.email === emailValue && storedUserDetails.password === passwordValue) {
      navigate('/dashboard'); 
    } else if (storedUserDetails.email !== emailValue && storedUserDetails.password !== passwordValue) {
      setErrorMessage('Email and password are incorrect');
    } else if (storedUserDetails.email !== emailValue) {
      setErrorMessage('Email is incorrect');
    } else {
      setErrorMessage('Password is incorrect');
    }
  };
  
  
  return (
    <form className="form-container" onSubmit={handleLogin}>
      <div className="formbody">
        <div className="header">
          <div className="text">Login</div>
          <div className="line1"></div>
        </div>

        <div className="inputs">
          <div className="input">
            <img src={email} alt="" />
            <input 
              type="email" 
              name='email' 
              placeholder='Email Id' 
              required 
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
            />
          </div>

          <div className="input">
            <img src={psw} alt="" />
            <input 
              type="password" 
              name="psw" 
              placeholder='Password' 
              required 
              value={passwordValue}
              onChange={(e) => setPasswordValue(e.target.value)}
            />
          </div>

          <div className="forgot">Forgot Password? <span>Click Here</span></div>
        </div>

        <div className="submit">
          <button className="sub3" type="submit">Login</button>
          <Link className="linkto" to='/'><button type="button" className="sub">Register</button></Link>
        </div>
        {errorMessage && <div className="errmsg">{errorMessage}</div>}
      </div>
    </form>
  );
}

export default LoginForm;
