import React from 'react'
import { useState,useEffect } from 'react'
import res from './TestimonialData'
import '../style/testimonial.css'
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
function Testimonial() { 
    const [index,setIndex]=useState(0)
    useEffect(() => {
    let lastIndex=res.length-1
    if(index<0){
        setIndex(lastIndex)
    }
    if(index>lastIndex){
        setIndex(0)
    }
    }, [index])
    useEffect(() => {
    let slider=setInterval(() => {
        setIndex(index+1)
    }, 3000);
    return () => {
        clearInterval(slider)
    }
    }, [index])
    
    return (
        <section className='section'>
            <div className="testimonial-title">
                <h2>Reviews</h2>
            </div>
            <div className="section-center">
            <button onClick={()=>{setIndex(index-1)}}><KeyboardArrowLeftIcon className='leftbtn'/>   </button>
            {            res.map((person,personIndex)=>{
                    const {id,img,name,Comment}=person
                    let position='nextSlide'
                    
                    if(personIndex===index){
                        position='activeSlide'
                    }
                    
                    if(personIndex===index-1 || (index===0 && personIndex===res.length-1)){
                        position='lastSlide'
                    }
                    return(
                        <article className={position} key={id}>
                            <img src={img} alt={id} />
                            <h2 className='name'>{name}</h2>
                            <p className='comment'>{Comment}</p>
                        </article>
                    )
                })
            }
            <button onClick={()=>{setIndex(index+1)}}><KeyboardArrowRightIcon className='rightbtn' />   </button>
            </div>

        </section>
    )
}

export default Testimonial
