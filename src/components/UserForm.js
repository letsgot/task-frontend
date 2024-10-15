import React, { useState } from 'react';
import axios from 'axios';

const UserForm = ({ fetchOrders }) => {
    const [userData, setUserData] = useState({
        username: '',
        address: '',
        phoneNumber: '',
        emailAddress: ''
    });

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:9000/api/v1/users', userData);
        fetchOrders();
        setUserData({ username: '', address: '', phoneNumber: '', emailAddress: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create User</h2>
            <input name="username" value={userData.username} onChange={handleChange} placeholder="Username" required />
            <input name="address" value={userData.address} onChange={handleChange} placeholder="Address" required />
            <input name="phoneNumber" value={userData.phoneNumber} onChange={handleChange} placeholder="Phone Number" required />
            <input name="emailAddress" value={userData.emailAddress} onChange={handleChange} placeholder="Email Address" required />
            <button type="submit">Create User</button>
        </form>
    );
};

export default UserForm;
