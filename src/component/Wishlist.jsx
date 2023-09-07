import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link , useNavigate  } from 'react-router-dom';
import Header from './Header';

const Wishlist= () => {

    const [WishlistItems, setWishlistItems] = useState([]);

    // const navigate = useNavigate();
    // const [cartItems, setCartItems] = useState([]);

    useEffect(() => {

        axios.get('http://localhost:2200/wish/all')
            .then(response => {
                setWishlistItems(response.data.data);
                console.log('wish::', response.data);
            })
            .catch(error => {
                console.error('Error fetching wish items:', error);
            });

    }, []);

    const handleDeleteWishlist = (userId) => {

        axios.delete(`http://localhost:2200/wish/delete/${userId}`)
            .then(response => {
                console.log('delete wish::', response.data);
                setWishlistItems(prevWishlistItems => prevWishlistItems.filter(item => item._id !== userId));
            })
            .catch(error => {
                console.error('Error fetching delete wish items:', error);
            });

    }

    const handleQuantityChange = (itemId, newQuantity) => {

        if (newQuantity < 1) {
            return;
        }
        axios.post(`http://localhost:2200/wish/update/${itemId}`, { quantity: newQuantity })
            .then(response => {
                console.log('update quantity response:', response.data);

                const updatedWishlistItems = WishlistItems.map(item => {
                    if (item._id === itemId) {
                        const newTotalPrice = item.price * newQuantity;
                        return { ...item, quantity: newQuantity, total_price: newTotalPrice };
                    }
                    return item;
                });
                
                setWishlistItems(updatedWishlistItems);
            })
            .catch(error => {
                console.error('Error updating quantity:', error);
            });
    };


    // copy of add  todo card
    // const handleAddToCart = (itemId, newQuantity) => {

    //     if (newQuantity < 1) {
    //         return;
    //     }
    //     axios.post(`http://localhost:2200/cart/update/${itemId}`, { quantity: newQuantity })
    //         .then(response => {
    //             console.log('update quantity response:', response.data);

    //             const updatedCartItems = WishlistItems.map(item => {
    //                 if (item._id === itemId) {
    //                     const newTotalPrice = item.price * newQuantity;
    //                     return { ...item, quantity: newQuantity, total_price: newTotalPrice };
    //                 }
    //                 return item;
    //             });
                
    //             setWishlistItems(updatedCartItems);
    //         })
    //         .catch(error => {
    //             console.error('Error updating quantity:', error);
    //         });
    // };




    // const handleAddtoCart = (productId, qty) => {

    //     if (qty < 0) {
    //         return;
    //     }

    //     const selectedProduct = WishlistItems.find(item => item._id === productId);

    //     const cartItem = {
    //         userId: selectedProduct._id,
    //         name: selectedProduct.name,
    //         price: selectedProduct.price,
    //         thumb: selectedProduct.thumb,
    //         quantity: qty,
    //         total_price: selectedProduct.price * qty
    //     };
    //     console.log('cartItem::', cartItem)
    //     axios.post(`http://localhost:2200/cart`, cartItem)
    //         .then(function (response) {
    //             console.log('cart::', response.data);
    //             setCartItems(prevCartItems => [...prevCartItems, cartItem]);
    //             navigate('/cart');
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // }


    return (
        <>
            <Header/>
            <section className="vh-100">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col">
                            <p><span className="h4">Wishlist Item </span></p>
                            {WishlistItems.map((item, index) => (
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
                                                <button
                                                    className="btn btn-danger"
                                                    onClick={() => handleDeleteWishlist(item._id)}
                                                >
                                                    Remove
                                                </button>
                                                </div>
                                            </div>
                                            <div className="col-md-2 d-flex justify-content-center">
                                                <button className='btn btn-success' >Add to Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="d-flex justify-content-end">
                                <Link to="/viewProducts"><button type="button" className="btn btn-warning btn-lg me-2">Continue shopping</button></Link>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Wishlist;