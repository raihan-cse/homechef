import React, { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function HomeCategories() {
    const [categories, setCategories] = useState([])

    const baseUrl = 'https://homechef.masudlearn.com/category/'
    useEffect(() => {
        fetch('https://apihomechef.masudlearn.com/api/category/products')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch()
    }, [])

    return (
        <>
            <section className="category-section">
                <Container>
                    <div className="heading-wrapper">
                        <h1 className="heading">specialities of the day</h1>
                        <h5 className="sub-heading">~delicious foods~</h5>
                    </div>
                    {categories.slice(0, 4).map(catData => (
                        <div className="category-wrapper" key={catData.id}>
                            <Row>
                                <Col md={6}>
                                    <div className="cat-menu-wrapper">
                                        <div className="cat-heading-wrapper">
                                            <div className="title">
                                                <h2>{catData.name}</h2>
                                            </div>
                                            <div className="icon">
                                                <img src={baseUrl + catData.icon} alt="cat icon" />
                                            </div>
                                        </div>
                                        <div className="menu-item-wrapper">
                                            {catData.foods.map(product => (
                                                <div className="menu-items" key={product.id}>
                                                    <div className="title-wrap">
                                                        <h4 className="title">{product.name}</h4>
                                                    </div>
                                                    <div className="mid-dots"></div>
                                                    <div className="price-wrap">
                                                        {product.price.map(price => (
                                                            <span key={price.id}>
                                                                <span>৳</span>
                                                                {price.original_price}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="cat-image-wrapper">
                                        <img src={baseUrl + catData.image} alt="cat main" />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    ))}
                </Container>
            </section>
        </>
    )
}
