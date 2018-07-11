import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';

class App extends Component {
    render() {
        return (
          <div>
            <Header/>
            <div className="App" style={{ textAlign: 'center' }}>
              <h1>Kranti</h1>
              <p>Join the Revolution</p>
            </div>
          </div>
        );
    }
}

export default App;
