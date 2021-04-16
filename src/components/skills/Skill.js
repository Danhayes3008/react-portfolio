import React from 'react'

const Skill = ({skills}) => {
    return (
        <div className="subjects">
          <div>
                <span className="skill-name">{ skills.text}</span>
          </div>
          <div className="progressbar">
                <div style={skills}>
                    <span className="progress" >{ skills.persentage + '%'}</span>
            </div>
          </div>
        </div>
    )
}

export default Skill
