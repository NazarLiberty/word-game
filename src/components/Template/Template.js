import React from 'react'
import './Template.scss'

let keys = 0;
let zIndex = 0;
export default class Template extends React.Component {
    constructor(props) {
        super(props)
        this.renderTemplateById = (type, wordsArr) => {
            // template #1
            return wordsArr.map((word, index) => {
                return <Word
                    word={word.word}
                    key={word.word}
                    templateNumber={type}
                    wordIndex={index}
                    guessed={word.guessed}
                />
            })
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

const Word = ({ word, templateNumber, wordIndex, guessed }) => {
    const arr = [...word]
    let wordClass = "template__word"
    if (guessed) wordClass += " template__word--visible"
    let stretch = false

    function templateChange(templateNum) {
        // template #1
        if (templateNum === 1) {
            switch (wordIndex) {
                case 2: stretch = true; break;
                case 4: stretch = true; break;
                case 5: stretch = true; break;
                case 3: stretch = true; break;
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
        }
    }
    // zet index
    const style = {
        zIndex: zIndex,
    }
    templateChange(templateNumber)
    const res = arr.map((e) => {
        return <div className="template__letter" key={keys++}>{e.toUpperCase()}</div>
    })
    return <div className={wordClass} style={style} >
        {res}
    </div>
}