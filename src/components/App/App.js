import React from 'react'
import './App.scss'
import Template from '../Template/Template'
import Letters from '../Letters/Letters'

export default class App extends React.Component {
    constructor() {
        super()
        this.state = {
            dataBase: [
                {
                    level: 1,
                    templateNumber: 1,
                    words: [
                        { word: 'Тарас', guessed: true, },
                        { word: 'Траса', guessed: true },
                        { word: 'Тара', guessed: true },
                        { word: 'Сара', guessed: true },
                        { word: 'Раса', guessed: true },
                        { word: 'Раста', guessed: true }
                    ],
                    letters: [
                        { letter: 'А', id: 1 },
                        { letter: 'Р', id: 2 },
                        { letter: 'С', id: 3 },
                        { letter: 'А', id: 4 },
                        { letter: 'Т', id: 5 },
                    ]
                }],
            currentLevel: 1,
        }

    }

    render() {
        const { dataBase, currentLevel } = this.state
        const levelData = dataBase.map(el => {
            const { level, templateNumber, words, letters } = el
            if (level === currentLevel) return { templateNumber, words, letters }
            else return null
        })
        const { letters } = levelData[0]
        const { ...WordsTemplate } = levelData[0]
        return <div className="wrapper">
            <Template data={WordsTemplate} />
            <Letters letters={letters} />
        </div>
    }
}