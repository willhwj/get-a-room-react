import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

export default function Login() {
    const navigate = useNavigate();
    const [registerForm, setFormState] = useState({
        'firstName': '',
        'lastName': '',
        'email': '',
        'password': '',
        'phone':'',
        'errorMsg': false
    });
    async function submitForm() {
        let url = 'http://localhost:8888/api/customer/create';
        try {
            const response = await axios.post(url, {
                'firstName': registerForm.firstName,
                'lastName': registerForm.lastName,
                'email': registerForm.email,
                'password': registerForm.password,
                'phone': registerForm.phone
            });
            if (response.status ===200) {
                localStorage.setItem("accessToken", response.data);
                navigate('/profile');
            }
        }
        catch (error){
            setFormState({
                ...registerForm,
                'errorMsg': true
            })
        }
    }

    // function to update state variables based on user input
    const updateFormField = (event) => {
        setFormState({
            ...registerForm,
            [event.target.name]: event.target.value
        })
    }

    return (
        <Form className="m-3">
            <Form.Group className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="First Name" name='firstName' value={registerForm.firstName} onChange={updateFormField} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Last Name" name='lastName' value={registerForm.lastName} onChange={updateFormField} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" value={registerForm.email} onChange={updateFormField} />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" value={registerForm.password} onChange={updateFormField} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="phone" placeholder="Enter phone number" name="phone" value={registerForm.phone} onChange={updateFormField} />
                <Form.Text className="text-muted">
                    We'll never share your phone number with anyone else.
                </Form.Text>
            </Form.Group>
            <Button variant="primary" onClick={submitForm} >
                Register
            </Button>
        </Form>
    )
}