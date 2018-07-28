import React, {Component} from 'react';

import firebaseConfig, {databaseRef} from '../../config/firebaseConfig'; 

import Inputs from '../components/inputs';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    login = (event) => {
        event.preventDefault();
        firebaseConfig.auth().signInWithEmailAndPassword(
            this.state.email, this.state.password
        ).catch( error => {
            alert(error);
        })
    }

    signup = (event) => {
        event.preventDefault();
        firebaseConfig.auth().createUserWithEmailAndPassword(
            this.state.email, this.state.password
        ).catch( error => {
            alert(error);
        })
    }

    handleChange = (event) => {
        event.preventDefault();
        console.log('shit');
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <form id = 'formContainer'>
      
                <Inputs 
                    inputLabel = 'Email Address:'
                    inputType = 'email'
                    inputPlaceHolder = 'Email Address...'
                    inputId = 'userEmail'
                    inputName = 'email'
                    value = {this.state.email}
                    handleChange = {this.handleChange}
                />
            
                <Inputs 
                    inputLabel = 'Password:'
                    inputType = 'password'
                    inputPlaceHolder = 'Password...'
                    inputId = 'userPassword'
                    inputName = 'password'
                    value = {this.state.password}
                    handleChange = {this.handleChange}
                />

                <section className = 'buttonsContainer'>
                    <button
                        className = 'applySubmit loginButton'
                        onClick = {this.login}
                    >
                        Login
                    </button>

                    <button
                        className = 'applySubmit signUpButton'
                        onClick = {this.signup}
                    >
                        Signup
                    </button>
                </section>
                
            </form>
        )
    }
}

export default Login;