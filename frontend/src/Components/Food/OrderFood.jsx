import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OrderFood = () => {
    const [email, setEmail] = useState('');
    const [item, setItem] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccessMessage('');

        const payload = {
            user: email,
            items: [{ item, quantity }],
        };

        try {
            const response = await axios.post('http://localhost:8001/api/order/place', payload);
            console.log('Response:', response.data);
            setSuccessMessage('Order placed successfully!');
            setTimeout(() => {
                navigate('/');
            }, 2000);
        } catch (error) {
            console.error('Error response:', error);
            if (error.response) {
                setError(error.response.data.error || 'Something went wrong, please try again.');
            } else {
                setError('Something went wrong, please try again.');
            }
        }
    };

    return (
        <div className='container mt-4' style={{ width: '35vw' }}>
            <div className="modal-content rounded-4 shadow">
                <div className="modal-header p-5 pb-4">
                    <h1 className="fw-bold mb-0 fs-2">Order Food</h1>
                </div>
                <div className="modal-body p-5 pt-0">
                    <form className="" onSubmit={handleSubmit}>
                    
                        <div className="form-floating mb-3">
                            <input
                                type="email"
                                className="form-control rounded-3"
                                id="floatingInput"
                                placeholder="name@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control rounded-3"
                                id="floatingItem"
                                placeholder="Food Item"
                                value={item}
                                onChange={(e) => setItem(e.target.value)}
                                required
                            />
                            <label htmlFor="floatingItem">Food Item</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="number"
                                className="form-control rounded-3"
                                id="floatingQuantity"
                                placeholder="Quantity"
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                                required
                                min="1"
                            />
                            <label htmlFor="floatingQuantity">Quantity</label>
                        </div>
                        <button className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">Order</button>
                        {error && <small className="text-danger">{error}</small>}
                        {successMessage && <small className="text-success">{successMessage}</small>}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default OrderFood;
