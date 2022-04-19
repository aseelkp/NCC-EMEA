import React from 'react'
import './hero.css'

//Assets
import hero_img from '../../assets/hero_img.png'
import hero_image from '../../assets/hero_image.png'

function Hero() {
    return (
        <>
        <div className='hero section-padding' id='home'>
            <div className='hero-content'>
                <h1 className='gradient-text'>NATIONAL CADET CORPS(NCC)</h1>
                <h2>EMEA COLLEGE</h2>
                <p>of Arts and Science,Kondotty</p>
                <a href='#achievements' className='explore-btn'>Explore our Achievements</a>
            </div>
            <div className='hero-image'>
                <img src={hero_image} alt='Hero' />
            </div>
        </div>
        <div className='hero-scroll-animation'>
              <a class="ca3-scroll-down-link ca3-scroll-down-arrow" data-ca3_iconfont="ETmodules" data-ca3_icon=""></a>
        </div>
        </>
    )
}

export default Hero
