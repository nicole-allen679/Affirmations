import React from 'react'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'

function AffirmationCard({ affirmation }){
    return (
    <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>
        { affirmation.Title }
      </Card.Title>
      <Card.Text className="text-right"> 
      { affirmation.displayName}
      
      </Card.Text>
    </Card.Body>
  </Card>
  )
}

export default AffirmationCard