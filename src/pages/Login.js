import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Form, Button} from 'react-bootstrap';

export default function Login() {
    const navigate = useNavigate();
    const [formState, setFormState] = useState({
        'email': '',
        'password': ''
    });
    // function submitForm(){
    //     navigate('/profile', {
    //         state: formState
    //     }, {
    //         replace: false
    //     })
    // }

    // function to update state variables based on user input
    const updateFormField = (event) => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        })
    }

    // API call to verify email & password
    useEffect( ()=> {
        let url='http://localhost:8888/api/customer/login/';
        const validate= async(email, password) => {
            const response = await axios.get(`${url}:${email}:${password}`);
            console.log(response.data);
        };
        validate(formState.email, formState.password);
    }, [formState.email])

    return (
        <Form className="m-3">
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
            <Button variant="primary" type="submit" onClick={()=>useEffect} >
                Submit
            </Button>
        </Form>
    )
}