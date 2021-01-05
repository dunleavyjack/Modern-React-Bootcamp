import React, { Component } from 'react'
import Box from './Box'
import NewBoxForm from './NewBoxForm';

class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = { boxes: [{ width: 10, height: 40, color: 'orange' }] }
        this.create = this.create.bind(this)
    }
    remove(id){
        this.setState({
            boxes: this.state.boxes.filter(box => box.id !== id)
        })
    }
    
    create(newBox){
        this.setState({
            boxes: [...this.state.boxes, newBox]
        })
    }
    
    render() {
        const boxes = this.state.boxes.map(box => (
            <Box 
                key={box.id}
                id={box.id} 
                width={box.width} 
                height={box.height} 
                color={box.color} 
                removeBox={() => this.remove(box.id)}
            />
        ));
        return (
            <div>
                <h1>Color Box Maker</h1>
                <NewBoxForm createBox={this.create}/>
                {boxes}
            </div>
        )
    }
}

export default BoxList
