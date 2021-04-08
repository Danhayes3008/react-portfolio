import React from 'react';

const Navbar = () => {
  return (
      <nav>
          <div className='title'>
              <p>Portfolio</p>
          </div>

      <div className='navbar'>
        <ul>
          <li><a href="about">about</a></li>
          <li><a href="skills">skills</a></li>
          <li><a href="projects">projects</a></li>
          <li><a href="contact">contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
