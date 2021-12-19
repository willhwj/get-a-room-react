import React from 'react';
import {useLocation} from 'react-router-dom';

export default function FormSubmitted(){
    const location = useLocation();
    let firstName = location.state.firstName;
    let email = location.state.email;
    
    return (
        <React.Fragment>
            <h1>Successfully Sumbitted</h1>
            <p>Thank you for contacting us, {firstName}. We will get back to you within 3 business days by emailling {email}</p>
        </React.Fragment>
    )
}