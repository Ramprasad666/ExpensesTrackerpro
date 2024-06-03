
import React, { useState } from 'react';
import './Signup.css';

import name from '../src/images/user1.png';
import email from '../src/images/email1.png';
import psw from '../src/images/psw2.jpg';
import mob from '../src/images/mob3.png';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [nameValue, setNameValue] = useState('');
  const [mobileValue, setMobileValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [registrationMessage, setRegistrationMessage] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const navigate = useNavigate();

  const handleRegister = () => {
    if (!nameValue || !mobileValue || !emailValue || !passwordValue) {
      setErrMsg('Please fill in all fields.');
      return;
    }

    const storeddetails = {
      name: nameValue,
      mobile: mobileValue,
      email: emailValue,
      password: passwordValue
    };
    

    localStorage.setItem('userDetails', JSON.stringify(storeddetails));

    setRegistrationMessage('Registration Successful');
    setErrMsg('');
    setTimeout(() => {
      navigate('/login');
    }, 2000);
  };

  return (
    <div className='container'>
      <div className="header">
        <div className="text1">Signup</div>
        <div className="line2"></div>
      </div>

      <div className="inputs">
        <div className="input">
          <img src={name} alt="" />
          <input
            type="text"
            placeholder='Name'
            required
            value={nameValue}
            onChange={(e) => setNameValue(e.target.value)}
          />
        </div>

        <div className="input">
          <img src={mob} alt="" />
          <input
            type="number"
            placeholder='Mobileno'
            required
            value={mobileValue}
            onChange={(e) => setMobileValue(e.target.value)}
          />
        </div>

        <div className="input">
          <img src={email} alt="" />
          <input
            type="email"
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
            placeholder='Password'
            required
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
          />
        </div>
      </div>

      <div className="submit">
        <div className="sub" onClick={handleRegister}>Register</div>
        <div className="sub"><Link to='/login' className='Linkto1'>Login</Link></div>
      </div>
      {errMsg && <div className="err">{errMsg}</div>}
      {registrationMessage && <div className="reg">{registrationMessage}</div>}
    </div>
  );
}

export default Signup;




