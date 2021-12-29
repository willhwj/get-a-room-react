import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap';
import ShoppingContext from '../contexts/ShoppingContext';
import jwt_decode from 'jwt-decode';

export default function Login() {
    const navigate = useNavigate();
    const [loginForm, setFormState] = useState({
        'email': '',
        'password': '',
        'errorMsg': false
    });
    const context = useContext(ShoppingContext);
    async function submitForm() {
        let url = 'http://localhost:8888/api/customer/login';
        try {
            const response = await axios.post(url, {
                "email": loginForm.email,
                "password": loginForm.password
            });
            if (response.status === 200) {
                localStorage.setItem("accessToken", response.data);
                navigate('/profile');
            }
        } 
        // in case of error, set errorMsg state variable to true, which triggers alert
        catch (error){
            setFormState({
                ...loginForm,
                'errorMsg': true
            })
        }
    };

    // function to update state variables based on user input
    const updateFormField = (event) => {
        setFormState({
            ...loginForm,
            [event.target.name]: event.target.value
        })
    }

    return (
        <Form className="m-3">
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" value={loginForm.email} onChange={updateFormField} />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" value={loginForm.password} onChange={updateFormField} />
            </Form.Group>
            <Button variant="primary" onClick={submitForm} className="m-3">
                Submit
            </Button>
            {loginForm.errorMsg ?
                <Alert variant='danger'>
                    Your password and/or email do not match our record. Please try again.
                </Alert>
                : null
            }
        </Form>
    )
}