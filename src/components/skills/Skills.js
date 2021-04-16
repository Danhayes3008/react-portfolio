import React from "react";
import { useState } from 'react'
 import Skill from './Skill'

const Skills = () => {
  const [skills] = useState([
    {
      id: 1,
      text: 'HTML5',
      persentage: 80
    },
    {
      id: 2,
      text: 'JavaScript',
      persentage: 75
    },
    {
      id: 3,
      text: 'Python',
      persentage: 45
    },
    {
      id: 4,
      text: 'Databases',
      persentage: 35
    },
  ])
  return (
    <>
            {skills.map((skill) => (
                <Skill key={skill.id} skills={skill} />
            ))}
        </>
    
  );
};

export default Skills;
