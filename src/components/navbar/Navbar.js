import React from 'react';

const Navbar = () => {
  return (
      <nav>
          <div className='Name'>
              <a href="#">Daniel Hayes</a>
          </div>

      <div className='navbar'>
        <ul>
          <li><a>About</a></li>
          <li><a>Skills</a></li>
          <li><a>Portfolio</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
