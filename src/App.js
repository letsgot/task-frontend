import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserForm from './components/UserForm';
import OrderForm from './components/OrderForm';
import ProductForm from './components/ProductForm';
import OrderList from './components/OrderList';

const App = () => {
    const [orders, setOrders] = useState([]);

    const fetchOrders = async () => {
        try {
            const response = await axios.get('http://localhost:9000/api/v1/orders');
            setOrders(response.data);
        } catch (error) {
            console.error('Error fetching orders:', error);
        }
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <h1>User Management System</h1>
            <UserForm fetchOrders={fetchOrders} />
            <OrderForm fetchOrders={fetchOrders} />
            <ProductForm fetchOrders={fetchOrders} />
            <OrderList orders={orders} />
        </div>
    );
};

export default App;
