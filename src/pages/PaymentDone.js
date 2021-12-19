import React from 'react';
import { useLocation } from 'react-router-dom';
import { ListGroup} from 'react-bootstrap';

export default function PaymentDone() {
    const location = useLocation();
    const { date, startTime, endTime, roomTypeId, numRooms } = location.state;

    return (
        <React.Fragment>
            <h1 className="m-3" >Your booking is successful!</h1>
            <p className="m-3" >Thank you for booking with us. Here is your booking details:</p>
            <ListGroup variant="flush" className="m-3" >
                <ListGroup.Item>Date of Visit: {date} </ListGroup.Item>
                <ListGroup.Item>Starting Time: {startTime} </ListGroup.Item>
                <ListGroup.Item>Ending Time: {endTime} </ListGroup.Item>
                <ListGroup.Item>Room Type: {roomTypeId} </ListGroup.Item>
                <ListGroup.Item>Number of Rooms Booked: {numRooms} </ListGroup.Item>
            </ListGroup>
        </React.Fragment>
    )


}