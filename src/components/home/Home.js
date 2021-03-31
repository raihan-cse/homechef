import React from 'react'
import HomeCategories from './HomeCategories'
import One from './One'
import RandomProducts from './RandomProducts'

export default function Home() {
    return (
        <div>
            <One />
            <RandomProducts />
            <HomeCategories />
        </div>
    )
}
