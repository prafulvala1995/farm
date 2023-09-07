import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Alert, Button, Col, Container, Form, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';

const Order = () => {

    const [orderData, setOrderData] = useState([]);
    const [formData, setFormData] = useState({
        userName: '',
        userEmail: '',
        address: '',
        shipping: '',
        city: '',
        state: '',
        zipcode: '',
        country: 'India',
        status: 'pending',
        product: [],
    });
    const [orderCreated, setOrderCreated] = useState(false);

    useEffect(() => {
        const storedOrderData = localStorage.getItem('orderData');
        if (storedOrderData) {
            const parsedOrderData = JSON.parse(storedOrderData);
            setOrderData(parsedOrderData);
            setFormData({
                ...formData,
                product: parsedOrderData.map(item => ({
                    productId: item._id,
                    quantity: item.quantity,
                    total_price: item.total_price,
                })),
            });
        }
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:2200/order/', formData)
            .then(response => {
                console.log('Order created:', response.data);
                setOrderCreated(true);
            })
            .catch(error => {
                console.error('Error creating order:', error);
            });
    };

    return (
        <>
            <Header/>
            <div className="bgColorform p-5">
                <Container className="mt-5">
                    <Col>
                        <h3>Order Summary</h3>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Product ID</th>
                                    <th>Product Name</th>
                                    <th>Quantity</th>
                                    <th>Total Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orderData.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item._id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.quantity}</td>
                                        <td>${item.total_price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Col>
                    <Col>
                        <h3>Order Details</h3>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="userName">
                                <Form.Label>User Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="userName"
                                    value={formData.userName}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="userEmail">
                                <Form.Label>User Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="userEmail"
                                    value={formData.userEmail}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="address">
                                <Form.Label>Address</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="shipping">
                                <Form.Label>Shipping</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="shipping"
                                    value={formData.shipping}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="city">
                                <Form.Label>City</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="state">
                                <Form.Label>State</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="state"
                                    value={formData.state}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="zipcode">
                                <Form.Label>Zipcode</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="zipcode"
                                    value={formData.zipcode}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="country">
                                <Form.Label>Country</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="status">
                                <Form.Label>Status</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="status"
                                    value={formData.status}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                            <Button variant="success" type="submit">
                                Place Order
                            </Button>
                        </Form>
                    </Col>
                    {orderCreated && (
                        <Col className='mt-2'>
                            <Alert variant="success">
                                Order created successfully!
                            </Alert>
                        </Col>
                    )}
                </Container>
            </div>
            <Footer/>
        </>
    )
}

export default Order;