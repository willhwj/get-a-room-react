import React, { useState, useContext } from 'react';
import { Card, Table, Button, Alert, Modal, Form } from 'react-bootstrap';
import ShoppingContext from '../contexts/ShoppingContext';
import moment from 'moment';

export default function Cart() {
    const context = useContext(ShoppingContext);

    // to control display modal for login
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                    {context.getLoginPop() ?
                        <Button variant="primary" onClick={handleShow}>
                            Login Now
                        </Button>
                        : null
                    }

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form className="m-3">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" name="email" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" name="password" />
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <div>Do not have account? <a href='/profile' >Create one now!</a> </div>
                            <div>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={handleClose}>
                                    Login
                                </Button>
                            </div>
                        </Modal.Footer>
                    </Modal>
                </Card>
            }
        </React.Fragment>
    )
}