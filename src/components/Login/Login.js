import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className='form-container'>

            <form>
                <div>
                    <h2 className='form-title'>Login</h2>
                    <div className='input-group'>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="Password">Password</label>
                        <input type="Password" name="password" id="" />
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