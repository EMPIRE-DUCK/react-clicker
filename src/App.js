import React, { Component } from 'react';
import './semantic.min.css';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import ClickerPage from './components/ClickerPage';
import Options from './components/Options';
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: "Clicking Master"
    }
    this.handleUsernameInput = this.handleUsernameInput.bind(this);
  }

  handleUsernameInput(username){
    this.setState({
      username: username.target.value
    });
  }

  render() {
    return (
      <Router>         
        <div className="App">
          <Nav name={"React Clicker"}/>
            <Switch>
              <Route exact path="/" render={(props) => ( <ClickerPage username={this.state.username}/> )}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/options" render={(props) => ( <Options onUsernameInput={this.handleUsernameInput} username={this.state.username}/> )}/>              
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
