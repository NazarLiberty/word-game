import React from 'react'
import './Letters.scss'

export default class Letters extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            input: [],
            selectedLetter: [],
            lettersCoord: [],
        }

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
        this.wordChecker = (element) => {
            const { wordChecker } = this.props
            wordChecker(element)
        }


    }
    componentDidMount() {

        const element = document.getElementById('letters-block')

        const inputRender = (event) => {
            this.setLettersDataByMouse(event)
        }
        const getElemCoordTouch = (child) => {
            if (this.state.lettersCoord.length < 5) this.setState(({ lettersCoord }) => {
                const newCoords = lettersCoord.map(e => e)
                newCoords.push({
                    value: child.innerText,
                    id: child.id,
                    xStart: Math.floor(child.getBoundingClientRect().x),
                    xEnd: Math.floor(child.getBoundingClientRect().x + child.getBoundingClientRect().width),
                    yStart: Math.floor(child.getBoundingClientRect().y),
                    yEnd: Math.floor(child.getBoundingClientRect().y + child.getBoundingClientRect().height)
                })
                return { lettersCoord: newCoords }
            })
            else this.setState({ lettersCoord: [] })
        }
        const touchSelector = (event) => {
            const childs = element.children
            let elementX = event.changedTouches[0].clientX
            let elementY = event.changedTouches[0].clientY
            event.preventDefault()
            this.state.lettersCoord.forEach(el => {
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
            this.wordChecker(this.state.input)
            this.props.nextLevelChecker()
            this.setState({
                input: [],
                selectedLetter: [],
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
    render() {
        const { completed, onToggleModal, miscWords, letters } = this.props
        const { input, selectedLetter } = this.state
        const miscWordsCount = miscWords.filter(el => el.guessed).length
        let lettersBlockClass = 'letters-block animate__animated'
        completed ? lettersBlockClass += " animate__rollOut animate__delay-1s"
            : lettersBlockClass += " animate__rollIn"
        const lettersElement = letters.map((el, index) => {
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
        let btnClass = `misc-words-btn animate__animated animate__rubberBand`
        if (miscWordsCount % 2 !== 0)
            btnClass = 'misc-words-btn animate__animated animate__shakeY'
        return <div className={lettersBlockClass}>
            <div className="letters-input">{inputLabel}</div>
            {miscWordsCount > 0 && <div className={btnClass} onClick={onToggleModal}>
                {miscWordsCount}
            </div>}
            <div className="letters" id="letters-block">
                {lettersElement}
            </div >
        </div>
    }
}