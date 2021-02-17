import React, { Component } from "react";
import Register from "./components/Authentication/register/Register";
import Login from "./components/Authentication/Login/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/page/homepage/homepage.component";
import Header from "./components/header/header.component";
import SlideShow from "./components/slideShowGallery/slideShowGallery.component";
//admin
import Header1 from './components/Admin/homeforAdmin/header.admin';
import GetProduct from './components/Admin/manageProduct/getproduct.admin'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

    {/* routers use for user */}
          <Route exact path="/">
            <Header />
            <SlideShow />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
{/* Routers use for admin */}
          <Route exact path='/admin'>
            <Header1/>
          </Route>
          <Route exact path='/admin/products'>
            <Header1/>
            <GetProduct/>
          </Route>
          <Route exact path='/admin/users'>
            <Header1/>
          </Route>
        </div>
      </Router>
    );
  }
}

export default App;
