import React from 'react'
import Image from '../../styles/img/me_temp.png'

const About = () => {
    return (
        <div className='about'>
            <div className='abt-cont'>
                <h1 className='name'>Daniel Hayes</h1>
                <img src="https://ghchart.rshah.org/76EE00/danhayes3008" alt="2016rshah's Blue Github Chart" />
            </div>
            <div className='abt-img'>
                <img src={Image} />
                <div  className='image'>
                </div>
            </div>
        </div>
    )
}

export default About
