import React from 'react';

const Navbar = () => {
  return (
      <nav>
          <div className='title'>
              <p>Portfolio</p>
          </div>

      <div className='navbar'>
        <ul>
          <li><a href="#">about</a></li>
          <li><a href="#">skills</a></li>
          <li><a href="#">projects</a></li>
          <li><a href="#">contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
