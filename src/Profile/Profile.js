import React from 'react'
import {Card,Button} from "react-bootstrap"
export const Profile = (props) => {
  return (
    
    <div>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>{props.name}</Card.Title>
    <Card.Text>
      {props.bio}
    </Card.Text>
    <Card.Text>
      {props.profession}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    </div>
  )
}

