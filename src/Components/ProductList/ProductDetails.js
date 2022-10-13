import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {selectedProduct} from '../../ReduxStore/Actions/ProductAction';

const ProductDetails = () => {
    const product = useSelector(state => state.product);
    const  {image, title, price, category, description, id} = product;

    const {productId} = useParams();
    const dispatch = useDispatch();
    console.log(product);

        const fetchProductDetails =  async () =>{
        const response = await axios
        .get(`https://fakestoreapi.com/products/${productId}`)
        .catch((err) => {console.log("Err", err)});
        dispatch(selectedProduct(response.data))
    }

useEffect(() => {

   if(productId && productId !== "") fetchProductDetails();

},[productId])

    return (
        <div>
             <div key={id}  className="card" style={{width: "18rem",marginBottom:"30px",maxHeight:"400px"}} >
                <div className='ui link cards'>
                    <div  className='card ' >
                        <img src={image} className='card-img-top' alt={title} style={{width:"250px",height:"250px"}}/>
                        <div className='card-body'>
                            <p className='card-text'>{title}</p>
                            <p className='card-text'>{price}</p>
                            <p className="card-text">{category}</p>
                            <p className="card-text">{description}</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;