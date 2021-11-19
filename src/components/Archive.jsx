import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import { VscCallIncoming, VscCallOutgoing } from 'react-icons/vsc';

const Archive = ({call}) => {
  return (
    <Accordion.Item eventKey={call.id}>
      <Accordion.Header>              
        {call.direction === "outbound" ? 
          <VscCallOutgoing style={{maxHeight: '20px', maxWidth: '20px', marginRight: '10px'}}/> : <VscCallIncoming style={{maxHeight: '20px', maxWidth: '20px', marginRight: '10px'}}/>} 
        {call.direction === "outbound" ? call.to : call.from}
      </Accordion.Header>
      <Accordion.Body>
        <div className="call-body">
          <p>Call status: {call.call_type} call | Call Via: {call.via}</p>
          <p>Duration: {call.duration} seconds | From: {call.from ? call.from : "N/A"}</p>
          <p style={{marginBottom: '0px'}}><Button variant="outline-success" size="sm">Undo Archive</Button> </p>
        </div>
      </Accordion.Body>
    </Accordion.Item>
  )
}

export default Archive
