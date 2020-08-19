import "./style.css"
// import FormInput from './../forms/FormInput';
import React, { useState } from "react";
import { useMutation } from '@apollo/react-hooks';
import { Link } from "react-router-dom";
import { LOGIN } from "../../utils/mutations"
import Auth from "../../utils/auth";

function SignIn(props) {
  const [formState, setFormState] = useState({ email: '', password: '' })
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async event => {
    event.preventDefault();
    try {
      const mutationResponse = await login({ variables: { email: formState.email, password: formState.password } })
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e)
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  return (
    <div className="signin">
        <div className="wrap">
            <Link to="/signup">
                ← Go to Signup
            </Link>

            <h2>Login</h2>
            <div className="formWrap">
                <form onSubmit={handleFormSubmit}>
                    <label htmlFor="email">Email address:</label>
                    <input
                        placeholder="youremail@test.com"
                        name="email"
                        type="email"
                        id="email"
                        onChange={handleChange}
                    />
                    <label htmlFor="pwd">Password:</label>
                    <input
                        placeholder="******"
                        name="password"
                        type="password"
                        id="pwd"
                        onChange={handleChange}
                    />
                    {
                    error ? <div>
                        <p className="error-text" >The provided credentials are incorrect</p>
                    </div> : null
                    }
                    <button type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}





export default SignIn;