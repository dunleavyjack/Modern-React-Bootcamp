import React, { Component } from 'react'
import Coin from "./Coin"
import {chooseRandom} from "./helperFunction"

class CoinFlipper extends Component {
    static defaultProps = {
        coins: [
            { side: "heads", imgSrc: "./images/heads.jpg" },
            { side: "tails", imgSrc: "./images/tails.jpg" }
        ]
    }
    constructor(props) {
        super(props)
        this.state = {
            currentFlip: null,
            headsCount: 0,
            tailsCount: 0,
            totalCount: 0
        }
        this.handleClick = this.handClick.bind(this)
    }

    flip() {
        let newCoin = chooseRandom(this.props.coins);
        this.setState(st => {
            return {
                currentFlip: newCoin.imgSrc,
                headsCount: st.headsCount + (newCoin.side === "heads" ? 1 : 0), 
                tailsCount: st.tailsCount + (newCoin.side === "tails" ? 1 : 0), 
                totalCount: st.totalCount + 1,
            }
        }

        )
    }

    handClick() {
        this.flip()
    }

    render() {
        return (
            <div className="CoinFlip">
                <h1>Let's flip a coin</h1>
                <div className="CoinFlipper-container">
                    <Coin currentFlip={this.state.currentFlip} />
                </div>
                <button onClick={this.handleClick}>Flip Me!</button>
                <p>You have flippes {this.state.totalCount} times. {this.state.headsCount} have been heads and {this.state.tailsCount} have been tails.</p>
            </div>
        )
    }
}


export default CoinFlipper