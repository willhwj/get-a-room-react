import React, { useContext } from 'react';
import {Card, ListGroup} from 'react-bootstrap';
import ProfileContext from '../contexts/ProfileContext';

export default function CustomerInfo() {
    let context = useContext(ProfileContext);

    return (
        <React.Fragment>
            <p className="m-3">Dear {context.getCustInfo().firstName}, Welcome to your profile page </p>
            <Card style={{ width: '25rem' }}>
                <Card.Header>Personal Information</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>Full Name: {context.getCustInfo().firstName} {context.getCustInfo().lastName}</ListGroup.Item>
                    <ListGroup.Item>Email Address: {context.getCustInfo().email}</ListGroup.Item>
                    <ListGroup.Item>Phone Number: {context.getCustInfo().phone_number}</ListGroup.Item>
                    <ListGroup.Item>Account Status: {context.getCustInfo().status}</ListGroup.Item>
                </ListGroup>
            </Card>
            <p className="m-3">You may find a list of your past and future bookings below: </p>
        </React.Fragment>
    )
}