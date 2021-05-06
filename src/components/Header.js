import React from 'react'
import { Nav } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import LoginButton from './LoginButton'

function Header(){
    return (
        <Navbar className="justify-content-between">
            <Navbar.Brand>Affirmations</Navbar.Brand>
            <Nav>
                <Nav.Link>+</Nav.Link>
                <Nav.Link><LoginButton /> </Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default Header