import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = ({ fetchOrders }) => {
    const [productData, setProductData] = useState({
        productId: '',
        name: '',
        price: ''
    });

    const handleChange = (e) => {
        setProductData({ ...productData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:9000/api/v1/products', productData);
        fetchOrders();
        setProductData({ productId: '', name: '', price: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create Product</h2>
            <input name="productId" value={productData.productId} onChange={handleChange} placeholder="Product ID" required />
            <input name="name" value={productData.name} onChange={handleChange} placeholder="Product Name" required />
            <input name="price" value={productData.price} onChange={handleChange} placeholder="Price" required />
            <button type="submit">Create Product</button>
        </form>
    );
};

export default ProductForm;
