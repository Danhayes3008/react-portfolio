import React from 'react'
import Image from '../../styles/img/me_temp.png'
import { SiLinkedin } from "react-icons/si";
import {FaGithub} from "react-icons/fa"

const About = () => {
    return (
        <div className='about'>
            <div className='abt-cont'>
                <h1 className='name'>Daniel Hayes</h1>
                <p className='abt-statement'>
                    As someone who is new to the industry I am looking for the right place to hone my skills and become
                    a expert in React and other JavaScript based Languages and Frameworks. I also enjoy working With Python
                    and I am willing to learn what ever is needed to help both progress my career and ability to contribute to the
                    team.
                </p>
                <div className='projects-btn'>
                <a href="https://www.linkedin.com/in/daniel-hayes-90050b189/" target="_blank" rel="noreferrer">
                        <button className='linkedin-btn'><SiLinkedin /> Linkedin</button>
                    </a>
                    <a href="https://github.com/Danhayes3008" target="_blank" rel="noreferrer">
                        <button className='github-btn'><FaGithub /> GitHub</button>
                    </a>
                </div>
                <h3 className="github">GitHub Repository Contributions</h3>
                <img className="repository" src="https://ghchart.rshah.org/76EE00/danhayes3008" alt="2016rshah's Blue Github Chart" />
            </div>
            <div className='abt-img'>
                <img src={Image} alt='' />
                <div  className='image'>
                </div>
            </div>
        </div>
    )
}

export default About
