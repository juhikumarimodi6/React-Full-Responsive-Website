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
                    link = {"/waterfall"}
                    experience = {"Adventure"}
                    description = {"Explore the hidden waterfall deep inside the Amazon Jungle"}
                />
                <Card 
                    url = {SaharaDessert}
                    link = {"./saharadesert"}
                    experience = {"Adventure"}
                    description = {"Ride through the Sahara Dessert on a guided camel tour"}
                />
                <Card 
                    url = {Football}
                    link = {"./football"}
                    experience = {"Adventure"}
                    description = {"Experience Football on Top of the Himalayan Mountains"}
                />
                <Card 
                    url = {AtlanticOcean}
                    link = {"./atlanticocean"}
                    experience = {"Mystery"}
                    description = {"Set Sail in the Atlantic Ocean visiting Uncharted Waters"}
                />
                <Card 
                    url = {Bali}
                    link = {"./bali"}
                    experience = {"Luxury"}
                    description = {"Travel through the Island of Bali in a Private Cruise"}
                />
            </div>
        </div>

    )
}

export default Main;