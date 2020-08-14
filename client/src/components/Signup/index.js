import React, { Component } from 'react';
import './styles.css';

import FormInput from './../forms/FormInput';


const intialState = {
    displayName:'',
    email: '',
    passwords: '',
    confirmPasswords: '',
    errors: []
};

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...intialState
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        const { name, value } = e.target;

        this.setState({
            [name]: value
        });

    }

    handleFormSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword, errors } = this.state

        if (password !== confirmPassword) {
            const err = ['Passwords do not match'];
            this.setState({
                errors: err
            });
            return;
        }
    }


    render () {
        const { displayName, email, password, confirmPassword, errors } = this.state;
        return (
            <div className="signup">
                <div className="wrap">
                <h2>
                    Signup
                </h2>

                {errors.length > 0 && (
                    <ul>
                        {errors.map((err, index) => {
                            return (
                                <li key={index}>
                                    {err}
                                </li>
                            );
                        })}
                    </ul>
                )}

                <div className="formWrap">
                <form onSubmit={this.handleFormSubmit}>
                <FormInput
                    type="text"
                    name="displayName"
                    value={displayName}
                    placeholder="Full name"
                    onChange={this.handleChange}
                />
                <FormInput
                    type="email"
                    name="email"
                    value={email}
                    placeholder="Email"
                    onChange={this.handleChange}
                />
                <FormInput
                    type="password"
                    name="password"
                    value={password}
                    placeholder="Password"
                    onChange={this.handleChange}
                />
                <FormInput
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    placeholder="Confirm Password"
                    onChange={this.handleChange}
                />

                <Button type="Submit">
                    Register
                </Button>

                </form>
                </div>
                </div>
            </div>
        );
    }
}

export default Signup;