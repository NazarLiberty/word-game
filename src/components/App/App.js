import React from 'react'
import './App.scss'
import Template from '../Template/Template'

export default class App extends React.Component {
    constructor() {
        super()
        this.state = {
            dataBase: [
                {
                    level: 1,
                    templateNumber: 1,
                    words: [
                        { word: 'Тарас', guessed: true, },
                        { word: 'Траса', guessed: true },
                        { word: 'Тара', guessed: true },
                        { word: 'Сара', guessed: true },
                        { word: 'Раса', guessed: true },
                        { word: 'Раста', guessed: true }
                    ]
                }]
        }
    }

    render() {
        return <Template data={this.state.dataBase} />
    }
}