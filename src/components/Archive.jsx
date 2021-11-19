import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

const Archive = ({call}) => {
  return (
    <Accordion className="activity-main">
      <Accordion.Item eventKey={call.id}>
        <Accordion.Header>
        {call.direction} {call.direction === "outbound" ? call.to : call.from}
        </Accordion.Header>
        <Accordion.Body>
        <div>{call.call_type} call </div>
        <div>{call.duration} seconds </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

export default Archive
