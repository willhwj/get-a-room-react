import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

export default function Login() {
    const navigate = useNavigate();
    const [formState, setFormState] = useState({
        'firstName': '',
        'lastName': '',
        'email': '',
        'password': ''
    });
    function submitForm() {
        navigate('/profile', {
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
        <Form className="m-3">
            <Form.Group className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="First Name" name='firstName' value={formState.firstName} onChange={updateFormField} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Last Name" name='lastName' value={formState.lastName} onChange={updateFormField} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" value={formState.email} onChange={updateFormField} />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" value={formState.password} onChange={updateFormField} />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={submitForm} >
                Register
            </Button>
        </Form>
    )
}