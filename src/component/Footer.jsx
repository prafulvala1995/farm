import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
    return (
        <>
            <div className='col-gren col-white'>
                <div className='container p-5'>
                    <Row>
                        <Col>
                            <img height={40} src="/assets/images/asset48.webp"></img><hr />
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p><hr />
                        </Col>
                        <Col>
                            <h5>Useful Links</h5>
                            <p>About Us</p>
                            <p>Poultry Feeds</p>
                            <p>Our Services</p>
                            <p>Gallery</p>
                            <p>Videos</p>
                        </Col>
                        <Col>
                            <h5>Our Services</h5>
                            <p>Breeders</p>
                            <p>Our Blogs</p>
                            <p> FAQ</p>
                            <p>Policy</p>
                            <p>Terms & Condition</p>
                        </Col>
                        <Col>
                            <h5>Contact Information</h5>
                            <h5>Call Us Now:</h5>
                            <p>+1 (888)123-4567</p>
                            <h5>Email Address:</h5>
                            <p>info@example.com</p>
                            <h5>Office Hour:</h5>
                            <p>08:00am - 6:00pm</p>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}

export default Footer
