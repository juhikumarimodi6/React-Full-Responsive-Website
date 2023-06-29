import React from "react"
import Card from "./Cards";
import AmazonWaterfall from "./Video/img-9.jpg"
import SaharaDessert from "./Video/img-8.jpg"
import Football from "./Video/img-4.jpg"
import AtlanticOcean from "./Video/img-3.jpg"
import Bali from "./Video/img-2.jpg"
import './Main.css'

const Main = () => {
    return (
        <div className="main-container">
            <h2 className="main-heading">Check out this EPIC Destinations</h2>
            <div className="cards">
                <Card 
                    url = {AmazonWaterfall}
                    experience = {"Adventure"}
                    description = {"Explore the hidden waterfall deep inside the Amazon Jungle"}
                />
                <Card 
                    url = {SaharaDessert}
                    experience = {"Adventure"}
                    description = {"Ride through the Sahara Dessert on a guided camel tour"}
                />
                <Card 
                    url = {Football}
                    experience = {"Adventure"}
                    description = {"Experience Football on Top of the Himalayan Mountains"}
                />
                <Card 
                    url = {AtlanticOcean}
                    experience = {"Mystery"}
                    description = {"Set Sail in the Atlantic Ocean visiting Uncharted Waters"}
                />
                <Card 
                    url = {Bali}
                    experience = {"Luxury"}
                    description = {"Travel through the Island of Bali in a Private Cruise"}
                />
                {/* <Card 
                    url = {"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/5b/e7/1d/willmendonca.jpg?w=500&h=-1&s=1"}
                    experience = {"Adventure"}
                    description = {"Explore the hidden waterfall deep inside the Amazon Jungle"}
                /> */}
            </div>
        </div>

    )
}

export default Main;