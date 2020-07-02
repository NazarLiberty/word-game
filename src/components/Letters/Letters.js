import React from 'react'
import './Letters.scss'

export default class Letters extends React.Component {
    constructor() {
        super()
        this.state = {
            input: [],
        }
        let obj = []
        this.setInput = (letter, id) => {
            let canRender = true;
            this.state.input.forEach(element => {
                if (element.id === id)
                    canRender = false
            });
            if (canRender) this.setState(({ input }) => {
                let lettersData = input.map(e => e)
                lettersData.push(
                    {
                        letter: letter,
                        id: id
                    }
                )
                return { input: lettersData }
            })
        }
        this.setInputByMouse = (event) => {
            const { innerText, id } = event.target
            this.setInput(innerText, id)
        }
        this.wordChecker = () => {
            console.log("CHECKING WORD WITH DATA...")
        }
        window.onload = () => {
            const element = document.getElementById('letters-block')

            const inputRender = (event) => {

                this.setInputByMouse(event)
            }
            const getElemCoordTouch = (child) => {
                if (obj.length < 5) obj.push({
                    value: child.innerText,
                    id: child.id,
                    xStart: Math.floor(child.getBoundingClientRect().x),
                    xEnd: Math.floor(child.getBoundingClientRect().x + child.getBoundingClientRect().width),
                    yStart: Math.floor(child.getBoundingClientRect().y),
                    yEnd: Math.floor(child.getBoundingClientRect().y + child.getBoundingClientRect().height)
                })
            }
            const touchSelector = (event) => {
                const childs = element.children
                let elementX = event.changedTouches[0].clientX
                let elementY = event.changedTouches[0].clientY
                obj.map(el => {
                    const { yStart, yEnd, xStart, xEnd, value, id } = el
                    if (elementY > yStart &&
                        elementY < yEnd &&
                        elementX > xStart &&
                        elementX < xEnd)
                        this.setInput(value, id)
                })
                for (let i = 0, child; child = childs[i]; i++) {
                    getElemCoordTouch(child)

                }
            }
            const addSelector = (event) => {
                const childs = element.children
                const text = event.target.innerText
                if (text.length === 1) this.setInputByMouse(event)
                for (let i = 0, child; child = childs[i]; i++) {
                    child.addEventListener('mouseover', inputRender)
                }
            }
            const removeSelector = () => {
                this.wordChecker()
                this.setState({ input: [] })
                const childs = element.children
                for (let i = 0, child; child = childs[i]; i++) {
                    child.removeEventListener('mouseover', inputRender)
                }
            }
            element.addEventListener('mousedown', addSelector)
            document.addEventListener('mouseup', removeSelector)
            element.addEventListener('touchmove', touchSelector)
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