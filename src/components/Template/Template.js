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
                    stretch={word.stretch}
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
        const { data: { words }, data: { templateNumber }, data: { completed } } = this.props
        let templateClass = `template template_${templateNumber}`
        if (completed) templateClass += ' animate__animated animate__flipOutY animate__delay-1s'
        else templateClass += ' animate__animated animate__flipInY'
        const template = this.renderTemplateById(templateNumber, words)
        return <div className={templateClass}>
            {template}
        </div>
    }
}

const Word = ({ word, stretch, wordIndex, guessed, isWordGuessed }) => {
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
        else letterClass += " template__letter-inner--visible animate__animated animate__fadeInUp"
    }
    function templateChange(stretch) {
        if (stretch) wordClass += " template__word--stretch"
        switch (wordIndex) {
            case 0: stretch = wordClass += ` index_${wordIndex}`; break;
            case 1: stretch = wordClass += ` index_${wordIndex}`; break;
            case 2: stretch = wordClass += ` index_${wordIndex}`; break;
            case 3: stretch = wordClass += ` index_${wordIndex}`; break;
            case 4: stretch = wordClass += ` index_${wordIndex}`; break;
            case 5: stretch = wordClass += ` index_${wordIndex}`; break;
            case 6: stretch = wordClass += ` index_${wordIndex}`; break;
            case 7: stretch = wordClass += ` index_${wordIndex}`; break;
            case 8: stretch = wordClass += ` index_${wordIndex}`; break;
            default: break
        }
    }
    // zet index
    const style = {
        zIndex: zIndex,
    }
    templateChange(stretch)
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
