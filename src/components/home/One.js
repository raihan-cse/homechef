import React, { useState, useEffect } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { Container } from 'react-bootstrap'

export default function One() {
    const [slide, setSlide] = useState([])

    

    const baseUrl = 'https://homechef.masudlearn.com/images/'

    useEffect (() => {
        fetch('https://apihomechef.masudlearn.com/api/sliders/homeslider')
        .then(res => res.json())
        .then(data => setSlide(data))
        .catch(err => console.log(err))
    }, [])

    const slickSetting = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (
        <>
            <section className="top_slide">
                <Container fluid className="px-0">
                    <Slider {...slickSetting}>
                        {slide.map(slideData => (
                            <div className="top_slide_content_wrapper" key={slideData.id}>
                                <img src={baseUrl + slideData.slider_image} alt="first slide" />
                                <div className="top_slide_content">
                                    <h1>{slideData.slider_title}</h1>
                                    <h3>{slideData.slider_slogan}</h3>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </Container>
            </section>
        </>
    )
}
