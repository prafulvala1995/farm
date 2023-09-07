import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>

      <div className='bgcolor '>
        {/* =--------------Header First--------- */}
        <div className='container d-flex padd txthead justify-between'>
          <div className=''>
            <ul className='d-flex'>
              <li className='padicon'><img height={18} src="/assets/images/asset1.webp" /> <span className='p-2'>+1 (888)123-4567</span></li>
              <li><img height={20} src="/assets/images/asset2.webp" /><span className='p-3'>info@example.com</span></li>
            </ul>
          </div>
          <div className=''>
            <ul>
              <li><img height={24} src="/assets/images/asset3.webp" /><span className=''>English</span></li>
            </ul>
          </div>
        </div>
      </div>
      {/* --------------Header Second--------- */}
      <div className=''>
        <div className='container d-flex'>
          <ul><Link to="/home">
            <li className='padd'><img height={32} src="/assets/images/asset4.webp" /></li>
            </Link>
          </ul>
          <ul class="main_menu flex align-center">
            <li class="active"><a href="#">Home</a>
              <div class="main_mega">
                <ul>
                  <li><a href="#">Home 01(Poultry)</a></li>
                  <li><a href="#">Home 02(Pig)</a></li>
                  <li><a href="#">Home 03(Fish)</a></li>
                  <li><a href="#">Home 04(Horse)</a></li>

                </ul>
              </div>
            </li>
            <li><a href="#">Page</a>
              <div class="main_mega">
                <ul>
                  <li><a href="#">About us</a></li>
                  <li><a href="#">FAQ</a></li>
                  <li><a href="#">Error</a></li>
                </ul>
              </div>
            </li>
            <li><a href="#">Services</a>
              <div class="main_mega">
                <ul>
                  <li><a href="#">Market Research</a></li>
                  <li><a href="#">Marketing Planning</a></li>
                  <li><a href="#">Taxation service</a></li>
                  <li><a href="#">Business Planning</a></li>
                </ul>
              </div>
            </li>
            <li>

              <a href="#">Gallery</a>
              <div class="main_mega">
                <ul>
                  <li><a href="#">Menu Item 1</a></li>
                  <li><a href="#">Menu Item 2</a></li>
                  <li><a href="#">Menu Item 3</a></li>
                  <li><a href="#">Menu Item 4</a></li>
                  <li><a href="#">Menu Item 5</a></li>
                </ul>
              </div>
            </li>

            <li><a href="#">Blog</a>
              <div class="main_mega">
                <ul>
                  <li><a href="#">Blog single</a></li>
                  <li><a href="#">Blog Detail</a></li>
                </ul>
              </div>
            </li>
            <li><a href="#">Shop</a>
              <div class="main_mega">
                <ul>
                <Link  to="/viewproduct"><li><a className='padziro'>View Product</a></li></Link>
                  <Link  to="/wishlist"><li ><a className='padziro'>Wishlist</a></li></Link>
                  <Link  to="/order"><li ><a className='padziro'>Order Page</a></li></Link>
                  {/* <li><a href="#">Other List</a></li> */}
                </ul>
              </div>
            </li>
            <li><a href="#">Contact us</a></li>
          </ul>
          <ul>
            <li className='padd'><img height={20} src="/assets/images/asset6.webp" /></li>
          </ul>
          <ul><Link to="/cart">
            <li className='padd'><img height={20} src="/assets/images/asset7.webp" /></li>
            </Link>
          </ul>
          <ul>
            <li className='padd'> <Link to="/login"><button className='butn'>Log in / Register</button></Link></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header
