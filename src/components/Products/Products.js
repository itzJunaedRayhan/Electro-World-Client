import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'
const Products = (props) => {
    const {imgURL, name, madeIn, price, _id} = props.product;
    return (
        <div className="row">
            <div className="single-product">
                <div className="product-img">
                    <img src={imgURL} alt=""/>
                </div>
                <div className="product-info">
                    <h2>{name}</h2>
                    <h6>{madeIn}</h6>
                </div>
                <div className="product-btn">
                    <h2>${price}</h2>
                    <Link to={`/checkout/${_id}`}>
                        <button className="btn buyBtn">Buy Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Products;