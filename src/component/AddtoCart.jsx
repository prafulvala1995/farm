import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link  , useNavigate} from 'react-router-dom';
import Header from './Header';

const AddtoCart = () => {

    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate();
    const [orderData, setOrderData] = useState([]);

    useEffect(() => {

        axios.get('http://localhost:2200/cart/all')
            .then(response => {
                setCartItems(response.data.data);
                console.log('cart::', response.data);
            })
            .catch(error => {
                console.error('Error fetching cart items:', error);
            });

    }, []);

    const handleOrder = () =>{

        const orderData = JSON.stringify(cartItems);

        localStorage.setItem('orderData',orderData);

        navigate('/order');
    }

    const handleDeleteCart = (userId) => {

        axios.delete(`http://localhost:2200/cart/delete/${userId}`)
            .then(response => {
                console.log('delete cart::', response.data);
                setCartItems(prevCartItems => prevCartItems.filter(item => item._id !== userId));
            })
            .catch(error => {
                console.error('Error fetching delete cart items:', error);
            });

    }

    const handleQuantityChange = (itemId, newQuantity) => {

        if (newQuantity < 1) {
            return;
        }
        axios.post(`http://localhost:2200/cart/update/${itemId}`, { quantity: newQuantity })
            .then(response => {
                console.log('update quantity response:', response.data);

                const updatedCartItems = cartItems.map(item => {
                    if (item._id === itemId) {
                        const newTotalPrice = item.price * newQuantity;
                        return { ...item, quantity: newQuantity, total_price: newTotalPrice };
                    }
                    return item;
                });
                
                setCartItems(updatedCartItems);
            })
            .catch(error => {
                console.error('Error updating quantity:', error);
            });
    };


    return (
        <>
            <Header/>
            <section className="vh-100">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col">
                            <p><span className="h4">Shopping Cart </span></p>
                            {cartItems.map((item, index) => (
                                <div key={index} className="card mb-4">
                                    <div className="card-body p-4">

                                        <div className="row align-items-center">
                                            <div className="col-md-2">
                                            <img height="120" src="/assets/images/asset36.webp"/>
                                            </div>
                                            <div className="col-md-2 d-flex justify-content-center">
                                                <div>
                                                    <p className="small text-muted mb-4 pb-2">Name</p>
                                                    <p className="fw-normal mb-0">{item.name}</p>
                                                </div>
                                            </div>
                                            <div className="col-md-2 d-flex justify-content-center">
                                                <div>
                                                    <p className="small text-muted mb-4 pb-2">Price</p>
                                                    <p className="fw-normal mb-0">${item.price}</p>
                                                </div>
                                            </div>
                                            <div className="col-md-2 d-flex justify-content-center">
                                                <div>
                                                    <p className="small text-muted mb-4 pb-2">Quantity</p>
                                                    <div className="d-flex align-items-center">
                                                        <button
                                                            className="btn btn-secondary btn-sm me-2"
                                                            onClick={() => handleQuantityChange(item._id, item.quantity - 1)}
                                                        >
                                                            -
                                                        </button>
                                                        <p className="fw-normal mb-0">{item.quantity}</p>
                                                        <button
                                                            className="btn btn-secondary btn-sm ms-2"
                                                            onClick={() => handleQuantityChange(item._id, item.quantity + 1)}
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-2 d-flex justify-content-center">
                                                <div>
                                                    <p className="small text-muted mb-4 pb-2">Total Price</p>
                                                    <p className="fw-normal mb-0">${item.total_price}</p>
                                                </div>
                                            </div>
                                            <div className="col-md-2 d-flex justify-content-center">
                                                <button
                                                    className="btn btn-danger"
                                                    onClick={() => handleDeleteCart(item._id)}
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="d-flex justify-content-end">
                                <Link to="/viewProducts"><button type="button" className="btn btn-warning btn-lg me-2">Continue shopping</button></Link>
                                <button type="button" className="btn btn-primary btn-lg "onClick={handleOrder}>Proceed to Payment</button>
                            </div>
                                
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default AddtoCart