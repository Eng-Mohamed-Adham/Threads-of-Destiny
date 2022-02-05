import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {selectedProduct} from '../ReduxStore/Actions/ProductAction';

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
             <div key={id} className='four wide column ' >
                <div className='ui link cards'>
                    <div  className='card ' >
                        <img src={image} className='image' alt={title} style={{width:"250px",height:"250px"}}/>
                        <div className='content'>
                            <div className='header'>{title}</div>
                            <div className='meta-price'>{price}</div>
                            <p className="meta">{category}</p>
                            <p className="meta">{description}</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;