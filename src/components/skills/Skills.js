import React from "react";

const Skills = () => {
  return (
    <div>
      <div>
        <h1 className="Skills-title">Skills</h1>
      </div>
      <div className='skill'>
        <span className='skills'>HTML5</span>
        <span className='skills'>JavaScript</span>
        <span className='skills'>Python</span>
        <span className='skills'>Database</span>
      </div>
      <div className='skill-sub-list'>
          <p>HTML</p>
          <p>CSS</p>
          <p>SASS</p>
        </div>
    </div>
  );
};

export default Skills;
