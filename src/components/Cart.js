import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Table, Button, Alert } from 'react-bootstrap';
import ShoppingContext from '../contexts/ShoppingContext';
import moment from 'moment';

export default function Cart() {
    const context = useContext(ShoppingContext);
    return (
        <React.Fragment>
            {context.getCartItems().length === 0 ? null :
                <Card className='m-3' style={{ width: '18rem' }}>
                    <Table className='m-0' striped size="sm">
                        <thead>
                            <tr>
                                <th>Room Type Name</th>
                                <th>Timeslot</th>
                                <th>Quantity</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {context.getCartItems().map(item => (
                                <tr key={item.id} >
                                    <td>{item.room_type_name}</td>
                                    <td>{moment(item.timeslot).format('YYYY-MM-DD h:mm a')} </td>
                                    <td>{item.quantity} </td>
                                    <td>
                                        <Button className='py-0 px-1 ms-1 btn-secondary' onClick={() => context.adjustQuantity(item.id, 1)} >+</Button>
                                        <Button className='py-0 px-1 ms-1 btn-secondary' onClick={() => context.adjustQuantity(item.id, -1)} >-</Button>
                                        {item.quantity === item.inventory ?
                                            <Alert className='m-0 py-0 px-1' variant='danger'>
                                                <span>Max Quantity</span>
                                            </Alert>
                                            : null}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <Button className='py-0 px-1 ms-1 btn-secondary' onClick={context.checkout} >Make Payment</Button>
                </Card>
            }
        </React.Fragment>
    )
}