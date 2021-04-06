import React from 'react'
import Image from '../../styles/img/me_temp.png'

const About = () => {
    return (
        <div className='about'>
            <div>
                <h1 className='name'>Daniel Hayes</h1>
            </div>
            <div>
                <img src={Image} />
                <div  className='image'>
                </div>
            </div>
        </div>
    )
}

export default About
