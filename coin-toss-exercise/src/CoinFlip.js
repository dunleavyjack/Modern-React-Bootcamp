import React, { Component } from 'react'
import Coin from './Coin'

class CoinFlip extends Component{
    render(){
        return (
            <Coin flipStatus={"tails"}/>
        )
    }
}


export default CoinFlip