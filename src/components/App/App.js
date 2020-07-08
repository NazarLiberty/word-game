import React from 'react'
import './App.scss'
import Template from '../Template/Template'
import Letters from '../Letters/Letters'
import MiscWords from '../MiscWords/MiscWords'
import data from '../../data/data'

export default class App extends React.Component {
    constructor() {
        super()
        this.state = {
            modalActive: false,
            currentLevel: 1,
            dataBase: data,
        }
        this.toggleModal = () => {
            this.setState(({ modalActive }) => {
                const newState = !modalActive
                return { modalActive: newState }
            })
        }
        this.setCompletedLevel = (completedLevelObj) => {
            this.setState(({ dataBase }) => {
                completedLevelObj.completed = true;
                const newData = dataBase.map((el) => {
                    if (this.state.currentLevel === el.level)
                        return el = completedLevelObj
                    else return el
                })
                return { dataBase: newData }
            })
        }
        this.nextLevelChecker = () => {
            const { dataBase, currentLevel } = this.state
            const currentLevelData = this.levelChecker(dataBase, currentLevel)
            const { words } = currentLevelData[0]
            const wordsLeft = words.filter((element) => element.guessed === false)
            const levelCompleted = wordsLeft.length === 0 ? true : false
            const levelIsLoading = currentLevelData[0].completed
            // next lvl trigger
            if (!levelIsLoading && levelCompleted) setTimeout(this.nextLevel, 1900)
            if (levelCompleted) this.setCompletedLevel(currentLevelData[0])
        }
        this.wordChecker = (enterWord) => {
            const { dataBase, currentLevel } = this.state
            const word = enterWord.map((el) => el.letter).join("")
            const newData = dataBase.map((element) => {
                if (currentLevel === element.level) {
                    element.words.map((elWord) => {
                        const rightWord = elWord.word.toUpperCase()
                        if (rightWord === word) elWord.guessed = true
                    })
                    element.miscWords.map((elWord) => {
                        const miscWord = elWord.word.toUpperCase()
                        if (miscWord === word) elWord.guessed = true
                    })
                }
                return element
            })
            this.setState({ dataBase: newData })
        }
        this.levelChecker = (dataBase, currentLevel) => {
            return dataBase.filter(el => {
                const { level } = el
                if (level === currentLevel) return el
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
        const { dataBase, currentLevel, modalActive } = this.state
        const levelData = this.levelChecker(dataBase, currentLevel)
        const { letters } = levelData[0]
        const { completed } = levelData[0]
        const { miscWords } = levelData[0]
        const { ...WordsTemplate } = levelData[0]

        return <div className="wrapper">

            <Template
                data={WordsTemplate} />

            <Letters
                miscWords={miscWords}
                onToggleModal={this.toggleModal}
                completed={completed}
                letters={letters}
                wordChecker={this.wordChecker}
                nextLevelChecker={this.nextLevelChecker} />

            <MiscWords
                miscWords={miscWords}
                onToggleModal={this.toggleModal}
                isModalActive={modalActive} />
        </div>
    }
}