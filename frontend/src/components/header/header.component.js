import React, { Component } from "react";
import "./header.style.scss";
import Button from './button/button';
class NavBar extends React.Component {

  constructor(){
    super()
    this.state = {
      clicked: false,
    }
  }
  handleClick = () => {
    this.setState({clicked: !this.state.clicked})
  }

  //scroll
//------------------------------------------------
  render() {
      return (
          <div>
    <nav className="NavbarItems">
      <h1 className="navbar-logo">
        DEV <i className ="fab fa-react"></i>
      </h1>

      <div className="menu-icon" onClick = {this.handleClick}>
        <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>

      <ul className= {this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
        <li>
          <a className ='nav-links' href='/'>MEN</a>
        </li>
        <li>
          <a className ='nav-links' href='/'>WOMEN</a>
        </li>
        <li>
          <a className ='nav-links' href='/'>CHILDREN</a>
        </li>
        <li>
          <a className ='nav-links' href='/'>CONTACT</a>
        </li>
      </ul>
      <i class="fas fa-shopping-cart"></i>
      <Button className='button'> <a className='link' href='/register'>SIGN UP</a></Button>
      <br></br>
      <Button> <a className='link' href='/login'> LOGIN </a></Button>
    </nav>

    </div>
    )
  }
}

export default NavBar;
