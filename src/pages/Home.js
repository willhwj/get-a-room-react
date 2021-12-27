import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, FloatingLabel, Button, Table } from 'react-bootstrap';
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
        updateProductList: (newList) => {
            setProductList(newList);
            console.log(productList);
        },
        getProductList: () => {
            return productList;
        },
        addToCart: (product) => {
            if (cart.length === 0 || cart.findIndex(item => item.id === product.id) < 0) {
                let cloned = {
                    ...product,
                    quantity: 1
                };
                setCart([...cart, cloned]);
            } else {
                let index = cart.findIndex(item => item.id === product.id);
                let updatedItem = { ...cart[index] };
                let newQuantity = updatedItem.quantity >= updatedItem.inventory ? updatedItem.inventory : updatedItem.quantity + 1;
                let clonedItem = {
                    ...updatedItem,
                    quantity: newQuantity
                };
                let clonedArray = [...cart];
                clonedArray.splice(index, 1, clonedItem);
                setCart(clonedArray);
            }
        },
        getCartItems: () => {
            return cart;
        },
        checkout: () => {
            return order;
        },
        adjustQuantity: (itemId, change) => {
            let index = cart.findIndex(item => item.id === itemId);
            let updatedItem = { ...cart[index] };
            let newQuantity = 0 ;
            switch (true) {
                case (updatedItem.quantity + change >= updatedItem.inventory):
                    newQuantity = updatedItem.inventory;
                    console.log(newQuantity);
                    break;
                case (updatedItem.quantity + change=== 0):
                    console.log('remove this item');
                    break;
                case (updatedItem.quantity + change < 0):
                    newQuantity = 0;
                    break;
                default:
                    newQuantity = updatedItem.quantity + change;
            }
            let clonedItem = {
                ...updatedItem,
                quantity: newQuantity
            };
            let clonedArray = [...cart];
            clonedArray.splice(index, 1, clonedItem);
            setCart(clonedArray);

        }

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