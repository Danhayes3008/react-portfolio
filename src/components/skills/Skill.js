import React from 'react'

const Skill = ({skills}) => {
    return (
        <div className="subjects">
          <div>
                <span>{ skills.text}</span>
          </div>
          <div className="progressbar">
                <div style={skills}>
                    <span >{ skills.persentage}</span>
            </div>
          </div>
        </div>
    )
}

export default Skill
