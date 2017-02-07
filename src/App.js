import React, { Component } from 'react';
import AdvTimer from './AdvTimer';
import Welcome from './Welcome';
import logo from './logo.svg';
import './App.css';
class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React!</h2>
                </div>
                <p className="App-intro">
                    <AdvTimer/>
                </p>
                <div className="container">
                    <Welcome name="Rachel Rodriguez" img="img1" avatar="avatar1"/>
                    <Welcome name="Mark Miller" img="img2" avatar="avatar2"/>
                    <Welcome name="Anita Jones" img="img3" avatar="avatar3"/>
                </div>
            </div>
        );
    }

}

export default App;