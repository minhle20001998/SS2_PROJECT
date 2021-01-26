import React, { Component } from 'react'
import Register from './components/Authentication/register/Register';
import Login from './components/Authentication/Login/Login';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </div>
      </Router>
    );
  }
}

export default App;
