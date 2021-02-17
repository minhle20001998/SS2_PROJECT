
import React, { Component } from "react";
import "../../header/header.style.scss";
import Button from '../../header/button/button';
class NavBar extends React.Component {

  constructor(){
    super()
    this.state = {
      clicked: false
    }
  }
  handleClick = () => {
    this.setState({clicked: !this.state.clicked})

  }
  render() {
      return (
          <div>
    <nav className="NavbarItems">
      <h1 className="navbar-logo">
        Admin <i className ="fab fa-react"></i>
      </h1>

      <div className="menu-icon" onClick = {this.handleClick}>
        <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>

      <ul className= {this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
        <li>
          <a className ='nav-links' href='/admin/users'>Manage User</a>
        </li>
        <li>
          <a className ='nav-links' href='/admin/products'>Manage Product</a>
        </li>
        <li>
          <a className ='nav-links' href='/'>Manage ...</a>
        </li>
      </ul>
      <Button className='button'> <a className='link' href='/register'>SIGN UP</a></Button>
      <br></br>
      <Button> <a className='link' href='/login'>LOGIN</a></Button>

    </nav>

    </div>
    )
  }
}

export default NavBar;
