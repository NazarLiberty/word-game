import React from 'react'
import './App.scss'
import Template from '../Template/Template'
import Letters from '../Letters/Letters'

export default class App extends React.Component {
    constructor() {
        super()
        this.state = {
            currentLevel: 1,
            dataBase: [
                {
                    level: 1,
                    templateNumber: 1,
                    words: [
                        { word: 'Тарас', guessed: false, },
                        { word: 'Траса', guessed: false },
                        { word: 'Тара', guessed: false },
                        { word: 'Сара', guessed: false },
                        { word: 'Раса', guessed: false },
                        { word: 'Раста', guessed: false }
                    ],
                    letters: [
                        { letter: 'А', id: 1 },
                        { letter: 'Р', id: 2 },
                        { letter: 'С', id: 3 },
                        { letter: 'А', id: 4 },
                        { letter: 'Т', id: 5 },
                    ]
                },
                {
                    level: 2,
                    templateNumber: 1,
                    words: [
                        { word: 'крона', guessed: true, },
                        { word: 'коран', guessed: true },
                        { word: 'кора', guessed: true },
                        { word: 'нора', guessed: true },
                        { word: 'кран', guessed: false },
                        { word: 'ранок', guessed: true }
                    ],
                    letters: [
                        { letter: 'К', id: 1 },
                        { letter: 'Р', id: 2 },
                        { letter: 'О', id: 3 },
                        { letter: 'А', id: 4 },
                        { letter: 'Н', id: 5 },
                    ]
                },
            ],

        }
        this.nextLevelChecker = () => {
            const { dataBase, currentLevel } = this.state
            const currentLevelData = this.levelChecker(dataBase, currentLevel)
            const { words } = currentLevelData[0]
            const wordsLeft = words.filter((element) => element.guessed === false)
            const levelCompleted = wordsLeft.length === 0 ? true : false
            if (levelCompleted) setTimeout(this.nextLevel, 1500)
        }
        this.wordChecker = (enterWord) => {
            const { dataBase, currentLevel } = this.state
            const word = enterWord.map((el) => el.letter).join("")
            const newData = dataBase.map((element) => {
                if (currentLevel === element.level)
                    element.words.map((elWord) => {
                        const rightWord = elWord.word.toUpperCase()
                        if (rightWord === word) elWord.guessed = true
                    })
                return element
            })
            this.setState({ dataBase: newData })
        }
        this.levelChecker = (dataBase, currentLevel) => {
            return dataBase.filter(el => {
                const { level, templateNumber, words, letters } = el
                if (level === currentLevel) return { templateNumber, words, letters }
            })
        }
        this.nextLevel = () => {
            this.setState(({ currentLevel }) => {
                let _level = currentLevel
                let nextLevel = _level + 1
                return { currentLevel: nextLevel }
            })
        }

    }
    render() {
        const { dataBase, currentLevel } = this.state
        const levelData = this.levelChecker(dataBase, currentLevel)
        const { letters } = levelData[0]
        const { ...WordsTemplate } = levelData[0]
        return <div className="wrapper">

            <Template
                data={WordsTemplate} />

            <Letters
                letters={letters}
                wordChecker={this.wordChecker}
                nextLevelChecker={this.nextLevelChecker} />

        </div>
    }
}