import React from 'react';

const Navbar = () => {

  const Skills = () => {
    window.scrollTo(0, 900);
  }
  const About = () => {
    window.scrollTo(0, 0);
  }
  return (
      <nav>
          <div className='title'>
              <p>Portfolio</p>
          </div>

      <div className='navbar'>
        <ul>
          <li className="nav-itm" onClick={About}>about</li>
          <li className="nav-itm" onClick={Skills}>skills</li>
          <li className="nav-itm">projects</li>
          <li className="nav-itm">contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
