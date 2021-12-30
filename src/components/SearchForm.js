import React, { useState, useContext, useEffect } from 'react';
import ShoppingContext from '../contexts/ShoppingContext';
import { Form, FloatingLabel, Button, Offcanvas, Row, Col } from 'react-bootstrap';
import axios from 'axios';

export default function SearchForm() {
    const context = useContext(ShoppingContext);
    const [formState, setFormState] = useState({
    });
    const baseUrl = 'http://localhost:8888/api/shopping';
    async function submitForm() {
        let response = await axios.post(baseUrl, formState);
        // send the updated product list to the ShoppingContect
        context.updateProductList(response.data);
    }

    // use effect to trigger display of product list
    useEffect(() => {
        const fetchProductList = async () => {
            let response = await axios.post(baseUrl, formState);
            // send the updated product list to the ShoppingContect
            context.updateProductList(response.data);
        };
        fetchProductList();
    }, [])

    // function to update state variables based on user input
    const updateFormField = (event) => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        })
    }

    // bootstrap form validation
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        console.log(form);
        console.log(form.checkValidity());
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    // variables to control offcanvas bootstrap componennt
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <React.Fragment>
            <div className='m-2' >
                <h1>Home Page</h1>
                <p>Please select your preferred room type and book</p>
                <Button variant="primary" onClick={handleShow} className="me-2">
                    Filter
                </Button>
                <Offcanvas show={show} onHide={handleClose} placement="top" scroll>
                    <Offcanvas.Header closeButton className='pb-0 mb-0 fw-bold' >
                        Filter Criteria
                    </Offcanvas.Header>
                    <Offcanvas.Body className='pt-0 mt-0' >
                        <Form className='mx-2 my-0 px-1 pt-1 pb-0' noValidate validated={validated} onSubmit={handleSubmit} >
                            <Form.Group as={Row} className="mb-3" controlId="validationCustom01">
                                <Form.Label column className='fs-6' >Select Date</Form.Label>
                                <Col sm={10}>
                                    <Form.Control required size="sm" type="date" placeholder="click" name="date" value={formState.date} onChange={updateFormField} />
                                    <Form.Control.Feedback type="invalid">
                                        Please choose a date.
                                    </Form.Control.Feedback>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column className='fs-6'>Room Type</Form.Label>
                                <Col sm={10}>
                                    <FloatingLabel controlId="floatingSelect" label="Which Room Type Do You Prefer?">
                                        <Form.Select size="sm" aria-label="Floating label select example" name="roomTypeId" value={formState.roomTypeId} onChange={updateFormField} >
                                            <option value='' >Click To Select</option>
                                            <optgroup label="Up To 2 Pax">
                                                <option value="1">Small Room</option>
                                            </optgroup>
                                            <optgroup label="Up To 5 Pax">
                                                <option value="2">Medium Room</option>
                                            </optgroup>
                                            <optgroup label="Up To 8 Pax">
                                                <option value="3">Large Room</option>
                                                <option value="4">VIP Room</option>
                                            </optgroup>
                                        </Form.Select>
                                    </FloatingLabel>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column className='fs-6'>How Many Rooms?</Form.Label>
                                <Col sm={10}>
                                    <Form.Control size="sm" type="number" placeholder="2" name="numRooms" value={formState.numRooms} onChange={updateFormField} />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column className='fs-6'>Start Time</Form.Label>
                                <Col sm={10}>
                                    <FloatingLabel controlId="floatingSelect" label="What Time Will You Check In?">
                                        <Form.Select size="sm" aria-label="Floating label select example" name="startTime" value={formState.startTime} onChange={updateFormField}  >
                                            <option>Click To Select</option>
                                            <optgroup label="Morning">
                                                <option value="08:00:00">8:00am</option>
                                                <option value="09:00:00">9:00am</option>
                                                <option value="10:00:00">10:00am</option>
                                                <option value="11:00:00">11:00am</option>
                                                <option value="12:00:00">12:00pm</option>
                                            </optgroup>
                                            <optgroup label="Afternoon">
                                                <option value="13:00:00">1:00pm</option>
                                                <option value="14:00:00">2:00pm</option>
                                                <option value="15:00:00">3:00pm</option>
                                                <option value="16:00:00">4:00pm</option>
                                                <option value="17:00:00">5:00pm</option>
                                            </optgroup>
                                            <optgroup label="Evening">
                                                <option value="18:00:00">6:00pm</option>
                                                <option value="19:00:00">7:00pm</option>
                                                <option value="20:00:00">8:00pm</option>
                                                <option value="21:00:00">9:00pm</option>
                                                <option value="22:00:00">10:00pm</option>
                                            </optgroup>
                                        </Form.Select>
                                    </FloatingLabel>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column className='fs-6'>End Time</Form.Label>
                                <Col sm={10}>
                                    <FloatingLabel controlId="floatingSelect" label="What Time Will You Check Out?">
                                        <Form.Select size="sm" aria-label="Floating label select example" name="endTime" value={formState.endTime} onChange={updateFormField}  >
                                            <option>Click To Select</option>
                                            <optgroup label="Morning">
                                                <option value="09:00:00">9:00am</option>
                                                <option value="10:00:00">10:00am</option>
                                                <option value="11:00:00">11:00am</option>
                                                <option value="12:00:00">12:00pm</option>
                                            </optgroup>
                                            <optgroup label="Afternoon">
                                                <option value="13:00:00">1:00pm</option>
                                                <option value="14:00:00">2:00pm</option>
                                                <option value="15:00:00">3:00pm</option>
                                                <option value="16:00:00">4:00pm</option>
                                                <option value="17:00:00">5:00pm</option>
                                            </optgroup>
                                            <optgroup label="Evening">
                                                <option value="18:00:00">6:00pm</option>
                                                <option value="19:00:00">7:00pm</option>
                                                <option value="20:00:00">8:00pm</option>
                                                <option value="21:00:00">9:00pm</option>
                                                <option value="22:00:00">10:00pm</option>
                                                <option value="23:00:00">11:00pm</option>
                                            </optgroup>
                                        </Form.Select>
                                    </FloatingLabel>
                                </Col>
                            </Form.Group>
                            <Button variant="primary" type="submit" className="m-0 p-1">
                                Search
                            </Button>
                        </Form>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
        </React.Fragment>
    )
}