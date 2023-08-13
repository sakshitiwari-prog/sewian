import React from 'react'
import '../style/benefit.css'
import {benefitdata} from './Benefitdata'
function Benefit() {
    return (
    <div className='benefit-container'>
        <p className="benefit-ques">What we provide ?</p>
        <div className="benefit-list">
                {
                    benefitdata.map((data)=>{
                        const {id,img,title,info}=data
                        return(
                            <div className='benefit' key={id}>
                                <img src={img} alt="" className='benefit-img'/>
                                <p className="benefit-heading">{title}</p>
                                <p className="benefit-info">{info}</p>
                            </div>
                            
                        )
                    })
                }
        </div>
    </div>
    )
}

export default Benefit
