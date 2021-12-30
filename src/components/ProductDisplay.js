import React, {useContext } from 'react';
import moment from 'moment';
import { Table, Button } from 'react-bootstrap';
import ShoppingContext from '../contexts/ShoppingContext';
import addButton from '../icons/addButton.png';

export default function SearchForm() {
    const context = useContext(ShoppingContext);
    return (
        <React.Fragment>
            <p className='m-2 fw-bold fs-3 text-center' > Product List </p>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Room Type</th>
                        <th>Date</th>
                        <th>Day of Week</th>
                        <th>Timeslot</th>
                        <th>Price</th>
                        <th>Available Rooms</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {context.getProductList().map(product =>
                        <tr key={product.id} >
                            <td>{product.room_type_name}</td>
                            <td>{moment(product.timeslot).format('YYYY-MM-DD')} </td>
                            <td>{moment(product.timeslot).format('ddd')} </td>
                            <td>{moment(product.timeslot).format('h:mm a')} </td>
                            <td>{'$ ' + parseInt(product.price) / 100} </td>
                            <td>{product.inventory} </td>
                            <td>
                                <img className='p-0 m-0' src={addButton} alt='add button' style={{ width: '10%' }} />
                                <Button className='py-0 px-1 ms-1 btn-secondary' onClick={()=> {context.addToCart(product) }} >Add To Cart</Button>
                            </td>
                        </tr>)}
                </tbody>
            </Table>
        </React.Fragment>
    )
}