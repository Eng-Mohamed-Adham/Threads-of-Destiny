import React from 'react';
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';

import './ProductList.css'

const ProductComponent = () => {
    const products = useSelector(state => state.allProducts.products);
    const renderList = products.map(product => {
        const {id, title, price, category,image} = product;
        return(
            // <div className='card-list' key={id}>

            <div key={id} className="card-container" style={{width: "18rem",marginBottom:"30px",maxHeight:"400px",marginTop:"50px"}} >
                {/* <div className='ui link cards'> */}
                    {/* <div  className='card ' > */}
                        <img src={image} className='card-img-top' alt={title} style={{width:"200px",height:"200px"}}/>
                        <div className='card-body'>
                            <h5 className='card-title'>{title}</h5>
                            <p className='card-text'>{price}</p>
                            <p className="card-text">{category}</p>
                            <Link className='btn btn-primary' to={`/product/${id}`}>Product Details</Link>
                        </div>
                    {/* </div> */}
                  {/* </div> */}
            </div>
            // </div>
        );
    })
    return (
        <>
         
      
        {renderList}
        </>
    
    );
}

export default ProductComponent;