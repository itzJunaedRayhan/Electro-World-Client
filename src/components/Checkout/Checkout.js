import React, { useContext, useEffect, useState } from 'react';
import './Checkout.css'
import { useParams } from 'react-router';
import Header from '../Header/Header';
import { userContext } from '../../App';
import { Link } from 'react-router-dom';

const Checkout = () => {
    const _id = useParams().id
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [product, setProduct] = useState({});
    useEffect(()=>{
        fetch(`https://calm-brushlands-85617.herokuapp.com/checkout/`+_id)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[_id])

    //  insert Order Details TO Database
    const handleCheckOut = () =>{
        let current_datetime = new Date()
        let formatted_date = current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear()
        const orderDetails = {...loggedInUser, product: product, Time: formatted_date}
        fetch('https://calm-brushlands-85617.herokuapp.com/orders',{
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(orderDetails)
        })
        .then(res => res.json())
        .then(data => {
            alert('Your Order Placed Successfully')
        })
    }
    return (
        <div className="checkout-wrapper">
            <Header/>
                <div className="row">
                    <div className="col-md-6 col-sm-12 checkout">
                        <h2>Checkout</h2>
                        <table className="table table-borderless">
                            <thead>
                                <tr>
                                    <th scope="col">Description</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{product.name}</td>
                                    <td>1</td>
                                    <td>${product.price}</td>
                                </tr>
                            </tbody>
                            <tfoot style={{borderTop: '1px solid gray'}}>
                                <tr>
                                    <td>Total</td>
                                    <td>1</td>
                                    <td>${product.price}</td>
                                </tr>
                            </tfoot>
                        </table>
                        <Link to="/orders">
                            <button onClick={handleCheckOut} className="checkoutBtn">Checkout</button>
                        </Link>
                    </div>
                </div>
        </div>
    );
};

export default Checkout;