import React from 'react';

const Order = (props) => {
    const {name, email,Time,product} = props.order;
    console.log(name, email,Time,product.name,'From Order')
    return (
                <tbody>
                    <tr>
                    <td>{Time}</td>
                    <td>{product.name}</td>
                    <td>{product.madeIn}</td>
                    <td>${product.price}</td>
                    </tr>
                </tbody>
    );
};

export default Order;