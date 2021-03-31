import React, { useState, useEffect } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { Container } from 'react-bootstrap'

export default function RandomProducts() {
    const [ranProduct, setRanProduct] = useState([])
    console.log(ranProduct)

    const baseUrl = 'https://homechef.masudlearn.com/images/'
    useEffect(() => {
        fetch('https://apihomechef.masudlearn.com/api/random/products')
            .then(res => res.json())
            .then(data => setRanProduct(data))
            .catch()
    }, [])

    const slickSetting = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4
    }
    return (
        <>
            <section className="random-products-section">
                <Container className="px-0">
                    <div>
                        <div className="heading-wrapper">
                            <h1 className="heading">specialities of the day</h1>
                            <h5 className="sub-heading">~delicious foods~</h5>
                        </div>
                        <Slider {...slickSetting}>
                            {ranProduct.map(ranProductData => (
                                <div key={Math.random()}>
                                    <div className="product-wrapper">
                                        <img src={baseUrl + ranProductData.image} alt="Product" />
                                        <h4 className="title">{ranProductData.name}</h4>
                                        {ranProductData.price.map((price , i = Math.random()) => (
                                            <div className="price" key={i+=1}>
                                                <ins>
                                                    <span><span>৳</span>{price.original_price}</span>
                                                </ins>
                                                <del>
                                                    <span><span>৳</span>{price.discounted_price}</span>
                                                </del>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </Container>
            </section>
        </>
    )
}
