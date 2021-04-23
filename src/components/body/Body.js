import React from 'react'
import About from '../about/About'
import Skills from '../skills/Skills'
import Projects from '../projects/Projects'
import Contact from '../contact/Contact'
const Body = () => {
    return (
        <div className='body'>
            <About />
            <Skills />
            <Projects />
            <Contact />
        </div>
    )
}

export default Body
