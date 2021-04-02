import React, { useContext, useEffect, useState } from 'react';
import './Orders.css'
import { userContext } from '../../App';
import Header from '../Header/Header';
import Order from '../Order/Order';

const Orders = () => {
    const [orders, setOrders] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    console.log(loggedInUser.email)
    useEffect(()=>{
        fetch('http://localhost:3500/getOrder?email='+loggedInUser.email)
        .then(res => res.json())
        .then(result => {
            setOrders(result)
        })
    },[])
    return (
        <div className="order-wrapper">
            <Header/>
            <h4><span style={{color: 'red'}}>{loggedInUser.name}</span> Your Orders Details</h4>
            <div className="row">
                <div className="col-md-6 col-sm-12 order-detail">
                    <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Time</th>
                            <th scope="col">Product</th>
                            <th scope="col">Made In</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    {
                    orders.map(order => <Order order={order}></Order>)
                    }
                    </table>
                </div>
            </div>
            
        </div>
    );
};

export default Orders;