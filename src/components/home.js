import React from 'react';
import Navbar from './navbar.js';
import BannerImage from "../assets/2.jpg";


const Home = () => {
    return (
        <div className="home-container">
        <Navbar/>
        <div className="home-banner-container">
            <div className="home-text-section">
                <h1 className="primary-heading">
                An effective way to evaluate your startup and grow safely
                </h1>
                <p className="primary-text">
                Lorem ipsum
                </p>
                {/* <button className="secondary-button">
                    Order Now <FiArrowRight />{" "}
                </button> */}
            </div>
            <div className="home-image-section">
                <img src={BannerImage} alt="" />
            </div>
        </div>
    </div>
    );
};

export default Home;
