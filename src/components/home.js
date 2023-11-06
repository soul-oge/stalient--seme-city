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
                Un moyen efficace d'évaluer votre startup et de vous développer en toute sécurité
                </h1>
                <p className="primary-text">
                Lorem ipsum
                </p>
            </div>
            <div className="home-image-section">
                <img src={BannerImage} alt="" />
            </div>
        </div>
    </div>
    );
};

export default Home;
