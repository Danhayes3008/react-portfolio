import React from 'react'
import Image from '../../styles/img/coffee_mug.png'

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact-content">
                <h1>Get in Touch</h1>
            </div>
            <div className="contact-img">
            <img src={Image} alt='' />
            </div>
        </div>
    )
}

export default Contact
