import React, {uesEffect, useState} from 'react';
import { ListGroup} from 'react-bootstrap';

export default function PaymentDone() {
    // const [order, setOrder] = useState({});
    // const baseUrl = 'http://localhost:8888/api/';
    // // const baseUrl = 'https://get-a-room-hwj.herokuapp.com/api/'; 

    // // use effect to call API for order details from backend express server
    // useEffect(()=> {
    //     const fetchOrder = async () =>{
    //         let response = await axios.get(baseUrl + )
    //     }
    // })

    return (
        <React.Fragment>
            <h1 className="m-3" >Your booking is successful!</h1>
            <p className="m-3" >Thank you for booking with us. Please go to <a href='/profile'>My Profile page</a> to view all your orders. </p>
            {/* <ListGroup variant="flush" className="m-3" >
                <ListGroup.Item>Date of Visit: {date} </ListGroup.Item>
                <ListGroup.Item>Starting Time: {startTime} </ListGroup.Item>
                <ListGroup.Item>Ending Time: {endTime} </ListGroup.Item>
                <ListGroup.Item>Room Type: {roomTypeId} </ListGroup.Item>
                <ListGroup.Item>Number of Rooms Booked: {numRooms} </ListGroup.Item>
            </ListGroup> */}
        </React.Fragment>
    )


}