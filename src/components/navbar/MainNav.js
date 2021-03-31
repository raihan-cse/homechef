import React from 'react'
import './MainNav.scss'
import { Navbar, Nav } from 'react-bootstrap'
import {NavLink} from 'react-router-dom'

export default function MainNav() {
    return (
        <Navbar>
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav as="ul">
                {/* <Nav.Item as="li">
                    <NavLink className="nav-link" exact to='/'>Home</NavLink>
                </Nav.Item> */}
                <Nav.Item as="li">
                    <NavLink className="nav-link" exact to='/AboutUs'>About Us</NavLink>
                </Nav.Item>
                <Nav.Item as="li">
                    <NavLink className="nav-link" exact to='/Shop'>Shop</NavLink>
                </Nav.Item>
                <Nav.Item as="li">
                    <NavLink className="nav-link" exact to='/ContactUs'>Contact Us</NavLink>
                </Nav.Item>
            </Nav>
        </Navbar>
    )
}
