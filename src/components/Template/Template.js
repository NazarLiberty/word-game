import React from 'react'
import './Template.scss'

let keys = 0;
export default class Template extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: this.props.data,
            currentLevel: 1,
        }
        this.renderTemplateById = (type, wordsArr) => {
            // template #1
            return wordsArr.map((word, index) => {
                return <Word
                    word={word.word}
                    key={word.word}
                    templateNumber={type}
                    wordIndex={index}
                />
            })
        }
    }
    render() {
        const { currentLevel, data } = this.state
        const template = data.map(el => {
            const { level, templateNumber, words } = el
            if (level === currentLevel) return this.renderTemplateById(1, words)
            else return null
        })
        return <div className="template">
            {template}
        </div>
    }
}

const Word = ({ word, templateNumber, wordIndex }) => {
    const arr = [...word]
    let wordClass = "template__word"
    let stretch = false

    function templateChange(templateNum) {
        // template #1
        if (templateNum === 1) {
            switch (wordIndex) {
                case 2: stretch = true; break;
                case 4: stretch = true; break;
                case 5: stretch = true; break;

            }
            if (stretch) wordClass += " template__word--stretch"
            if (templateNumber === 1) wordClass += " template_1"
            switch (wordIndex) {
                case 0: stretch = wordClass += " index_0"; break;
                case 1: stretch = wordClass += " index_1"; break;
                case 2: stretch = wordClass += " index_2"; break;
                case 3: stretch = wordClass += " index_3"; break;
                case 4: stretch = wordClass += " index_4"; break;
                case 5: stretch = wordClass += " index_5"; break;
            }
        }
        else return null
    }
    templateChange(templateNumber)
    const res = arr.map((e) => {
        return <div className="template__letter" key={keys++}>{e.toUpperCase()}</div>
    })
    return <div className={wordClass}>
        {res}
    </div>
}