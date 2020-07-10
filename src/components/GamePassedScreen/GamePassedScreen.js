import React from 'react'
import './GamePassedScreen.scss'
import { Fireworks } from 'fireworks/lib/react'

const GamePassedScreen = ({ onRestartGame }) => {
    let fxProps = {
        count: 2,
        interval: 1500,
        colors: ['#ffd700', '#c04847', '#0ba0e3', '#bada55'],
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
            <p>Ти той, хто дотримався до кінця!</p>
            <button
                className="final-screen__button"
                onClick={restartGame}> Replay? :) </button>
            <p className="copy">Inspired by WOW</p>
        </div>
    </>
}
export default GamePassedScreen



