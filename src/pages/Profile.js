import React, {useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { Accordion, Card } from 'react-bootstrap';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

export default function Profile() {
    // const location = useLocation();
    // const { email, password } = location.state;

    // // API call to verify email & password
    // useEffect(() => {
    //     let url = 'http://localhost:8888/api/customer/login/';
    //     const validate = async (email, password) => {
    //         console.log('111');
    //         const response = await axios.get(`${url}:${email}/:${password}`);
    //         console.log('222');
    //         console.log(response.data);
    //     };
    //     validate(email, password);
    // }, [email, password])

    let customer = jwt_decode(localStorage.getItem('accessToken'));
    console.log(customer);

    return (
        <React.Fragment>
            <h1 className="m-3" >Customer Profile Page</h1>
            <p className="m-3">Dear {customer.firstName} Welcome to your profile page </p>
            <p className="m-3">You may find a list of your past and future bookings below: </p>
            <Card>
                <Card.Body>
                    <Card.Title>Today's Bookings</Card.Title>
                    <Card.Text>
                        <Accordion defaultActiveKey="0" className="m-3">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Accordion Item #1</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                    est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Accordion Item #2</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                    est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <Card.Title>Future Bookings</Card.Title>
                    <Card.Text>
                        <Accordion className="m-3">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Accordion Item #1</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                    est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Accordion Item #2</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                    est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <Card.Title>Past Bookings</Card.Title>
                    <Card.Text>
                        <Accordion className="m-3">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Accordion Item #1</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                    est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Accordion Item #2</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                    est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Card.Text>
                </Card.Body>
            </Card>

        </React.Fragment>
    )
}