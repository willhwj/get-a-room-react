import React, { useState, useContext } from 'react';
import ShoppingContext from '../contexts/ShoppingContext';
import { Form, FloatingLabel, Button, InputGroup } from 'react-bootstrap';
import axios from 'axios';

export default function SearchForm() {
    const context = useContext(ShoppingContext);
    const [formState, setFormState] = useState({
        // 'date': '',
        // 'startTime': '',
        // 'endTime': '',
        // 'roomTypeId': '',
        // 'numRooms': ''
    });
    async function submitForm() {
        let url = 'http://localhost:8888/api/shopping';
        console.log(formState);
        let response = await axios.post(url, formState);
        console.log(response.data);
        // send the updated product list to the ShoppingContect
        context.updateProductList(response.data);
    }

    // function to update state variables based on user input
    const updateFormField = (event) => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        })
    }

    // const [validated, setValidated] = useState(false);
    // const handleSubmit = (event) => {
    //     const form = event.currentTarget;
    //     if (form.checkValidity() === false) {
    //         event.preventDefault();
    //         event.stopPropagation();
    //     }
    //     setValidated(true);
    // };

    return (
        <React.Fragment>
            <h1>Home Page</h1>
            <p>Please select your preferred room type and book</p>
            <Form className='m-3'>
                <Form.Group className="mb-3" controlId="validationCustom01">
                    <Form.Label>Select Date</Form.Label>
                    <Form.Control required type="date" placeholder="click" name="date" value={formState.date} onChange={updateFormField} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Room Type</Form.Label>
                    <FloatingLabel controlId="floatingSelect" label="Which Room Type Do You Prefer?">
                        <Form.Select aria-label="Floating label select example" name="roomTypeId" value={formState.roomTypeId} onChange={updateFormField} >
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
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>How Many Rooms?</Form.Label>
                    <Form.Control type="number" placeholder="2" name="numRooms" value={formState.numRooms} onChange={updateFormField} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Start Time</Form.Label>
                    <FloatingLabel controlId="floatingSelect" label="What Time Will You Check In?">
                        <Form.Select aria-label="Floating label select example" name="startTime" value={formState.startTime} onChange={updateFormField}  >
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
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>End Time</Form.Label>
                    <FloatingLabel controlId="floatingSelect" label="What Time Will You Check Out?">
                        <Form.Select aria-label="Floating label select example" name="endTime" value={formState.endTime} onChange={updateFormField}  >
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
                </Form.Group>
            </Form>
            <Button variant="primary" type="submit" className="m-3" onClick={submitForm}>
                Book Now
            </Button>
        </React.Fragment>
    )
}