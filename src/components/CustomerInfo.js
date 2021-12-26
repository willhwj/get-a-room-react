import React, { useContext } from 'react';
import ProfileContext from '../contexts/ProfileContext';

export default function CustomerInfo() {
    let context = useContext(ProfileContext);

    return (
        <React.Fragment>
            <p className="m-3">Dear {custInfo.firstName}, Welcome to your profile page </p>
            <p className="m-3">You may find a list of your past and future bookings below: </p>
        </React.Fragment>
    )
}