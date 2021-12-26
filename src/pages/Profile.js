import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import BookingList from '../components/BookingList'
import ProfileContext from '../contexts/ProfileContext';
import CustomerInfo from '../components/CustomerInfo';

export default function Profile() {
    const baseUrl = 'http://localhost:8888/api/';
    
    const [custInfo, setCustInfo] = useState({});
    // use effect to fetch customer details from the accessToken stored in localStorage
    useEffect(() => {
        const fetchCust = async () => {
            let response = await axios.get(baseUrl + 'customer/profile', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            setCustInfo(response.data);
        };
        fetchCust();
    }, [custInfo.firstName])

    const context = {
        getCustInfo: async ()=> {
            let id = custInfo.id;
            let response = await axios.get(baseUrl);
        }
    }

    return (
        <ProfileContext.Provider value={context}>
            {Object.keys(custInfo).length !== 0 ?
                <React.Fragment>
                    <h1 className="m-3" >Customer Profile Page</h1>
                    <CustomerInfo />
                    <BookingList />
                </React.Fragment>
                :
                <h1>You do not have access to this page. Please try logging in again.</h1>}
        </ProfileContext.Provider>
    )
}