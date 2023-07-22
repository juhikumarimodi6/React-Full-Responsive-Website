import React from "react";
import './Cards.scss';
import { Link } from "react-router-dom";

const Card = ({url, link, experience, description}) => {
    return (
        <div className="card-container">
            <Link to={link}>
            <img src={url} alt="adventure1" className="adventure-image"/>
            </Link>
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