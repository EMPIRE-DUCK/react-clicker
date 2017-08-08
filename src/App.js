import React, { Component } from 'react';
import logo from './logo.svg';
import './semantic.min.css';
import './App.css';
import Nav from './components/Header'

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
