import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCloudUploadAlt} from '@fortawesome/free-solid-svg-icons'
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
        console.log(imgURL, 'Image Url')
        const url = `https://calm-brushlands-85617.herokuapp.com/addProducts`
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
        <div className="row">
        <Sidebar/>
        <div className="col-md-8">
            <div class="wrapper">
                    <h3>Add Product</h3>
                    <form onSubmit={handleSubmit(onSubmit)} className="form">
                        <input type="text" name="name" className="formEntry" placeholder="Product Name" ref={register} required/>
                        <input type="number" name="price" className="formEntry" placeholder="Product Price" ref={register} required/>
                        <input type="text" name="made" className="formEntry" placeholder="Made In" ref={register} required/>
                        <input type="file" id="file" onChange={handeImg} />
                        <label for="file" class="btn-2">upload <FontAwesomeIcon className="icon" icon={faCloudUploadAlt} /></label>
                        <button type="submit" class="submit formEntry">Submit</button>
                    </form>
            </div>
        </div>
    </div>



            
    );
};

export default AddProduct;<h1>Allah Mohan</h1>