import React from 'react'
import './Letters.scss'

export default class Letters extends React.Component {
    constructor() {
        super()
        window.onload = () => {
            const element = document.getElementById('letters-block')
            const debug = (e) => { console.log(e.target.innerText) }
            const addSelector = (event) => {
                const childs = element.children
                const text = event.target.innerText
                if (text.length === 1) console.log(text)
                for (let i = 0, child; child = childs[i]; i++) {
                    child.addEventListener('mouseover', debug)
                }
            }
            const removeSelector = () => {
                const childs = element.children
                for (let i = 0, child; child = childs[i]; i++) {
                    child.removeEventListener('mouseover', debug)
                }
            }
            element.addEventListener('mousedown', addSelector)
            element.addEventListener('mouseup', removeSelector)
        }
    }
    render() {
        const letters = this.props.letters.map((el, index) => {
            return <span
                className={`letters__item letters--index_${index}`}>
                {el}
            </span>
        })
        return <div className="letters-block">
            <div className="letters-input">BLABLA</div>
            <div className="letters" id="letters-block">
                {letters}
            </div >
        </div>
    }
}