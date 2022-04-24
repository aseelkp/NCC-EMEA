import React from 'react'
import './work.css'

function Programs({ event}) {
    const { name, description, image,doc } = event;
    return (
        <div className='work-grid'>
            <div className='work-grid-image'>
                <img src={image} alt='image' />
            </div>
            <div className='work-grid-body'>
                <h2>{name}</h2>
                <p>{description}</p>

                <div className='work-grid-body-btn'>
                    <a href={doc} target="_blank">Details</a>
                </div>

            </div>
        </div>
    )
}

export default Programs;
