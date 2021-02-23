import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import CustomButton from '../CustomButton/customButton.component';
import FormInput from '../FormInput/formInput.component';
import './register.style.css';
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            //need to be encrypted
            password: "",
            email: ""
        }
        this.setName = this.setName.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.fetchRegister = this.fetchRegister.bind(this);
    }

    //setState for username everytime user types
    setName() {
        const nameInput = document.querySelector('#name_input');
        const checkValid = document.querySelector('#username_validate');
        this.setState({
            username: nameInput.value
        });
        if (this.validateUsername(nameInput.value)) {
            checkValid.innerHTML = '<span style="color:green">Username is validated</span>';
        } else if (!this.validateUsername(nameInput.value)) {
            checkValid.innerHTML = '<span style="color:red">Username is not validated</span>';
        }
        if (nameInput.value === "") {
            checkValid.textContent = "";
        }
    }

    //setState for password everytime user types
    setPassword() {
        const passwordInput = document.querySelector('#password_input');
        const checkValid = document.querySelector('#password_strength');

        this.setState({
            password: passwordInput.value
        })
        if (typeof this.checkPasswordStrength(passwordInput.value) == 'string') {
            checkValid.innerHTML = `<span style="color:red">${this.checkPasswordStrength(passwordInput.value)}</span>`

        } else {
            switch (this.checkPasswordStrength(passwordInput.value)) {
                case 0:
                    checkValid.innerHTML = '<span style="color:red">Your password is very weak</span>'
                    break;
                case 1:
                    checkValid.innerHTML = '<span style="color:orange">Your password is weak</span>'
                    break;
                case 3:
                    checkValid.innerHTML = '<span style="color:yellow">Your password is ok</span>'
                    break;
                case 4:
                    checkValid.innerHTML = '<span style="color:green">Your password is strong</span>'
                    break;
                default:
                    checkValid.innerHTML = "";
                    break;
            }
        }
        if (passwordInput.value === "") {
            checkValid.innerHTML = "";
        }

    }

    setEmail() {
        const emailInput = document.querySelector('#email_input');
        const checkValid = document.querySelector('#email_validate');
        this.setState({
            email: emailInput.value
        });
        if (this.validateEmail(emailInput.value)) {
            checkValid.innerHTML = '<span style="color:green">Email is validated</span>';
        } else if (!this.validateUsername(emailInput.value)) {
            checkValid.innerHTML = '<span style="color:red">Email is not validated</span>';
        }
        if (emailInput.value === "") {
            checkValid.textContent = "";
        }
    }

    //fetch data after user click submit button
    async fetchRegister(e) {
        e.preventDefault();
        const { username, password, email } = this.state;
        if (this.validateUsername(username) === true && (typeof this.checkPasswordStrength(password)) === 'number') {
            //validate name, password
            const url = "http://localhost:3030/register";
            const body = {
                username: username,
                password: password,
                email: email
            }
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            })
            const returnMessage = await response.json()
            document.querySelector('#error').textContent = `${returnMessage.message}`
        }
    }

    //validate username
    //-> must only contains a-z A-Z 0-9 , shift-dash in the middle
    //-> must have 5-50 characters
    validateUsername(username) {
        const pattern = /^(?=[a-zA-Z0-9._]{5,50}$)(?!.*[_.]{2})[^_.].*[^_.]$/;
        return pattern.test(username);
    }
    //check password strength
    //-> must have  6-50 character
    checkPasswordStrength(password) {
        let strength = 0;
        if (password.length < 6) {
            return "Minimum of password length is 6"
        }
        if (password.length > 50) {
            return "Maximum of password length is 50"
        }
        if (password.match(/[a-z]+/)) {
            strength += 1;
        }
        if (password.match(/[A-Z]+/)) {
            strength += 1;
        }
        if (password.match(/[0-9]+/)) {
            strength += 1;
        }
        if (password.match(/[$@#&!]+/)) {
            strength += 1;
        }
        console.log("passstrength: ", strength)
        return strength;
    }
    //
    validateEmail(email) {
        const pattern = /\S+@\S+\.\S+/;
        return pattern.test(email);
    }
    render() {
        return (
            <div className="register">
                <h1 id="error"></h1>
                <form id="register_form" method="POST" action="http://localhost:3030/register">
                    <label htmlFor="uname"><b>Username</b>
                        <span class="require">*</span>
                    </label>

                    <FormInput id='name_input' type="text" placeholder="Enter Username" name="uname" required
                        onInput={this.setName} />
                    <div id='username_validate'></div>

                    <label htmlFor="psw"><b>Password</b>
                        <span class="require">*</span>
                    </label>
                    <FormInput id='password_input' type="password" placeholder="Enter Password" name="psw" required
                        onInput={this.setPassword}
                    />
                    <div id='password_strength'></div>

                    <label htmlFor="email"><b>Email</b>
                        <span class="require">*</span> </label>
                    <FormInput id='email_input' type="text" placeholder="Enter Email" name="email" required
                        onInput={this.setEmail}
                    />
                    <div id='email_validate'></div>

                    <CustomButton type="submit" onClick={this.fetchRegister}>Sign up</CustomButton>
                    <div className='icon'>
                        <img src="https://img.icons8.com/color/48/000000/google-logo.png" />
                        <img src="https://img.icons8.com/color/48/000000/facebook-new.png" />
                    </div>
                </form>

            </div>
        )
    }
}

export default withRouter(Register);