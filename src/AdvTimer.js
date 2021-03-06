/**
 * Created by jodyl on 2/7/2017.
 */
import React, { Component } from 'react';

class AdvTimer extends Component {
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount(){
        this.timerID = setInterval(
            ()=> this.tick(),
            1000
        );
    }

    componentWillUnmount(){
        clearInterval(this.timerID)
    }
    tick(){
        this.setState({
            date: new Date()
        });
    }
    render(){
        return (
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        );
    }
}

export default AdvTimer;
