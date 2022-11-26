import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Shipment.css'

const Shipment = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');

    const [user] = useAuthState(auth);



    const handleNameBlur = event => {
        setName(event.target.value)
    }

    const handleAddressBlur = event => {
        setAddress(event.target.value)
    }

    const handlePhoneBlur = event => {
        setPhone(event.target.value)
    }

    const handleFormSubmit = event => {
        event.preventDefault();
        const shipping = { name, email, address, phone };
        console.log(shipping);

    }


    return (
        <div className='form-container'>

            <form onSubmit={handleFormSubmit}>
                <div>
                    <h2 className='form-title'>Shipping Information</h2>

                    <div className='input-group'>
                        <label htmlFor="name">YourName</label>
                        <input onBlur={handleNameBlur} type="text" name="name" id="" />
                    </div>

                    <div className='input-group'>
                        <label htmlFor="email">YourEmail</label>
                        <input value={user?.email} readOnly type="email" name="email" id="" />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="address">Address</label>
                        <input onBlur={handleAddressBlur} type="text" name="address" id="" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="text">PhoneNumber</label>
                        <input onBlur={handlePhoneBlur} type="text" name="Phone" id="" />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <input className='form-submit' type="submit" value="Add Shipping" />
                </div>

            </form>

        </div>
    );
};

export default Shipment;