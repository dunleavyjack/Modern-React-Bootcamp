import React, { Component } from 'react'
import Box from './Box'
import { randomlyChoose } from './helpers'

class BoxListener extends Component {
    static defaultProps = {
        colors: ['red', 'blue', 'green', 'teal', 'indigo', 'orange', 'black', 'yellow', 'purple', 'gray']
    }
    constructor(props) {
        super(props)
        this.state = { color: this.randomColor(this.props.colors) }
        this.handleClick = this.handleClick.bind(this)
    }

    setRandomColor(){
        let currentColorIdx = this.props.colors.indexOf(this.state.color) 
        let newColorsArr = [...this.props.colors].splice(currentColorIdx, 1)
        this.setState({ color: this.randomColor(newColorsArr)})
    }

    randomColor(arr) {        
        let newColor = randomlyChoose(this.props.colors)
        return newColor
    }

    handleClick(e) {
        this.setRandomColor();
    }

    render() {
        return (
            <div className="BoxListener" onClick={this.handleClick}>
                <Box color={this.state.color} />
            </div>
        )
    }
}

export default BoxListener