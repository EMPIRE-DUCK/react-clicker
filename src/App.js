import React, { Component } from 'react';
import './semantic.min.css';
import './App.css';
import Nav from './components/Nav'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav name={"React Clicker"}/>
        <h1>Lmao</h1>
      </div>
    );
  }
}

export default App;
