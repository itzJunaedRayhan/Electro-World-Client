import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './AddProduct.css'
const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const [imgURL, setImgURL] = useState(null)
    const onSubmit = data =>{
        const productData = {
            name: data.name,
            price: data.price,
            madeIn: data.made,
            imgURL: imgURL
        }
        const url = `http://localhost:3500/addProducts`
        fetch(url, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
        .then(res => console.log('server side response', res))
    }
//  image upload
    const handeImg = event =>{
        const imageInfo = new FormData();
        imageInfo.set('key', 'f85fccd5d425b00b642a7bfb9725f877')
        imageInfo.append('image', event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload', imageInfo)
        .then(function (response) {
        setImgURL(response.data.data.display_url)
        })
        .catch(function (error) {
        console.log(error);
        });
    }
    return (
            <div class="wrapper">
                <h3>Add Product</h3>
                <form onSubmit={handleSubmit(onSubmit)} class="form">
                    <input type="text" name="name" class="formEntry" placeholder="Product Name" ref={register} required/>
                    <input type="number" name="price" class="formEntry" placeholder="Product Price" ref={register} required/>
                    <input type="text" name="made" class="formEntry" placeholder="Made In" ref={register} required/>
                    <input type="file" id="file" onChange={handeImg} required/>
                    <label for="file" class="fileBtn">Photo upload</label>
                    <button type="submit" class="submit formEntry">Submit</button>
                </form>
            </div>
    );
};

export default AddProduct;<h1>Allah Mohan</h1>