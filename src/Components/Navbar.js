
import { useState,useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../style/Navbar.css'
import {data} from './Data'

// console.log(windowWidth);
function Navbar() {
    const navref=useRef();
    const [isCancel,setIsCancel]=useState(false);
  
    
    function displayNav(){
        setIsCancel(!isCancel)
        navref.current.classList.toggle('active')
    }
    
    return (
    <header>
    <nav className='Navbar'>
        <Link to="/" className="nav-branding">Siwian</Link>
        <div className="second-part-nav">
        <div className="hambuger-icon" onClick={()=>{displayNav()}}>
            <div className={isCancel? `cancelbar1` : `bar`} id='bar1'></div>
            <div className={isCancel? `cancelbar2` : `bar`} id='bar2'></div>
            <div className={isCancel? `cancelbar3` : `bar`} id='bar3'></div>
        </div>
        <div className="nav-info" ref={navref}>
        <ul className="nav-menu"  >
        {
            data.map((data)=>{
            const {id,to,linkName}=data
                return (
            <li className="nav-item" key={id}>
                <Link to={to} className="nav-link">{linkName}</Link>
            </li>
            
        )})
        }
            <div className="RegBtnContainer">
            <Link to='/Register' className='RegisterBtn'>Register</Link>
            </div>
        
        </ul>
        
        </div>
        
        </div>
        
    </nav>
    </header>
    );
}

export default Navbar;