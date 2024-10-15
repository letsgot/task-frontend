import React, { useState } from 'react';
import axios from 'axios';

const OrderForm = ({ fetchOrders }) => {
    const [orderData, setOrderData] = useState({
        orderId: '',
        productId: '',
        orderedOn: '',
        userId: ''
    });

    const handleChange = (e) => {
        setOrderData({ ...orderData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:9000/api/v1/orders', orderData);
        fetchOrders();
        setOrderData({ orderId: '', productId: '', orderedOn: '', userId: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create Order</h2>
            <input name="orderId" value={orderData.orderId} onChange={handleChange} placeholder="Order ID" required />
            <input name="productId" value={orderData.productId} onChange={handleChange} placeholder="Product ID" required />
            <input name="orderedOn" value={orderData.orderedOn} onChange={handleChange} placeholder="Ordered On (YYYY-MM-DD)" required />
            <input name="userId" value={orderData.userId} onChange={handleChange} placeholder="User ID" required />
            <button type="submit">Create Order</button>
        </form>
    );
};

export default OrderForm;
