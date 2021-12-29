import React, { useContext } from 'react';
import { Accordion, Card, ListGroup } from 'react-bootstrap';
import ProfileContext from '../contexts/ProfileContext';
import moment from 'moment';

export default function OrderList() {
    let context = useContext(ProfileContext);

    return (
        <React.Fragment>
            {context.getOrderList().map(eachOrder =>
                <Card>
                    <Card.Body>
                        <Card.Title>Order Reserved On {moment(eachOrder.create_time).format('YYYY-MM-DD h:mm a') }</Card.Title>
                        <Card.Text>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Status: {eachOrder.status} </ListGroup.Item>
                                <ListGroup.Item>Total Price: {eachOrder.amount_paid} SGD </ListGroup.Item>
                                <ListGroup.Item>Number of Hours: {eachOrder.cartItems.length} </ListGroup.Item>
                            </ListGroup>
                            <Accordion defaultActiveKey="0" className="m-3">
                                {eachOrder.cartItems.map(eachItem =>
                                    <Accordion.Item eventKey={eachItem.id} >
                                        <Accordion.Header>{eachItem.room_type_name} For Use At {moment(eachItem.timeslot).format('YYYY-MM-DD h:mm a')} </Accordion.Header>
                                        <Accordion.Body>
                                            <ListGroup variant="flush">
                                                <ListGroup.Item>Status: {eachItem.status} </ListGroup.Item>
                                                <ListGroup.Item>Unit Price: {eachItem.price} </ListGroup.Item>
                                                <ListGroup.Item>Number of Rooms Ordered: {eachItem.quantity}  </ListGroup.Item>
                                            </ListGroup>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                )}
                            </Accordion>
                        </Card.Text>
                    </Card.Body>
                </Card>
            )}
        </React.Fragment>
    )
}