import React from 'react'
import { Container } from 'react-bootstrap'
import Bgimage from '../../assets/images/shop-banner.jpg'

export default function Shop() {
    const bannerImage = {
        backgroundImage : `url(${Bgimage})`,
        width: "100%",
        height: "450px",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        backgroundAttachment: "fixed",
        position: "relative",
    }
    return (
        <>
            <section className="banner-section" style={bannerImage}>
                <Container fluid className="px-0">
                    <div className="banner-title">
                        <h1>~Delicious Food~</h1>
                    </div>
                </Container>
            </section>
        </>
    )
}
