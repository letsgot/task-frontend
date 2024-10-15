import React, { useEffect, useState } from 'react';

const OrderList = ({ orders }) => {
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(()=>{

    },[searchTerm])

    // Filter orders based on the search term
    const filteredOrders = orders.filter(order => {
        console.log(order,searchTerm,order.userId.toString().includes(searchTerm))
        return (
            order.orderId.toString().includes(searchTerm) ||
            order.productId.toString().includes(searchTerm) ||
            order.orderedOn.includes(searchTerm) ||
            order.userId.toString().includes(searchTerm)
        );
    });

    return (
        <div>
            <h2>Order List</h2>
            <input
                type="text"
                placeholder="Search by Order ID, Product ID, Date, or User ID"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ marginBottom: '20px', padding: '8px', width: '100%' }}
            />
            <ul>
                {filteredOrders.length > 0 ? (
                    filteredOrders.map(order => (
                        <li key={order.orderId}>
                            Order ID: {order.orderId}, Product ID: {order.productId}, Ordered On: {order.orderedOn}, User ID: {order.userId}
                        </li>
                    ))
                ) : (
                    <li>No orders found</li>
                )}
            </ul>
        </div>
    );
};

export default OrderList;
