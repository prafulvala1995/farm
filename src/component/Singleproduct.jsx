import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams  , Link, useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Singleproduct = () => {


    const [product, setProduct] = useState('');
    // var token = localStorage.getItem('token');
    let { id } = useParams();
    const [qty, setQty] = useState(1);
    const [cartitems, setCartItems] = useState([]);
    const [WishlistItems, setWishlistItems] = useState([]);

    const navigate = useNavigate();


    useEffect(() => {
        axios.get(`http://localhost:2200/single/${id}`)
            .then(function (response) {
                // handle success
                console.log('single::', response.data);
                setProduct(response.data.single_data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [id]);


    const handleAddToCart = ()=>{

        const cartItem = {
            userId: product._id,
            name: product.name,
            price: product.price,
            thumb: product.thumb,
            quantity: qty,
            total_price: product.price * qty
        };
        console.log('cartItem::',cartItem)
        axios.post(`http://localhost:2200/cart`,cartItem)
            .then(function (response) {
                // handle success
                console.log('cart::', response.data);
                setCartItems(pervCartItems => [...pervCartItems,cartItem]);
                navigate('/cart')
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }
    const handleWishlist = ()=>{

        const WishlistItem = {
            userId: product._id,
            name: product.name,
            price: product.price,
            thumb: product.thumb,
            quantity: qty
        };
        console.log('WishlistItem::',WishlistItem)
        axios.post(`http://localhost:2200/wish`,WishlistItem)
            .then(function (response) {
                // handle success
                console.log('Wishlist::', response.data);
                setCartItems(pervWishlistItems => [...pervWishlistItems,WishlistItems]);
                navigate('/wishlist')
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }

    return (
        <>
            <Header />
            <div className="container m-5">
                <div className="row m-3">
                    <div className="col-md-6">
                        <img src={product.images} className="img-fluid" alt={product.name} />
                    </div>

                    <div className="col-md-6">

                        <h2>{product.name}</h2>
                        <p>{product.desc}</p>
                        <p>Price: ${product.price}</p>
                        <p >Category: {product.category}</p>
                        <p >Rate: {product.rate}</p>
                        <p>Thumb: {product.thumb}</p>
                        <button className='butn' onClick={handleAddToCart}>Add to Cart</button>
                        <button className='butn m-1' onClick={handleWishlist}>Add to Wishlist</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Singleproduct;