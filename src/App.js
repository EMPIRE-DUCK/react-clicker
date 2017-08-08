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
  constructor(){
    super();
    this.state={
      value: "",
      username: ""
    }
  this.handleChange = this.handleChange.bind(this);    
  this.handleSubmit = this.handleSubmit.bind(this);    
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
    this.setState({username: this.state.value })
    event.preventDefault();
  }  

  render() {
    return (
      <Router>         
        <div className="App">
          <Nav name={"React Clicker"}/>
          <div className="ui container">
            <form onSubmit={this.handleSubmit}>
              <label>
                Your name:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
              </label>
              <input type="submit" onSubmit={this.handleSubmit} />
            </form>
          </div>   
            <Switch>

              <Route exact path="/" render={(props) => ( <Clicker user={this.state.username}/> )}/>
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
