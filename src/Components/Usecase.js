import React from "react";
import { usecasedata } from "./Usecasedata";
import '../style/usecase.css'
function Usecase() {
    return (
    <div className="usecase-window">
        <div className="usecase-container">
        <p className="usecase-firstpart">How to use ?</p>
        <div className="usecase-secondpart">
        {usecasedata.map((item) => {
            const { id, title, img, info } = item;
            return (
            <div className="single-item" key={id}>
                <div className="usecase-item">
                <p className="usecase-title">{title}</p>
                <div className="outer-circle">
                    <div className="inner-circle">
                    <img src={img} className="usecase-img" alt="" />
                    </div>
                </div>
                <p className="usecase-info">{info}</p>
                </div>
                <div className="usecase-item-line"></div>
            </div>
            );
        })}
        </div>
        </div>
    </div>
    );
}

export default Usecase;
