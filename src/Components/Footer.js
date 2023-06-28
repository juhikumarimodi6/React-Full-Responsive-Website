import React from "react";
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-heading">
                <h4>Join the Adventure newsletter to receive our best vacation details</h4>
                <h5>You can unsubscribe at any time</h5>
            </div>
            <div className="email-container">
                <input type="email" placeholder="Your Email Here..." className="email"/>
                <button type="submit" className="subscribe-btn">Subscribe</button>
            </div>
            <div className="all">
                <div className="aboutus">
                    <h4>About Us</h4>
                    <span>How it works</span>
                    <span>Testimonials</span>
                    <span>Careers</span>
                    <span>Investors</span>
                    <span>Terms of Service</span>
                </div>
                <div className="contactus">
                    <h4>Contact Us</h4>
                    <span>Contact</span>
                    <span>Support</span>
                    <span>Destinations</span>
                    <span>Sponsorships</span>
                </div>
                <div className="videos">
                    <h4>Videos</h4>
                    <span>Submit Video</span>
                    <span>Ambassadors</span>
                    <span>Agency</span>
                    <span>Influencer</span>
                </div>
                <div className="socialmedia">
                    <h4>Social Media</h4>
                    <span>Instagram</span>
                    <span>Facebook</span>
                    <span>Youtube</span>
                    <span>Twitter</span>
                </div>
            </div>

        </div>
    )
}

export default Footer;