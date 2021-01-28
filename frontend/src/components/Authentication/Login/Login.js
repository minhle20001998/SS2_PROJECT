import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import './Login.css';
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
      credentials: 'include',
      body: JSON.stringify(body),
    });
    const returnMessage = await response.json();
    console.log(returnMessage);
  }

  render() {
    return (
      <div className="login">
        <form id="login_form">
          <label htmlFor="uname">
            <b>Username</b>
            <span className="require">*</span>
          </label>

          <input
            id="name_input"
            type="text"
            placeholder="Enter Username"
            name="uname"
            required
            onInput={this.setName}
          />
          <label htmlFor="psw">
            <b>Password</b>
            <span class="require">*</span>
          </label>
          <input
            id="password_input"
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
            onInput={this.setPassword}
          />
          {/* <input type ='checkbox' />
          <label> Remember me</label> */}
          <button type="submit" onClick={this.fetchLogin}>
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(Login);



//làm thêm rememberme
