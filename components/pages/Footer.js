import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const handleMouseOver = (event) => {
        event.target.style.transform = 'scale(1.2)';
    };

    const handleMouseOut = (event) => {
        event.target.style.transform = 'scale(1)';
    };

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-column">
                    <h3>About</h3>
                    <a href="#about">Our Company</a>
                    <a href="#team">Team</a>
                    <a href="#careers">Careers</a>
                    <a href="#contact">Contact Us</a>
                </div>
                <div className="footer-column">
                    <h3>Services</h3>
                    <a href="#tours">Tours</a>
                    <a href="#flights">Flights</a>
                    <a href="#hotels">Hotels</a>
                    <a href="#car-rental">Car Rental</a>
                </div>
                <div className="footer-column">
                    <h3>Booking</h3>
                    <a href="#my-bookings">My Bookings</a>
                    <a href="#special-offers">Special Offers</a>
                    <a href="#faqs">FAQs</a>
                    <a href="#support">Support</a>
                </div>
                <div className="footer-column">
                    <h3>Home</h3>
                    <a href="#home">Home</a>
                    <a href="#destinations">Destinations</a>
                    <a href="#reviews">Reviews</a>
                    <a href="#gallery">Gallery</a>
                </div>
            </div>
            <div className="social-icons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                    <i className="fab fa-facebook-f"></i> Facebook
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                    <i className="fab fa-twitter"></i> Twitter
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                    <i className="fab fa-instagram"></i> Instagram
                </a>
            </div>
            <div className="footer-bottom">
                &copy; {currentYear} Your Company Name. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
