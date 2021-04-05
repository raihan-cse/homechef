import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SocialLinks from './SocialLinks'

export default function Footer() {
    return (
        <>
            <section className="footer-section">
                <Container>
                    <Row>
                        <Col sm={12} md={4}>
                            <div className="flogo-wrapper">
                                <div className="logo">
                                    <img src="https://via.placeholder.com/1280x720" alt="Footer Logo" />
                                </div>
                                <p>We provide healthy and delicious food.</p>
                                <div className="social-wrapper">
                                    <SocialLinks />
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={4}>
                            <div className="address-wrapper">
                                <div className="footer-title-wrapper">
                                    <h2>Address</h2>
                                </div>
                                <ul>
                                    <li>
                                        <span className="home"></span>
                                        <span>Road # 103, Gulshan-2</span>
                                    </li>
                                    <li>
                                        <a href="tel:+01700-366-666">
                                            <span className="phone-alt"></span>
                                            <span>01700-366-666</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="mailto:info@homechef.com">
                                            <span className="envelope"></span>
                                            <span>info@homechef.com</span>
                                        </a>
                                    </li>
                                    <li>
                                        <span className="clock"></span>
                                        <span>Sun - Thur: 10AM - 6PM</span>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col sm={12} md={4}>
                            <div className="map-wrapper">
                                <div className="footer-title-wrapper">
                                    <h2>find us</h2>
                                </div>
                                <div className="map">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7302.444074138098!2d90.40591297312173!3d23.775106406667526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7711041fe49%3A0x6724a7f9669fcc9e!2sNiketan%20Housing%20Project%2C%20Dhaka%201212!5e0!3m2!1sen!2sbd!4v1617271617342!5m2!1sen!2sbd" width="100%" height="auto" title="footer map" style={{border: "0", margin: "0"}} allowFullScreen="" loading="lazy"></iframe>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
