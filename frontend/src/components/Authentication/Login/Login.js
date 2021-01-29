import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import './Login.css';
import FormInput from '../FormInput/formInput.component';
import CustomButton from '../CustomButton/customButton.component';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.setName = this.setName.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.fetchLogin = this.fetchLogin.bind(this);
  }

  setName() {
    const nameInput = document.querySelector("#name_input");
    this.setState({
      username: nameInput.value,
    });
  }

  setPassword() {
    const passwordInput = document.querySelector("#password_input");
    this.setState({
      password: passwordInput.value,
    });
  }

  async fetchLogin(e) {
    e.preventDefault();
    const { username, password } = this.state;
    const url = "http://localhost:3030/login";
    const body = {
      username: username,
      password: password,
    };
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const returnMessage = await response.json();
    console.log(returnMessage);
  }

  render() {
    return (
      <div className="login">
      
        <form id="login_form">
        {/* <img src="" alt=""></img> */}
          <label htmlFor="uname">
            <b>Username</b>
            <span className="require">*</span>
          </label>
          
          <FormInput
            id="name_input"
            type="text"
            placeholder="Enter Username"
            name="uname"
            required
            onInput={this.setName}/>
          <label htmlFor="psw">
            <b>Password</b>
            <span class="require">*</span>
          </label>
          <FormInput
            id="password_input"
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
            onInput={this.setPassword}
          />
          {/* <input type ='checkbox' />
          <label> Remember me</label> */}
          <CustomButton type="submit" onClick={this.fetchLogin}>
            Login
          </CustomButton>
          <br/>
          <Link to ='/register' class ='linkSignUp'>Sign Up</Link>
          <div className ='icon'>
          <img src="https://img.icons8.com/color/48/000000/google-logo.png"/>
          <img src="https://img.icons8.com/color/48/000000/facebook-new.png"/>
          </div>
          {/* <CustomButton >
            <link to ='/register'> Sign Up</link>
          </CustomButton> */}
        </form>
      </div>
    );
  }
}

export default withRouter(Login);



//làm thêm rememberme
