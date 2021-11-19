import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { VscCallIncoming, VscCallOutgoing } from 'react-icons/fa';

const Activity = ({call}) => {  
  return (
    <Accordion>
      <Accordion.Item eventKey={call.id}>
        <Accordion.Header>
          {call.direction === "outbound"? <VscCallOutgoing/> : <VscCallIncoming/>} 
          {call.direction === "outbound" ? call.to : call.from}
        </Accordion.Header>
        <Accordion.Body>
          <div>{call.call_type} call </div>
          <div>{call.duration} seconds </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

export default Activity
