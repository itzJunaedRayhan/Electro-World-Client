import React from 'react';
import './Product.css'
const Products = ({product}) => {
    return (
        <div className="row">
            <div className="single-product">
                <div className="product-img">
                    <img src={product.imgURL} alt=""/>
                </div>
                <div className="product-info">
                    <h2>{product.name}</h2>
                    <h6>{product.madeIn}</h6>
                </div>
                <div className="product-btn">
                    <h2>{product.price}</h2>
                    <button className="btn buyBtn">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Products;