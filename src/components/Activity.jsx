import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { VscCallIncoming, VscCallOutgoing } from 'react-icons/vsc';

const Activity = ({call}) => {  

  return (    
    <Accordion.Item eventKey={call.id}>
      <Accordion.Header>              
        {call.direction === "outbound" ? 
          <VscCallOutgoing style={{maxHeight: '20px', maxWidth: '20px', marginRight: '10px'}}/> : <VscCallIncoming style={{maxHeight: '20px', maxWidth: '20px', marginRight: '10px'}}/>} 
        {call.direction === "outbound" ? call.to : call.from}
      </Accordion.Header>
      <Accordion.Body>
        <div>{call.call_type} call </div>
        <div>{call.duration} seconds </div>
      </Accordion.Body>
    </Accordion.Item>   
  )
}

export default Activity
