import React, { useEffect, useState } from 'react';
import ManageProduct from '../ManageProduct/ManageProduct';
import Sidebar from '../Sidebar/Sidebar';
import './ManageProducts.css'
const ManageProducts = () => {
    const [products,setProducts] = useState([])
    useEffect(()=>{
        fetch('http://localhost:3500/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    })
    return (
        <div className="row">
            <Sidebar/>
            <div className="col-md-8">
                <h2 style={{textAlign: 'right',padding: '15px 0'}}>Manage Products</h2>
                <table class="table table-borderless">
                    <thead>
                        <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Made In</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    {
                        products.map(product => <ManageProduct product={product}></ManageProduct>)
                    }
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;