import React, { useContext, useState } from 'react'
import { Nav } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import { UserAuthContext } from '../App'
import LoginButton from './LoginButton'
import PostNew from '../components/PostNew'

function Header() {
  const { user } = useContext(UserAuthContext)
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <Navbar className="navBar">
        <Navbar.Brand className="navBar__title">Affirmations</Navbar.Brand>
        <Nav>
          {user && (
            <button onClick={() => setShowModal(true)}>
              <img
                className="add-button"
                src="../../favicon.png"
                alt="add new"
              />
            </button>
          )}
          &nbsp;
          <Nav.Link>
            <LoginButton />{' '}
          </Nav.Link>
        </Nav>
      </Navbar>
      <PostNew show={showModal} onHide={() => setShowModal(false)}></PostNew>
    </>
  )
}

export default Header
