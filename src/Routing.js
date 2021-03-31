import React from 'react'
import { Route, Switch } from 'react-router'
import Home from './components/home/Home'
import AboutUs from './components/pages/AboutUs'
import Shop from './components/pages/Shop'
import ContactUs from './components/pages/ContactUs'
import NotFound from './components/pages/NotFound'

export default function Routing() {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/AboutUs' component={AboutUs} />
                <Route exact path='/Shop' component={Shop} />
                <Route exact path='/ContactUs' component={ContactUs} />
                <Route component={NotFound} />
            </Switch>
        </div>
    )
}
