import React from 'react'
import './LevelPassedAlert.scss'

const LevelPassedAlert = ({ level, nextLevelData, levelsAmmount }) => {
    let nextLevelNumber;
    if (nextLevelData.length > 0)
        nextLevelNumber = `next level - ${level + 1}`
    else nextLevelNumber = "This is last level"
    return <div
        className="level-passed-alert animate__animated animate__fadeInBottomLeft">
        <p>LEVEL {level}/{levelsAmmount} completed</p>
        <p> {nextLevelNumber} </p>
    </div>
}
export default LevelPassedAlert