import React from 'react'
import './GamePassedScreen.scss'
import { Fireworks } from 'fireworks/lib/react'

const GamePassedScreen = ({ onRestartGame }) => {
    let fxProps = {
        count: 3,
        interval: 1000,
        colors: ['#B80C09', '#040F16', '#FBFBFF'],
        calc: (props, i) => ({
            ...props,
            x: window.innerWidth / 2,
            y: 200 + Math.random() * 350 - 50 + (i === 2 ? -80 : 0)
        })
    }
    const restartGame = () => {
        setTimeout(onRestartGame, 500)
    }
    return <>
        <Fireworks {...fxProps} />
        <div className="final-screen">
            <p>You have PASSED MY GAME</p>
            <button
                className="final-screen__button"
                onClick={restartGame}> Replay? :) </button>
        </div>
    </>
}
export default GamePassedScreen



