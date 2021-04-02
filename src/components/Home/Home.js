import React, { useEffect, useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Header from '../Header/Header';
import Products from '../Products/Products';
import './Home.css'
const Home = () => {
    const [products,setProducts] = useState([])
    useEffect(()=>{
        fetch('https://calm-brushlands-85617.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    })
    return (
        <div>
            <Header/>
            <div className="row">
                <div className="search-bar col-md-6 mx-auto">
                    <div className="search-box my-5">
                        <input id="searchField" type="text" className="form-control" placeholder="Enter your Products Name" />
                        <button id="searchBtn" className="btn search-btn">Search</button>
                    </div>
                </div>
            </div>
            <div className="products">
            {
                products.length === 0 && <CircularProgress />
            }
            {
                products.map(product => <Products product={product} key={product._id}></Products>)
            }
            </div>
        </div>
    );
};

export default Home;

