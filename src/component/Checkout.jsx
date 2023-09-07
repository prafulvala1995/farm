import React, { useState } from 'react';
import Header from './Header';

function Checkout() {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        paymentMethod: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., send data to the server
        console.log('Form data submitted:', formData);
    };

    return (
        <>
        <Header/>
        <div className='container p-5'>

            <h2>Checkout</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">
                        Address
                    </label>
                    <textarea
                        className="form-control"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="paymentMethod" className="form-label">
                        Payment Method
                    </label>
                    <select
                        className="form-select"
                        id="paymentMethod"
                        name="paymentMethod"
                        value={formData.paymentMethod}
                        onChange={handleChange}
                    >
                        <option value="">Select Payment Method</option>
                        <option value="credit-card">Credit Card</option>
                        <option value="debit-card">Debit Card</option>
                        <option value="paypal">PayPal</option>
                        <option value="upi">UPI</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">
                    Place Order
                </button>
            </form>
        </div>
        </>
    );
}

export default Checkout;

