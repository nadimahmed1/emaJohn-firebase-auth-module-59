import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const location = useLocation()
    const from = location.state?.from?.pathname || '/';

    const [signInWithEmailAndPassword, user] = useSignInWithEmailAndPassword(auth)

    const handleEmailBlur = event => {
        setEmail(event.target.value);

    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }

    if (user) {
        navigate(from, { replace: true })
    }

    const handleFormSubmit = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);

    }

    return (
        <div className='form-container'>

            <form onSubmit={handleFormSubmit}>
                <div>
                    <h2 className='form-title'>Login</h2>
                    <div className='input-group'>
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="Password">Password</label>
                        <input onBlur={handlePasswordBlur} type="Password" name="password" id="" />
                    </div>
                    <input className='form-submit' type="submit" value="Login" />
                </div>
                <p className='form-link'>
                    New to Ema-john? <Link className='link' to={'/signUp'}>Create New Account</Link>
                </p>
            </form>

        </div>
    );
};

export default Login;