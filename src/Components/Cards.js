import React from "react";
import './Cards.css';

const Card = ({url, experience, description}) => {
    return (
        <div className="card-container">
            <img src={url} alt="adventure1" className="adventure-image" />
            <div className="exp-des">
                <span className="experience">{experience}</span>
                <div className="description">
                    <span >{description}</span>
                </div>
            </div>
        </div>
    )
}
export default Card;