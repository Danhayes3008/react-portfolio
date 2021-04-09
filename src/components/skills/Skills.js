import React from "react";

const Skills = () => {
  return (
    <div className='skills '>
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
        <div>
          <p className='skill-title'>HTML</p>
          <div className="progress-bar">
            <span className='html-progress'>50%</span>
          </div>
        </div>

          <p>CSS</p>
          <p>SASS</p>
        </div>
    </div>
  );
};

export default Skills;
