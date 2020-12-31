import React, { Component } from 'react'
import './Box.css'

class Box extends Component{
    render(){
        return(
            <div className={`Box Box-${this.props.color}`}></div>
        )
    }
}

export default Box