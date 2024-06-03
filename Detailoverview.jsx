
import React, { useState} from 'react';

import { ImProfile } from "react-icons/im";
import { FaFileDownload } from "react-icons/fa";
import './Detailoverview.css'


const Detailoverview = () => {

  const [manageprofile, setManageprofile] = useState(false);
  
  const handlemanage = () => {
    setManageprofile(prevState => !prevState);
  };

  return (
    <div className='Mainbody'>

      
      <div>
        <ImProfile className="manageprofile"  onClick={handlemanage}/>
        <div id='downloaded'>
          <FaFileDownload className='downloadbutton' />
        </div>
        <div id='midcon'>
        <button className='headercontent'>Detailed Overview</button>
        </div>
        <div id='boxes'>
            <div className='box1'>
                <h2>Transactions In</h2>
                <div className="underline"></div>
            </div>
            <div className='box2'>
            <h2>Transactions Out</h2>
            <div className="underline"></div>

            
            </div>
            
        </div>
        {manageprofile && (
        <div id='clickmanageprofile'>
          <h2>Change Person Details</h2>
          <h2>Email Integration</h2>
          <h2>Set Alerts</h2>

        </div>
        )}
      </div>
      
    </div>
  )
}

export default Detailoverview
