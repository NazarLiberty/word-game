import React from 'react'
import './Letters.scss'

export default class Letters extends React.Component {
    constructor() {
        super()
        this.state = {
            input: [],
        }
        this.setInput = (event) => {
            let canRender = true;
            this.state.input.forEach(element => {
                if (element.id === event.target.id)
                    canRender = false
            });
            if (canRender) this.setState(({ input }) => {
                let lettersData = input.map(e => e)
                lettersData.push(
                    {
                        letter: event.target.innerText,
                        id: event.target.id
                    }
                )
                return { input: lettersData }
            })
        }
        this.removeInput = () => {
            this.setState({ input: [] })
        }
        window.onload = () => {
            const element = document.getElementById('letters-block')
            const inputRender = (event) => {
                this.setInput(event)
            }
            const addSelector = (event) => {
                const childs = element.children
                const text = event.target.innerText
                if (text.length === 1) this.setInput(event)
                if (text.length === 1) console.log(text)
                for (let i = 0, child; child = childs[i]; i++) {
                    child.addEventListener('mouseover', inputRender)
                    child.addEventListener('touchmove', inputRender)
                }
            }
            const removeSelector = () => {
                this.removeInput()
                const childs = element.children
                for (let i = 0, child; child = childs[i]; i++) {
                    child.removeEventListener('mouseover', inputRender)
                    child.removeEventListener('touchmove', inputRender)
                }
            }
            element.addEventListener('mousedown', addSelector)
            document.addEventListener('mouseup', removeSelector)
            element.addEventListener('touchstart', addSelector)
            document.addEventListener('touchend', removeSelector)
        }
    }
    render() {
        const { input } = this.state

        const letters = this.props.letters.map((el, index) => {
            const { letter, id } = el;
            return <span
                id={id}
                key={id}
                className={`letters__item letters--index_${index}`}>
                {letter}
            </span>
        })
        const inputLabel = input.map(e => e.letter)
        return <div className="letters-block">
            <div className="letters-input">{inputLabel}</div>
            <div className="letters" id="letters-block">
                {letters}
            </div >
        </div>
    }
}