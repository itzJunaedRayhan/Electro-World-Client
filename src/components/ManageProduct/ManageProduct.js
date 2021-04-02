import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons'
import './ManageProduct.css'
const ManageProduct = (props) => {
    const {name, madeIn, price, _id} = props.product;
    
    const deleteProduct = (event,id) =>{
        fetch(`http://localhost:3500/delete/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            if(result){
                event.target.parentNode.parentNode.style.display = "none";
            }
        })
}
    return (
        <tbody>
            <tr>
                <td>{name}</td>
                <td>{madeIn}</td>
                <td>${price}</td>
                <td><FontAwesomeIcon className="editIcon" icon={faEdit} /> <FontAwesomeIcon onClick={(event) => deleteProduct(event,_id)} className="deleteIcon" icon={faTrashAlt} /></td>
            </tr>
        </tbody>
    );
};

export default ManageProduct;