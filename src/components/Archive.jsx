import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import { VscCallIncoming, VscCallOutgoing } from 'react-icons/vsc';
import { MdAccessTime } from 'react-icons/md';

const Archive = ({call, handleClick}) => {

  const parsedTime = new Date(call.created_at).toLocaleTimeString("en-US");

  const DateOptions = { year: 'numeric', month: 'short', day: 'numeric'};
  const parsedDate = new Date(call.created_at).toLocaleDateString("en-US", DateOptions);
  
  return (
    <Accordion.Item eventKey={call.id}>
      <Accordion.Header>              
        {call.direction === "outbound" ? 
          <VscCallOutgoing style={{maxHeight: '15px', maxWidth: '15px', marginRight: '5px'}}/> : <VscCallIncoming style={{maxHeight: '15px', maxWidth: '15px', marginRight: '10px'}}/>} 
        {call.direction === "outbound" ? call.to : call.from} 
        <MdAccessTime style={{maxHeight: '15px', maxWidth: '15px', marginLeft: '20px', marginRight: '5px'}}/> {parsedTime}
      </Accordion.Header>
      <Accordion.Body className="px-1">
        <div className="call-body">
          <p>Call status: {call.call_type} | Call Date: {parsedDate}</p>
          <p>Duration: {call.duration} seconds | From: {call.from ? call.from : "N/A"}</p>
          <p style={{marginBottom: '0px'}}><Button variant="outline-success" size="sm" onClick={e => handleClick(call.id)}>Undo Archive</Button> </p>
        </div>
      </Accordion.Body>
    </Accordion.Item>
  )
}

export default Archive
