import React from "react";
import { HiEye } from "react-icons/hi";
import Main from "./Main";
import './Home.scss'

const Home = () => {
    return (
        <>
        <div className="home-container">
            <div className="content">
                <h1>Adventure Awaits </h1>
                <p>What are you waiting for?</p>
                <div className="start-trailer">
                    <button className="get-started">Get started</button> 
                    <button className="watch-trailer"> Watch Trailer <HiEye /> </button>
                </div>
            </div>
        </div>
        <Main />
      </>
    )
}

export default Home;