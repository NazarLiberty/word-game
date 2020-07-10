import React from 'react'
import './MiscWords.scss'

export default class MiscWords extends React.Component {
    render() {
        const { onToggleModal, isModalActive, miscWords = [] } = this.props
        const modalClass = isModalActive ? "misc-words-modal animate__animated animate__zoomIn" :
            'misc-words-modal misc-words-modal--disabled'
        const miscWordsArr = miscWords.filter(el => el.guessed)
            .map(el =>
                <div
                    className="misc-words-modal__word"
                    key={el.word}>
                    {el.word}
                </div>)
        return <div className={modalClass}>
            <span className="misc-words-modal__close"
                onClick={onToggleModal}>
                X
            </span>
            <h2 className="misc-words-modal__title">Cлова, які правильні, але не підійшли до цього рівня</h2>
            {miscWordsArr}
        </div>

    }
}