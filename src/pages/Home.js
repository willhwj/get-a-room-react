import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ShoppingContext from '../contexts/ShoppingContext';
import SearchForm from '../components/SearchForm';
import ProductDisplay from '../components/ProductDisplay';
import Cart from '../components/Cart';
import ConfirmedOrder from '../components/ConfirmedOrder';

export default function Home() {
    // state variables for all available room type slots
    const [productList, setProductList] = useState([]);
    // state variables for selected room type slots into the cart
    const [cart, setCart] = useState([]);
    // state variables to track if customer has logged in
    const [customer, setCustomer] = useState({});
    // state variable to indicate if the login popup should display
    const [loginPopup, setLoginPopup] = useState(false);
    // state variable to track if order is confirmed
    const [order, setOrder] = useState({});

    const baseUrl = 'http://localhost:8888/api/';
    // const baseUrl = 'https://get-a-room-hwj.herokuapp.com/api/';

    // use effect to check if the customer is logged in
    useEffect(() => {
        context.checkCustInfo();
    })

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
            // when cart is empty or a different product is added, add the product to cart
            if (cart.length === 0 || cart.findIndex(item => item.id === product.id) < 0) {
                let cloned = {
                    ...product,
                    quantity: 1
                };
                setCart([...cart, cloned]);
            }
            // when the same product is added to cart, increment the quantity of that product by 1
            else {
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
        adjustQuantity: (itemId, change) => {
            let index = cart.findIndex(item => item.id === itemId);
            let updatedItem = { ...cart[index] };
            let newQuantity = 0;
            let clonedArray = [...cart];
            switch (true) {
                case (updatedItem.quantity + change <= 0):
                    newQuantity = 0;
                    clonedArray.splice(index, 1);
                    setCart(clonedArray);
                    break;
                default:
                    newQuantity = (updatedItem.quantity + change >= updatedItem.inventory) ? updatedItem.inventory : updatedItem.quantity + change;
                    let clonedItem = {
                        ...updatedItem,
                        quantity: newQuantity
                    };
                    clonedArray.splice(index, 1, clonedItem);
                    setCart(clonedArray);
            }
        },
        checkout: async () => {
            console.log(cart);
            if (Object.keys(customer).length === 0) {
                console.log('to set up loginPopup to true');
                setLoginPopup(true);
            } else {
                let response = await axios.post(baseUrl + 'checkout', { 'cart': cart, 'customer': customer });
                let stripeUrl = response.data;
                window.location.assign(stripeUrl);
            }
        },
        displayOrder: () => {
            setOrder(cart);
            return order;
        },
        checkCustInfo: async () => {
            try {
                let response = await axios.get(baseUrl + 'customer/profile', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                setCustomer(response.data);
            } catch (e) {
                console.log(e.message, 'customer is not logged in');
            }
        },
        getLoginPop: () => {
            return loginPopup;
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