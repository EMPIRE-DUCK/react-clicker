import React, { Component } from 'react';
import './semantic.min.css';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Clicker from './components/Clicker';
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav name={"React Clicker"}/>
          <Switch>
            <Route exact path="/" component={Clicker}/>
            <Route exact path="/about" component={About}/>
            <Route render={function(){
                return <p>Not found</p>
            }}/>          
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
