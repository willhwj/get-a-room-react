import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, FloatingLabel, Button } from 'react-bootstrap';
import ShoppingContext from '../contexts/ShoppingContext';
import SearchForm from '../components/SearchForm';
import ProductDisplay from '../components/ProductDisplay';
import Cart from '../components/Cart';
import ConfirmedOrder from '../components/ConfirmedOrder';
import context from 'react-bootstrap/esm/AccordionContext';

export default function Home() {
    // state variables for all available room type slots
    const [productList, setProductList] = useState([]);
    // state variables for selected room type slots into the cart
    const [cart, setCart] = useState([]);
    // state variables to track if customer has logged in
    const [customer, setCustomer] = useState({});
    // 
    const [cartStatus, setCartStatus] = useState('');
    // state variable to track if order is confirmed
    const [order, setOrder] = useState({});

    // context for all shopping related state changes
    const context = {
        
    }

    return (
        <ShoppingContext.Provider value={context}>
            {Object.keys(order).length === 0 ?
                <React.Fragment>
                    <SearchForm />
                    <ProductDisplay />
                    <Cart />
                </React.Fragment>
                :
                <ConfirmedOrder />
            }
        </ShoppingContext.Provider>
    )
}