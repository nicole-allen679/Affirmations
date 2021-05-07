import React, { useContext } from 'react'
import { Nav } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import { UserAuthContext } from '../App'
import LoginButton from './LoginButton'

function Header(){
    const { user } = useContext(UserAuthContext)
    return (
        <Navbar className="justify-content-between">
            <Navbar.Brand>Affirmations</Navbar.Brand>
            <Nav>
                {user && <button className="add-button" >+</button>}&nbsp;
                <Nav.Link><LoginButton /> </Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default Header