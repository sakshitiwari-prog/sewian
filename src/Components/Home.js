import React, { useState } from 'react'
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import Benefit from './Benefit';
import Usecase from './Usecase';
import Advertisepage from './Advertisepage';
import Contact from './Contact';
// import res from './TestimonialData';
import Testimonial from './Testimonial';
function Home() {
  return (
    <>
      <Navbar></Navbar> 
      <LandingPage></LandingPage>
      <Benefit></Benefit>
      <Usecase></Usecase>
      <Advertisepage></Advertisepage>
      <Testimonial ></Testimonial>
      <Contact></Contact>
    </>
  )
}

export default Home
