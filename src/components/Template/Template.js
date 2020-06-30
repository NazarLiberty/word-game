import React from 'react'
import './Template.scss'

let keys = 0;
export default class Template extends React.Component {

    render() {
        console.log(this.props.data)
        const { templateNumber } = this.props
        return <div className="template">
            <Word word="test" />
            <Word word="words" stretch />
        </div>
    }
}

const Word = ({ word, stretch }) => {
    const arr = [...word]
    let wordClass = "template__word"
    if (stretch) wordClass += " template__word--stretch"
    const res = arr.map((e) => {
        return <div className="template__letter" key={keys++}>{e.toUpperCase()}</div>
    })

    return <div className={wordClass}>
        {res}
    </div>
}