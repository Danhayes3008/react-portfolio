import React from 'react'

const Skill = (skills) => {
    return (
        <div className="subjects">
          <div>
                <span>{ skills.text}</span>
          </div>
          <div className="progressbar">
                <div className="progress">
                    <span className="percentage">{ skills.percentage}</span>
            </div>
          </div>
        </div>
    )
}

export default Skill
