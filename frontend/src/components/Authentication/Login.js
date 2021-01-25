import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
        this.setName = this.setName.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.fetchLogin = this.fetchLogin.bind(this);
    }

    setName() {
        const nameInput = document.querySelector('#name_input');
        this.setState({
            username: nameInput.value
        });
    }

    setPassword() {
        const passwordInput = document.querySelector('#password_input');
        this.setState({
            password: passwordInput.value
        })
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
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        const returnMessage = await response.json()
        console.log(returnMessage);
    }

    render() {
        return <div className="login">
            <label htmlFor="uname"><b>Username</b></label>
            <input id='name_input' type="text" placeholder="Enter Username" name="uname" required
                onInput={this.setName} />
            <label htmlFor="psw"><b>Password</b></label>
            <input id='password_input' type="password" placeholder="Enter Password" name="psw" required
                onInput={this.setPassword}
            />
            <button type="submit" onClick={this.fetchLogin}>Login</button>
        </div>
    }
}

export default withRouter(Login);
