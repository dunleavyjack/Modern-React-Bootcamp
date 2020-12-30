import React, { Component } from 'react'

class Coin extends Component{
    render(){
        let altText = this.props.flipStatus
        let imgSrc = `./images/${this.props.flipStatus}.jpg`
        return(
            <img src={imgSrc} alt={altText}></img>
        )
    }
}

export default Coin