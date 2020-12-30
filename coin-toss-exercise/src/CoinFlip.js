import React, { Component } from 'react'
import Coin from './Coin'
import { choice } from "./helpers"

class CoinFlip extends Component {
    static defaultProps = {
        coins: [
            { side: "heads", imgSrc: "./images/heads.jpg" },
            { side: "tails", imgSrc: "./images/tails.jpg" }
        ]
    }
    constructor(props) {
        super(props);
        this.state = {
            currCoin: null,
            nFlips: 0,
            nHeads: 0,
            nTails: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }
    flipCoin(){
        const newCoin = choice(this.props.coins)
        this.setState(st => {
            return {
                currCoin: newCoin.imgSrc,
                nFlips: st.nFlips + 1,
                nHeads: st.nHeads + (newCoin.side === "heads" ? 1 : 0),
                nTails: st.nTails + (newCoin.side === "tails" ? 1 : 0)
            }
        })
    }

    handleClick(e) {
        this.flipCoin();
    }

    render() {
        return (
            <div className="CoinFlip"> 
                <h1>Let's flip a coin!</h1>
                <div className="CoinFlip-container">
                    <Coin flipStatus={this.state.currCoin}/>
                </div>
                <button onClick={this.handleClick}>Flip Me!</button>
                <p>Out of {this.state.nFlips} flips, there have been {this.state.nHeads} heads and {this.state.nTails} tails.</p>
            </div>
        )
    }
}


export default CoinFlip