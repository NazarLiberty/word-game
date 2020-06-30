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
                    words: ['taras', 'nazar']
                }]
        }
    }

    render() {
        return <Template data={this.state.dataBase} />
    }
}