import React, { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function HomeCategories() {
    const [categories, setCategories] = useState([])

    const baseUrl = 'https://homechef.masudlearn.com/category/'
    useEffect(() => {
        fetch('https://apihomechef.masudlearn.com/api/category')
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
