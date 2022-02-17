import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function LoginForm({ setAuthenticated }) {
                                // LoginForm has setUser method which App gave to MainContent and
                                // MainContent gave to this component (using props)
    const [{email, password}, setValues] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState([]);

    const handleChange = (event) => {
        const allowed_names = ['email', 'password'],
            name  = event.target.name,
            value = event.target.value

        if (-1 !== allowed_names.indexOf(name)) {
            setValues(prev_values => {
                return ({...prev_values,
                    [name]: value
                });
            });
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        let response = await axios.post('/login', {email, password}, {
            headers: {
                'Accept': 'application/json'
            }
        }).catch(error => response = error.response);

        if (response.status === 422) {
            // login unsuccessful
            setErrors(['Login not successful. Try again.']);
        } else if (response.status === 200) {
            // login successful
            setErrors([]);
            setAuthenticated(true);
        }
    }

    return (
        <div className="login-form">

            {
                errors.length ?
                    (
                        errors.map(error => (
                            <div className="error">{ error }</div>
                        ))
                    )
                    : ''
            }

            <form action="/login" method="post" onSubmit={ handleSubmit }>

                <label>Email:</label><br />
                <input type="email" name="email" value={ email } onChange={ handleChange } />
                <br />
                <br />

                <label>Password:</label><br />
                <input type="password" name="password" value={ password } onChange={ handleChange } />
                <br />
                <br />

                <button>Login</button>

            </form>

        </div>

    )
}