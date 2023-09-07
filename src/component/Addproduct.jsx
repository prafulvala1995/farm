import React, { useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

function Addproduct() {
  // State to track product details and the cart



  const [product, setProduct] = useState({
    name: '',
    desc:'',
    price: 0,
    category: '',
    rate: 0,
    image: '',
    thumb: '',
  });

//   const [cart, setCart] = useState([]);

  

  const handleInputChange = (e) => {
    const {name , value} = e.target;
    setProduct((pervData)=> ({
        ...pervData,
        [name]:value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
        const response = await axios.post('http://localhost:2200/', product);
        console.log('product created:',response.data);
        Navigate('/Viewproduct');
    }catch (error){
        console.error('error creating product:',error);
    }
  };

  return (
    <div className='container bgprodut'>
      <h2>Add to Cart</h2>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Desc:</label>
        <input
          type="text"
        //   id="name"
          name="desc"

          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          name="price"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="category">Category:</label>
        <input
          type="text"
          id="category"
          name="category"
          
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="rate">Rate:</label>
        <input
          type="number"
          id="rate"
          name="rate"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="image">Image :</label>
        <input
          type="images"
          id="images"
          name="images"
          // value={product.image}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="thumb">Thumbnail URL:</label>
        <input
          type="text"
          id="thumb"
          name="thumb"
          onChange={handleInputChange}
        />
      </div>
      <button className='butn m-3' onClick={handleSubmit}>Add to Cart</button>
      {/* <h3>Cart</h3>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            <div>
              <strong>Name:</strong> {product.name}
            </div>
            <div>
              <strong>Price:</strong> ${product.price.toFixed(2)}
            </div>
            <div>
              <strong>Category:</strong> {product.category}
            </div>
            <div>
              <strong>Rate:</strong> {product.rate}
            </div>
            <div>
              <img src={product.thumb} alt={product.name} />
            </div>
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default Addproduct;

