import React from 'react';

const Navbar = () => {
  return (
      <nav>
          <div className='title'>
              <a href="#">Daniel Hayes</a>
          </div>

      <div className='navbar'>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Skills</a></li>
          <li><a href="#">Portfolio</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
