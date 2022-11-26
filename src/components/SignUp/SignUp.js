import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [error, setError] = useState('');

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();

    const handleEmailBlur = event => {
        setEmail(event.target.value);

    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }

    const handleConfirmPass = event => {
        setConfirmPass(event.target.value)
    }

    const handleFormSubmit = event => {
        event.preventDefault();
        createUserWithEmailAndPassword(email, password)

        if (password !== confirmPass) {
            setError('password did not match');

            return;
        }
        else {
            setError('');

        }
        if (user) {
            navigate('/shop')
        }
    }

    return (
        <div className='form-container'>

            <form onSubmit={handleFormSubmit}>
                <div>
                    <h2 className='form-title'>SignUp</h2>
                    <div className='input-group'>
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="Password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">ConfirmPassword</label>
                        <input onBlur={handleConfirmPass} type="password" name="confirm-password" id="" />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <input className='form-submit' type="submit" value="SignUp" />
                </div>
                <p className='form-link'>
                    Already have an account? <Link className='link' to={'/login'}>Login</Link>
                </p>
            </form>

        </div>
    );
};

export default SignUp;