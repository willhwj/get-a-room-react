import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, FloatingLabel, Button } from 'react-bootstrap';

export default function SearchForm() {
    const navigate = useNavigate();
    const [formState, setFormState] = useState({
        'date': '',
        'startTime': '',
        'endTime': '',
        'roomTypeId': '',
        'numRooms': ''
    });
    function submitForm(){
        navigate('/payment-done', {
            state: formState
        }, {
            replace: false
        })
    }

    // function to update state variables based on user input
    const updateFormField = (event) => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        })
    }

    return (
        <React.Fragment>
            <h1>Home Page</h1>
            <p>Please select your preferred room type and book</p>
            <Form className='m-3'>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Select Date</Form.Label>
                    <Form.Control type="date" placeholder="click" name="date" value={formState.date} onChange={updateFormField} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Room Type</Form.Label>
                    <FloatingLabel controlId="floatingSelect" label="Which Room Type Do You Prefer?">
                        <Form.Select aria-label="Floating label select example" name="roomTypeId" value={formState.roomTypeId} onChange={updateFormField} >
                            <option>Click To Select</option>
                            <optgroup label="Up To 2 Pax">
                                <option value="1">Small Room</option>
                            </optgroup>
                            <optgroup label="Up To 5 Pax">
                                <option value="2">Medium Room</option>
                            </optgroup>
                            <optgroup label="Up To 8 Pax">
                                <option value="3">Big Room</option>
                                <option value="4">VIP Room</option>
                            </optgroup>
                        </Form.Select>
                    </FloatingLabel>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>How Many Rooms?</Form.Label>
                    <Form.Control type="number" placeholder="2" name="numRooms" value={formState.numRooms} onChange={updateFormField} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
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
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
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