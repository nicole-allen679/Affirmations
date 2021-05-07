import React, { useState, useContext } from 'react'
import Modal from 'react-bootstrap/Modal'
import { UserAuthContext } from '../App'

function PostNew(props) {
  const [newText, setNewText] = useState('')
  const { user } = useContext(UserAuthContext)
  const handlePost = () => {
    const newAffirmation = {
      text: newText,
      uid: user.uid,
      displayName: user.displayName,
      photoUrl: user.photoURL,
    }
    fetch('https://affirm-bc-api.web.app/affirmations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newAffirmation),
    })
      .then((response) => response.json())
      .then((data) => {
        setNewText('')
        props.onHide()
        console.log(data)
      })
      .catch((err) => console.log(err))
  }
  return (
    <Modal {...props} centered>
      <Modal.Header closeButton>
        <Modal.Title>Post your Affirmation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <textarea
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          rows="3"
          cols="40"
          placeholder="Your Affirmation Here"
        ></textarea>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={() => handlePost}>Post</button>
      </Modal.Footer>
    </Modal>
  )
}

export default PostNew
