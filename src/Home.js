import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"; 
import { Container, Row, Col, Card, Button } from "react-bootstrap";// ✅ Added Icons Import

import "./Home.css"; // Import CSS for styling

// Import images
import slide1 from "./images/slide1.jpg";
import slide2 from "./images/slide2.jpg";
import slide3 from "./images/slide3.jpg";

import about from "./images/about.jpeg";

import veg1 from "./images/veg1.jpg";
import veg2 from "./images/veg2.jpg";
import veg3 from "./images/veg3.jpg";
import veg4 from "./images/veg4.jpg";
import veg5 from "./images/veg5.jpg";
import veg6 from "./images/veg6.jpg";

import fruit1 from "./images/fruit1.jpg";
import fruit2 from "./images/fruit2.jpg";
import fruit3 from "./images/fruit3.jpg";

const Home = () => {
    return (
        <div> {/* ✅ Wrapped everything inside one parent <div> */}
            {/* Scrolling Text with CSS Animation */}
            <div className="marquee-container">
                <p className="marquee-text">
                    🌿 Welcome to Nature's Best – 100% Organic & Fresh Products! 🌱 
                    🚀 Free Shipping on Orders Above $50! Order Now & Stay Healthy! 🍏
                </p>
            </div>

            {/* Bootstrap Carousel */}
            <Carousel style={{ marginTop: "1px", textAlign: "center" }}>
                <Carousel.Item>
                    <img 
                        className="d-block w-100" 
                        src={slide1} 
                        alt="Fresh Organic Vegetables" 
                        style={{ height: "500px", objectFit: "cover"}} 
                    />
                    <Carousel.Caption>
                        <h3>Fresh Organic Vegetables</h3>
                        <p>Grown with love, free from chemicals! 🌱</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img 
                        className="d-block w-100" 
                        src={slide2} 
                        alt="Pure & Natural Dairy" 
                        style={{ height: "500px", objectFit: "cover" }} 
                    />
                    <Carousel.Caption>
                        <h3>Pure & Natural Dairy</h3>
                        <p>Fresh farm milk and dairy products, straight to your home! 🥛</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img 
                        className="d-block w-100" 
                        src={slide3} 
                        alt="Healthy Organic Fruits" 
                        style={{ height: "500px", objectFit: "cover" }} 
                    />
                    <Carousel.Caption>
                        <h3>Healthy Organic Fruits</h3>
                        <p>Enjoy the natural sweetness of organic fruits! 🍏🍓</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            {/* About Us Section */}
            <div className="about-container">
                <h1>About Us</h1>
                <p className="about-intro">
                    Welcome to <strong>Nature's Best</strong> – your trusted source for <strong>100% organic and fresh</strong> products! 🌿💚
                </p>

            {/* Single Div Box with Image on Left & Content on Right */}
            <div className="about-box-horizontal">
                <img src={about} alt="Our Organic Farm" className="about-image" />
                <div className="about-content">
                     <h2>Our Organic Farms</h2>
                    <p>We cultivate our products naturally, free from pesticides and harmful chemicals. 
                    Our organic farms ensure fresh and healthy food for you and your family. 🌱
                    </p>
                 <button className="about-button">Learn More</button>
                </div>
            </div>


            {/* Company Mission */}
            <div className="about-mission">
                <h2>Our Mission</h2>
                <p> At <strong>Nature's Best</strong>, we are committed to providing <span>100% natural, fresh, and healthy</span> products.
                 We aim to promote <strong>sustainable farming</strong>, support <strong>local farmers</strong>, and bring you the best quality organic food. 🌍💚
                </p>
                </div>
            </div>

            {/* Vegetables Section */}
            <Container className="mt-5">
                <h2 className="text-center mb-4">Fresh Organic Vegetables 🥕🥦</h2>
                
        {/* Row 1 */}
        <Row className="mb-4">
        <Col md={4}>
            <Card className="veg-card">
            <Card.Img variant="top" src={veg1} />
            <Card.Body>
                <Card.Title>Carrots</Card.Title>
                <p className="price">₹50 <span className="offer-price">₹80</span></p>
                <Card.Text>Rich in vitamins, fresh and organic.</Card.Text>
                <Button className="buy-button">Buy Now</Button>
            </Card.Body>
            </Card>
        </Col>

        <Col md={4}>
        <Card className="veg-card">
            <Card.Img variant="top" src={veg2} />
            <Card.Body>
                <Card.Title>Broccoli</Card.Title>
                <p className="price">₹40 <span className="offer-price">₹70</span></p>
                <Card.Text>Loaded with antioxidants and nutrients.</Card.Text>
                <Button className="buy-button">Buy Now</Button>
            </Card.Body>
        </Card>
    </Col>

    <Col md={4}>
        <Card className="veg-card">
            <Card.Img variant="top" src={veg3} />
            <Card.Body>
                <Card.Title>Bell Peppers</Card.Title>
                <p className="price">₹60 <span className="offer-price">₹85</span></p>
                <Card.Text>Colorful and crunchy, rich in Vitamin C.</Card.Text>
                <Button className="buy-button">Buy Now</Button>
            </Card.Body>
        </Card>
    </Col>
    </Row>

    {/* Row 2 */}
    <Row>
        <Col md={4}>
            <Card className="veg-card">
            <Card.Img variant="top" src={veg4} />
            <Card.Body>
                <Card.Title>Tomatoes</Card.Title>
                <p className="price">₹40 <span className="offer-price">₹60</span></p>
                <Card.Text>Juicy and ripe, perfect for salads.</Card.Text>
                <Button className="buy-button">Buy Now</Button>
            </Card.Body>
        </Card>
         </Col>

        <Col md={4}>
        <Card className="veg-card">
            <Card.Img variant="top" src={veg5} />
            <Card.Body>
                <Card.Title>Spinach</Card.Title>
                <p className="price">₹30 <span className="offer-price">₹55</span></p>
                <Card.Text>Iron-rich and great for smoothies.</Card.Text>
                <Button className="buy-button">Buy Now</Button>
            </Card.Body>
        </Card>
        </Col>

        <Col md={4}>
        <Card className="veg-card">
            <Card.Img variant="top" src={veg6} />
            <Card.Body>
                <Card.Title>Cabbage</Card.Title>
                <p className="price">₹30 <span className="offer-price">₹60</span></p>
                <Card.Text>Fresh and crisp, great for stir-fry.</Card.Text>
                <Button className="buy-button">Buy Now</Button>
            </Card.Body>
        </Card>
        </Col>
    </Row>
    </Container>

    {/* Fruits Section */}
    <Container className="mt-5">
                <h2 className="text-center mb-4">Fresh Organic Fruits 🍎</h2>
                <Row>
                    <Col md={4}>
                        <Card className="fruit-card">
                            <Card.Img variant="top" src={fruit1} />
                            <Card.Body>
                                <Card.Title>Apples</Card.Title>
                                <p className="price">₹100 <span className="offer-price">₹150</span></p>
                                <Card.Text>Sweet and juicy organic apples.</Card.Text>
                                <Button className="buy-button">Buy Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="fruit-card">
                            <Card.Img variant="top" src={fruit2} />
                            <Card.Body>
                                <Card.Title>Bananas</Card.Title>
                                <p className="price">₹40 <span className="offer-price">₹60</span></p>
                                <Card.Text>Rich in potassium and energy.</Card.Text>
                                <Button className="buy-button">Buy Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="fruit-card">
                            <Card.Img variant="top" src={fruit3} />
                            <Card.Body>
                                <Card.Title>Oranges</Card.Title>
                                <p className="price">₹80 <span className="offer-price">₹120</span></p>
                                <Card.Text>Vitamin C-rich and refreshing.</Card.Text>
                                <Button className="buy-button">Buy Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            
    {/* Footer Section */}
        <footer className="footer">
            <div className="footer-container">
                {/* About Us Section */}
                    <div className="footer-section">
                        <h3>About Us</h3>
                        <p>
                            Nature's Best provides <strong>100% organic, fresh, and natural</strong> food products. 
                            We support sustainable farming and local farmers. 🌿💚
                        </p>
                    </div>

                    {/* Quick Links Section */}
                    <div className="footer-section">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="aa">Home</a></li>
                            <li><a href="aa">About Us</a></li>
                            <li><a href="aa">Products</a></li>
                            <li><a href="aa">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Us Section */}
                    <div className="footer-section">
                        <h3>Contact Us</h3>
                        <p>Email: rishika270901@gmail.com</p>
                        <p>Phone: +91 70107 88770</p>
                        <p>Location: 54 South Street, Namakkal City.</p>

                        {/* Social Media Icons */}
                        <div className="footer-social">
                            <a href="aa" target="_blank" rel="noopener noreferrer">
                                <FaFacebook />
                            </a>
                            <a href="aa" target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                            </a>
                            <a href="aa" target="_blank" rel="noopener noreferrer">
                                <FaTwitter />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} Nature's Best. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Home;
