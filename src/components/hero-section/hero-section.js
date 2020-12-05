import React from 'react';
import { Button } from './Button';
import './hero-section.css';
import '../App.css';

function HeroSection() {     
    return (
        <div className='hero-container'>
            <video src="/videos/video-2.mp4" autoPlay loop muted/>
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button 
                className='btns' 
                buttonStyle='btn_outline'
                buttonSize='btn_large'
                >
                    GET STARTED
                </Button>
                <Button 
                className='btns' 
                buttonStyle='btn_primary'
                buttonSize='btn_large'
                >
                 WATCH TRAILER <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    )
}

export default HeroSection;
