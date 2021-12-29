import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import OrderList from '../components/OrderList'
import ProfileContext from '../contexts/ProfileContext';
import CustomerInfo from '../components/CustomerInfo';
import {Button} from 'react-bootstrap';

export default function Profile() {
    const baseUrl = 'http://localhost:8888/api/';
    const navigate = useNavigate();
    
    const [custInfo, setCustInfo] = useState({});
    const [orderList, setOrderList] = useState([]);
    // use effect to fetch customer details from the accessToken stored in localStorage, and get list of orders
    useEffect(() => {
        const fetchCust = async () => {
            try{
                let response = await axios.get(baseUrl + 'customer/profile', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                setCustInfo(response.data);
                let customerId = response.data.id;
                response = await axios.get(baseUrl + 'customer/orders/' + customerId);
                setOrderList(response.data);
            } catch (e){
                console.log(e.message);
                navigate('/login');
            }
        };
        fetchCust();
    }, [custInfo.firstName])

    const context = {
        getCustInfo: ()=> {
            return custInfo;
        },
        logout: ()=> {
            localStorage.removeItem('accessToken');
            setCustInfo({});
            navigate('/login');
        },
        getOrderList: ()=> {
            return orderList;
        }
    }

    return (
        <ProfileContext.Provider value={context}>
            {Object.keys(custInfo).length !== 0 ?
                <React.Fragment>
                    <h1 className="m-3" >Customer Profile Page</h1>
                    <Button variant='secondary' className='py-0 px-1' onClick={context.logout} >Log Out</Button>
                    <CustomerInfo />
                    <OrderList />
                </React.Fragment>
                :
                navigate('/login')
                }
        </ProfileContext.Provider>
    )
}