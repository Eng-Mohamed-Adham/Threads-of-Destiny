import React from 'react';
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';



const ProductComponent = () => {
    const products = useSelector(state => state.allProducts.products);
    const renderList = products.map(product => {
        const {id, title, price, category,image} = product;
        return(
            <div key={id} className='four wide column ' >
                <div className='ui link cards'>
                    <div  className='card ' >
                        <img src={image} className='image' alt={title} style={{width:"250px",height:"250px"}}/>
                        <div className='content'>
                            <div className='header'>{title}</div>
                            <div className='meta-price'>{price}</div>
                            <p className="meta">{category}</p>
                            <Link to={`/product/${id}`}>Product Details</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    })
    return (
        <>{renderList}</>
    
    );
}

export default ProductComponent;