import React from 'react';
import './Content.css'
import bannerImg from "../../images/top-banner.png"
const Content = () => {
    return (
        <div className='top-banner'>
            <div className='half-banner'>
                <p><small className='orange'>Sale up to 70% off</small></p>
                <h1>New Collection For Fall</h1>
                <p>Discover all the new arrivals of ready-to-wear collection.</p>
                <button>SHOP NOW</button>
            </div>
            <div className='half-banner'>
                <img src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Content;