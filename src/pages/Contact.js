import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

export default function Contact() {
    const navigate = useNavigate();

    const [formState, setFormState] = useState({
        'firstName': '',
        'lastName': '',
        'email': '',
        'inquiryType': [],
        'inquiryContent': ''
    })
    function submitForm() {
        navigate('/form-submitted', {
            state: formState
        }, {
            replace: false
        })
    }

    // function to update state variables based on user input
    const updateFormField = (event) => {
        if (event.target.type !== 'checkbox') {
            // update normal text fields
            setFormState({
                ...formState,
                [event.target.name]: event.target.value
            })
        } else {
            // update checkbox array
            if (formState.inquiryType.includes(event.target.value)) {
                setFormState({
                    ...formState,
                    [event.target.name]: formState.inquiryType.filter(type => type !== event.target.value)
                })
            } else {
                setFormState({
                    ...formState,
                    [event.target.name]: [...formState.inquiryType, event.target.value]
                })
            }
        }
    }

    return (
        <React.Fragment>
            <h1 className='m-2'>Contact Us</h1>
            <Form className='m-2'>
                <Form.Group className="mb-3">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="First Name" name='firstName' value={formState.firstName} onChange={updateFormField}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Last Name" name='lastName' value={formState.lastName} onChange={updateFormField}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name='email' value={formState.email} onChange={updateFormField}/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Inquiry Type</Form.Label>
                    <div key="inline-checkbox" className="mb-3">
                        <Form.Check
                            inline label="booking" type="checkbox" id="inline-checkbox-1" name='inquiryType' value='booking' checked={formState.inquiryType.includes('booking')} onClick={updateFormField}
                        />
                        <Form.Check
                            inline label="feedback" type="checkbox" id="inline-checkbox-2" name='inquiryType' value='feedback' checked={formState.inquiryType.includes('feedback')} onClick={updateFormField}
                        />
                        <Form.Check
                            inline label="compliment" type="checkbox" id="inline-checkbox-3" name='inquiryType' value='compliment' checked={formState.inquiryType.includes('compliment')} onClick={updateFormField}
                        />
                    </div>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Inquiry Content</Form.Label>
                    <Form.Control as="textarea" placeholder="Type Your Inquiry Here" name='inquiryContent' value={formState.inquiryContent} onChange={updateFormField}/>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={submitForm}>
                    Submit
                </Button>
            </Form>
            {/* <div> */}
                {/* <div>
                    <label>First Name</label>
                    <input type='text' name='firstName' value={formState.firstName} onChange={updateFormField} />
                </div>
                <div>
                    <label>Last Name</label>
                    <input type='text' name='lastName' value={formState.lastName} onChange={updateFormField} />
                </div>
                <div>
                    <label>Email Address</label>
                    <input type='text' name='email' value={formState.email} onChange={updateFormField} />
                </div> */}
                {/* <div>
                    <label>Inquiry Type</label>
                    <input type='checkbox' name='inquiryType' value='booking' checked={formState.inquiryType.includes('booking')} onClick={updateFormField} />Sales
                    <input type='checkbox' name='inquiryType' value='feedback' checked={formState.inquiryType.includes('feedback')} onClick={updateFormField} />feedback
                    <input type='checkbox' name='inquiryType' value='compliment' checked={formState.inquiryType.includes('compliment')} onClick={updateFormField} />Compliment
                </div> */}
                {/* <div>
                    <label>Inquiry Content</label>
                    <textarea type='text' name='inquiryContent' value={formState.inquiryContent} onChange={updateFormField} ></textarea>
                </div> */}
                {/* <input type='button' onClick={submitForm} />Submit
            </div> */}
        </React.Fragment>
    )
}