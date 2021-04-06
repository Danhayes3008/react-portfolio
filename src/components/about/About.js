import React from 'react'
import Image from '../../styles/img/me_temp.png'

const About = () => {
    return (
        <div className='about hidden'>
            <div className='abt-cont'>
                <h1 className='name'>Daniel Hayes</h1>
                <p className='abt-statement'>
                    As someone who is new to the industry I am looking for the right place to hone my skills and become
                    a expert in React and other JavaScript based Languages and Frameworks. I also enjoy working With Python
                    and am willing to learn what ever is needed to help both progress my career and ability to contribute to the
                    team.
                </p>
                <div className='projects-btn'>
                    <button className='btn'>Checkout my Projects</button>
                </div>
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
