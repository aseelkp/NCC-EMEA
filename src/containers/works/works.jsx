import React from 'react'
import { AchievementApp } from '../../components'
import './works.css'

function Achievements() {
    return (
        <div className='works section-margin' id='achievements'>
        <h1 className='gradient-text'>Achievements</h1>
        <h3>Check Out Some of our Achievements.</h3>
            <div className='achievement-container'>
                < AchievementApp />
            </div>
        </div>
    )
}

export default Achievements;





