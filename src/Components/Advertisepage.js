import React from 'react'
import '../style/Advertisepage.css'
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
const scissor=new URL('../Images/scissor.png',import.meta.url)
const pin=new URL('../Images/pin.png',import.meta.url)
function Advertisepage() {
    const [isView,setIsview]=useState(true);
    useEffect(() => {
      if(window.innerWidth<='447px'){
        setIsview(false);
      }else{
        setIsview(true);
      }
    },[window.innerWidth])
    return (
    <div className='container'>
        <img src={scissor} alt="" className='scissor'/>
        <div className="content-box">
            {isView?
            <><p className="main-heading">Get start your first<br></br> 
            door-step Tailoring Service</p>
            <p className="content">No matter where you’re .you can connect with your tailor in your area. now no need to be stressed to find the best tailor.</p></>
            :
            <><p className="main-heading">Get start your first<br></br>
            door-step  Tailoring Service</p>
            <p className="content">No matter where you’re .you can connect with your tailor in your<br></br> area. now no need to be stressed to find the best tailor.</p></>
            
            }
            
            <div className='btn-box'>
            <Link to='/Register' className="register-btn">Register Here</Link>
            </div>
             
        </div>
        <img src={pin} alt="" className='pin' />
    </div>
    )
}

export default Advertisepage
