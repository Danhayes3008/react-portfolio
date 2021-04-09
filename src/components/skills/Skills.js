import React from "react";

const Skills = () => {
  return (
    <div className="skills ">
      <div>
        <h1 className="Skills-title">Skills</h1>
      </div>
      <div className="skill">
        <div className="subjects">
          <div>
            <span>HTML5</span>
            <span className="html-progress">80%</span>
          </div>
          <div className="progressbar">
            <div className="html"></div>
          </div>
        </div>
        <div className="subjects">
          <div>
            <span>JavaScript</span>
            <span className="js-progress">90%</span>
          </div>
          <div className="progressbar">
            <div className="JavaScript"></div>
          </div>
        </div>
        <div className="subjects">
          <div>
            <span>Python</span>
            <span className="python-progress">45%</span>
          </div>
          <div className="progressbar">
            <div className="Python"></div>
          </div>
        </div>
        <div className="subjects">
          <div>
            <span>Database</span>
            <span className="db-progress">35%</span>
          </div>
          <div className="progressbar">
            <div className="Database"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
