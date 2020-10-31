import React, { Component } from 'react';
import Input from '../UI/Input/Input';
import axios from 'axios';

class SignIn extends Component {
    state = {
        signInForm: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your e-mail'
                },
                value: '',
                validation: {
                    required: true,
                    valid: false,
                    touched: false
                }
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Your password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6,
                    valid: false,
                    touched: false
                }
            }
        }
    }

    checkValidity = (value, rules) => {
        let isValid = true;
        if ( rules.required ) {
            isValid = value.trim() !== '' && isValid;
        }
        if ( rules.minLength ) {
            isValid = value.length >= rules.minLength && isValid;
        }

        return isValid;
    }
    inputChangedHandler = (event, inputId) => {
        const updatedForm = {
            ...this.state.signInForm
        }
        const updatedFormElement = {
            ...updatedForm[inputId]
        }
        updatedFormElement.value = event.target.value;
        updatedFormElement.validation.touched = true;

        updatedFormElement.validation.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedForm[inputId] = updatedFormElement;

        console.log('%c element', 'color:#bada55;', updatedFormElement.validation.valid);
        this.setState({
            signInForm: updatedForm
        })
    }
    onSignIn = (event) => {
        event.preventDefault();
        const formData = {};
        for ( let elem in this.state.signInForm ) {
            formData[elem] = this.state.signInForm[elem].value;
        }
        console.log('%c onSignIn', 'color:#bada55;', formData);
        axios.post('http://localhost:8000/api/expenses/').then(res => {
            console.log('%c res [SUCCESS]', 'color:#bada55;', res);
        }).catch(res => {
            console.log('%c res [FAILED]', 'color:#bada55;', res);
        })
    }
    render() {
        const formArray = [];
        for ( let key in this.state.signInForm ) {
            formArray.push({
                id: key,
                config: this.state.signInForm[key]
            })
        }
        let form = (
            <form onSubmit={this.onSignIn}>
                {formArray.map(elem => (
                    <Input 
                        elementType={elem.config.type} 
                        elementConfig={elem.config.elementConfig}
                        value={elem.config.value}
                        key={elem.id}
                        changed={(e) => this.inputChangedHandler(e, elem.id)}
                        invalid={!elem.config.validation.valid}
                        touched={elem.config.validation.touched}
                    />
                ))}
                <button>Sign In</button>
            </form>
        )
        return (
            <React.Fragment>
                <p>Hello from SignIn component </p>
                {form}
            </React.Fragment>
        )
    }
}

export default SignIn;