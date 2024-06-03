import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { RiUserSettingsFill } from "react-icons/ri";
import './Dashboard.css';
import profile from '../src/images/profile.jpg';
import { FaCamera } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import Donut from './Donut';








const Dashboard = () => {
  const [showProfileSettings, setShowProfileSettings] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
 

  const handleClick = () => {
    setShowProfileSettings(prevState => !prevState);
  };

  const handleMenuClick = () => {
    setShowMenu(prevState => !prevState);
  };

  

  return (
    <div className='main'>
      <div>
        <GiHamburgerMenu className='menuicon' onClick={handleMenuClick} />
        <div id='set'>
          <RiUserSettingsFill className='usersetting' onClick={handleClick} />
        </div>
        <div id="profile">
          <img src={profile} alt='' />
        </div>
        <h2>Ramprasad</h2>
        <div className="line"></div>
        <div id='transname'>
          <h3>Credit</h3>
          <h3>Balance</h3>
          <h3>Debit</h3>
        </div>
      </div>
      <div id='trans'>
        <button >90,000</button>
        <button >30,000</button>
        <button >60,000</button>
      </div>

     

      {showProfileSettings && (
        <div id="profilesetting">
          <img className="profilepic" src={profile} alt='' /> 
          <FaCamera className='cam' />
          <br />
          <input className='imageopt1' type='file' name='up' placeholder='upload ' />
          <button className='imageopt'>Delete profile</button>
          <br /><br />
          <input type='text' placeholder='First Name' /> &nbsp;&nbsp; &nbsp;
          <input type='text' placeholder='Last Name' />
          <br /><br />
          <input type='email' placeholder='Email' />&nbsp;&nbsp; &nbsp;&nbsp;
          <input type='email' placeholder='Mobileno' />
          <br /><br />
          <input type='password' placeholder='Password' />&nbsp;&nbsp; &nbsp;&nbsp;
          <input type='password' placeholder='Confirm Password' />
          <br /><br />

          <div>
            <p>Gender</p>
            <label>
              <input type="radio" name="option" value="1" />
              Male
            </label>
            <label>
              <input type="radio" name="option" value="2" />
              Female
            </label>
            <br /><br />
            <input className='sub1' type='submit' value='submit' />
          </div>
        </div>
      )}

      {showMenu && (
        <div className='menuclick'>
          <h3>Category Trends</h3>
          <h3>Download report <MdDownload className='down' /></h3>
        </div>
      )}

      <Donut />
    
      
      

    </div>
  );
};

export default Dashboard;
