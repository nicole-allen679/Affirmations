import React from 'react'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'

function AffirmationCard({ affirmation }){
    return (
    <Card style={{ width: '20rem', height: '15rem' }}>
    <Card.Body>
      <Card.Title className="text-center">
        { affirmation.text }
      </Card.Title>
      <Card.Text className="text-right"> <br/>
      { affirmation.displayName }
      <Image className='googleImg' src={affirmation.photoUrl} roundedCircle />
      </Card.Text>
    </Card.Body>
  </Card>
  )
}

export default AffirmationCard