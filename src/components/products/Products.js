import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function Products() {
    return (
        <>
            <section className="products-section">
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={3}>
                            <div className="category-wrapper">
                                <h2>categories</h2>
                                <ul className="mb-0 list-unstyled">
                                    <li>
                                        <a href="#">category 1</a>
                                    </li>
                                    <li>
                                        <a href="#">category 2</a>
                                    </li>
                                    <li>
                                        <a href="#">category 3</a>
                                    </li>
                                    <li>
                                        <a href="#">category 4</a>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={9}>
                            <Row>
                                <Col xs={12} sm={6} md={4}>
                                    <div className="product-wrapper">
                                        <img className="img-fluid" src="https://via.placeholder.com/512" alt="Product" />
                                        <div className="product-info">
                                            <h5 className="title">Product title</h5>
                                            <div className="price">
                                                <del>
                                                    <span>150</span>
                                                </del>
                                                <ins>
                                                    <span>140</span>
                                                </ins>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
