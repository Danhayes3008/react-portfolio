import React from "react";

const Skills = () => {
  return (
    <div className="skills ">
      <div>
        <h1 className="Skills-title">Skills</h1>
      </div>
      <div className="skill">
        <div className="subjects">
          <h3>HTML5</h3>
          <ul>
            <li>html</li>
            <li>css</li>
            <li>scss</li>
          </ul>
        </div>
        <div className="subjects">
          <h3>JavaScript</h3>
          <ul>
            <li>ES6</li>
            <li>React</li>
            <li>Node</li>
            <li>Electron</li>
        </ul>
        </div>
        <div className="subjects">
          <h3>Python</h3>
          <ul>
          <li>Flask</li>
          <li>Django</li>
        </ul>
        </div>
        <div className="subjects">
          <h3>Database</h3>
          <ul>
          <li>SQLite3</li>
          <li>MongoDB</li>
          <li>JSON</li>
        </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
