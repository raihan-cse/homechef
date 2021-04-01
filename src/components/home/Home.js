import React from 'react'
import Footer from '../footer/Footer'
import HomeCategories from './HomeCategories'
import One from './One'
import RandomProducts from './RandomProducts'

export default function Home() {
    return (
        <div>
            <One />
            <RandomProducts />
            <HomeCategories />
            <Footer />
        </div>
    )
}
