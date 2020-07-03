import React from 'react'
import './Letters.scss'

export default class Letters extends React.Component {
    constructor() {
        super()
        this.state = {
            input: [],
            selectedLetter: [],
            touchedLine: []
        }
        let obj = []
        this.setSelectedLetter = (id) => {
            this.setState(({ selectedLetter }) => {
                const newArr = selectedLetter.map(el => el)
                newArr.push(Number(id))
                return { selectedLetter: newArr }
            })
        }
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
        this.setLettersData = (letter, id) => {
            this.setInput(letter, id)
            this.setSelectedLetter(id)
        }
        this.setLettersDataByMouse = (event) => {
            const { innerText, id } = event.target
            this.setLettersData(innerText, id)
        }
        this.wordChecker = () => {
            console.log("CHECKING WORD WITH DATA...")
        }
        this.renderTouchLine = (x, y) => {
            this.setState(({ touchedLine }) => {
                const style = {
                    left: x - 10,
                    top: y,
                }
                const spanList = touchedLine.map(el => el)
                spanList.push(<span
                    className="test"
                    style={style}>
                </span>)
                return { touchedLine: spanList }
            })
        }
        window.onload = () => {
            const element = document.getElementById('letters-block')

            const inputRender = (event) => {
                this.setLettersDataByMouse(event)
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
                event.preventDefault()
                const childs = element.children
                let elementX = event.changedTouches[0].clientX
                let elementY = event.changedTouches[0].clientY
                this.renderTouchLine(elementX, elementY)
                obj.map(el => {
                    const { yStart, yEnd, xStart, xEnd, value, id } = el
                    if (elementY > yStart &&
                        elementY < yEnd &&
                        elementX > xStart &&
                        elementX < xEnd)
                        this.setLettersData(value, id)
                })
                for (let i = 0, child; child = childs[i]; i++) {
                    getElemCoordTouch(child)

                }
            }
            const addSelector = (event) => {
                const childs = element.children
                const text = event.target.innerText
                if (text.length === 1) this.setLettersDataByMouse(event)
                for (let i = 0, child; child = childs[i]; i++) {
                    child.addEventListener('mouseover', inputRender)
                }
            }
            const removeSelector = () => {
                this.wordChecker()
                this.setState({
                    input: [],
                    selectedLetter: [],
                    touchedLine: []
                })
                const childs = element.children
                for (let i = 0, child; child = childs[i]; i++) {
                    child.removeEventListener('mouseover', inputRender)
                }
            }
            element.addEventListener('mousedown', addSelector)
            document.addEventListener('mouseup', removeSelector)

            element.addEventListener('touchmove', touchSelector)
            element.addEventListener('touchstart', touchSelector)
            document.addEventListener('touchend', removeSelector)
        }
    }
    render() {
        const { input, selectedLetter } = this.state
        const letters = this.props.letters.map((el, index) => {
            const { letter, id } = el;
            let isSelectedLetter = false;
            selectedLetter.forEach(selectedId => {
                if (id === selectedId) isSelectedLetter = true
            });
            const letterClass = isSelectedLetter ?
                `letters__item letters__item--selected letters--index_${index}` :
                `letters__item letters--index_${index}`
            return <span
                id={id}
                key={id}
                className={letterClass}>
                {letter}
            </span>
        })
        const inputLabel = input.map(e => e.letter)
        return <div className="letters-block" id="test">
            {this.state.touchedLine}
            <div className="letters-input">{inputLabel}</div>
            <div className="letters" id="letters-block">
                {letters}
            </div >
        </div>
    }
}