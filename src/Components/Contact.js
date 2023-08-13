import React from 'react'
import arrow from '../Images/arrow.png'
import { Link } from 'react-router-dom';
import facebook from '../Images/facebook.png'
import linkedin from '../Images/linkedin.png'
import insta from '../Images/insta.png'
import twitter from '../Images/twitter.png'
import '../style/contact.css'
function Contact() {
  
  return (
    <div className='contact-container'>
      <div className="contactMainBox">
        <div className="contactTitlebar">
          <p className="contact-title">Contact Us</p>
        </div>
        <form action="#" method='get'>
            <div className="formRow">
              <div className="infobox">
                <label htmlFor='fname'>First Name</label>
                <input type="text" name="fname" id="fname" />
              </div>
              <div className="infobox">
                <label htmlFor='lname'>Last Name</label>
                <input type="text" name="lname" id="lname" />
              </div>
            </div>
            <div className="formRow">
            <div className="infobox">
                <label htmlFor='Mail'>Mail</label>
                <input type="email" name="Mail" id="Mail" />
              </div>
              <div className="infobox">
                <label htmlFor='Phone'>Phone </label>
                <input type="text" name="Phone" id="Phone" />
              </div>
            </div>
            <div className="msgRow">
              <label htmlFor="msg">Message</label>
              <textarea name="msg" id="msg" rows="4" />
            </div>
            <div className="msgbtnRow">
              <button className='SendMsgBtn'><Link to="/About" className="SendMsgLink">Send Message</Link></button>
            </div>
        </form>
      </div>
      <div className="site-links">
      <Link to="#" className="facebook"><img src={facebook} alt="fb" /></Link>
      <Link to="#" className="twitter identical"><img src={twitter} alt="twitter" /></Link>
      <Link to="#" className="insta identical"><img src={insta} alt="insta" /></Link>
      <Link to="#" className="linkedin identical"><img src={linkedin} alt="linkedin" /></Link>
      </div>
      <a href='#' className="BackToTop"><img src={arrow} alt="backtotop" /></a>
    </div>
  )
}

export default Contact
