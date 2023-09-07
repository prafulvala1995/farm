import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Viewproduct = () => {

    const [products, setProducts] = useState([]);

    // let {id} = useParams();

    useEffect(() => {
        axios.get('http://localhost:2200/all')
            .then(function (response) {
                // handle success
                console.log(response.data.data);
                setProducts(response.data.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, []);

    return (
        <>

        <Header/>          
            <div className="container">
                <h2 className='text-decoration-underline m-5'>View Products</h2>
                <div className="row m-5">
                    {products.map((product) => (
                        <div className="col-md-4 mb-4" key={product.id}>
                          <Link to = {`/single/${product._id}`}>
                            <div className="card">
                                <img src={product.images} className="card-img-top" alt={product.name} />
                                <div className="card-body">
                            
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">{product.desc}</p>
                                    <p className="card-text">Price: ${product.price}</p>
                                    <p className="card-text">Category: {product.category}</p>
                                    <p className="card-text">Rate: {product.rate}</p>
                                    <p className="card-text">Thumb: {product.thumb}</p>
                                </div>
                            </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            <Footer/>
        </>
    )
}

export default Viewproduct