import React from 'react'
import { useState,useEffect } from 'react'
import '../style/LandingPage.css'
const heropic1=new URL('../Images/heropic1.png',import.meta.url)
const heropic2=new URL('../Images/heropic2.png',import.meta.url)
const heropic3=new URL('../Images/heropic3.png',import.meta.url)

function LandingPage() {
    const [isView,setIsview]=useState(true);
    useEffect(() => {
      if(window.innerWidth<='700px'){
        setIsview(false);
      }else{
        setIsview(true);
      }
    },[window.innerWidth])
    
    return (
    <div className='landingPage'>
        <div className="info">
            {isView 
            ? <><p className="main-info">Get your tailor at your doorstep</p>
            <p className="sub-info">we are here to providing you tailoring 
                <br></br>services at your home. </p></> 
                :<><p className="main-info"><p className='main-info-part'>Get your tailor</p>  at your doorstep</p>
                <p className="sub-info">we are here to providing you tailoring 
                    <br></br>services at your home. </p></>}
            <button className='startbtn'>Get Started</button>
        </div>
        <div className='heroPageContainer'>
            <img src={heropic1} alt="" className='heropic-1'/>
            <img src={heropic2} alt=""  className='heropic-2'/>
            <img src={heropic3} alt="" className='heropic-3' />
        </div>
        <div className='heroPageContainer-Cover'></div>
    </div>
    )
}

export default LandingPage
