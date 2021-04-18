import React from 'react';

const Navbar = () => {

  const Skills = () => {
    window.scrollTo(0, 900);
  }
  return (
      <nav>
          <div className='title'>
              <p>Portfolio</p>
          </div>

      <div className='navbar'>
        <ul>
          <li><a href="about">about</a></li>
          <li onClick={Skills}>skills</li>
          <li><a href="projects">projects</a></li>
          <li><a href="contact">contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
