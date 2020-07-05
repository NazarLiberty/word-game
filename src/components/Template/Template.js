import React from 'react'
import './Template.scss'

let keys = 0;

export default class Template extends React.Component {
    constructor(props) {
        super(props)
        const guessedWords = []
        this.renderTemplateById = (type, wordsArr) => {
            // template #1
            return wordsArr.map((word, index) => {
                return <Word
                    isWordGuessed={this.guessedWordsChecker}
                    word={word.word}
                    key={word.word}
                    templateNumber={type}
                    wordIndex={index}
                    guessed={word.guessed}
                />
            })
        }
        this.addGuessedWord = (word) => {
            guessedWords.push(word)
        }
        this.guessedWordsChecker = (word) => {
            if (guessedWords.includes(word)) return true
            else { this.addGuessedWord(word); return false }
        }
    }
    render() {
        const { data: { words }, data: { templateNumber } } = this.props
        const template = this.renderTemplateById(templateNumber, words)
        return <div className="template">
            {template}
        </div>
    }
}

const Word = ({ word, templateNumber, wordIndex, guessed, isWordGuessed }) => {
    const lettersArr = [...word]
    let zIndex = 0;
    let letterClass = "template__letter-inner"
    let wordClass = "template__word"
    if (guessed) {
        zIndex = 1
        if (isWordGuessed(word)) {
            letterClass += " template__letter-inner--visible"
            zIndex++
        }
        else letterClass += " template__letter-inner--visible animate__animated animate__fadeInUpBig"
    }
    let stretch = false
    function templateChange(templateNum) {
        // template #1
        if (templateNum === 1) {
            switch (wordIndex) {
                case 2: stretch = true; break;
                case 4: stretch = true; break;
                case 5: stretch = true; break;
                case 3: stretch = true; break;
                default: break
            }
            wordClass += " template_1"
        }
        // 
        if (stretch) wordClass += " template__word--stretch"
        switch (wordIndex) {
            case 0: stretch = wordClass += ` index_${wordIndex}`; break;
            case 1: stretch = wordClass += ` index_${wordIndex}`; break;
            case 2: stretch = wordClass += ` index_${wordIndex}`; break;
            case 3: stretch = wordClass += ` index_${wordIndex}`; break;
            case 4: stretch = wordClass += ` index_${wordIndex}`; break;
            case 5: stretch = wordClass += ` index_${wordIndex}`; break;
            default: break
        }
    }
    // zet index
    const style = {
        zIndex: zIndex,
    }
    templateChange(templateNumber)
    const res = lettersArr.map((e) => {
        return <div className="template__letter" key={keys++}>
            <span className={letterClass}>
                {e.toUpperCase()}
            </span>
        </div>
    })
    return <div className={wordClass} style={style} >
        {res}
    </div>
}