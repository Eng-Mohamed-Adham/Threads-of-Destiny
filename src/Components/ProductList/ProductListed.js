import React, {useEffect,useState} from 'react';
import axios from 'axios';
import ProductComponent from './ProductComponent';
import { useDispatch, useSelector } from 'react-redux';
import {setProducts} from '../../ReduxStore/Actions/ProductAction';
import './ProductList.css';
import { Link } from 'react-router-dom';

import {FaEquals} from 'react-icons/fa'
import  { FaMale }   from 'react-icons/fa'
import {FaFemale} from 'react-icons/fa'
import {FaFulcrum} from 'react-icons/fa'
import {FaMicrochip} from 'react-icons/fa'

import {FaEdit} from 'react-icons/fa'

const ProductListed = () => {

const [check,setCheck] = useState(false)

const [cardsState,setCardState] =useState()    


const products = useSelector(state => state.allProducts.products);

const dispatch = useDispatch();


const handelCheck =() => {
    check ? setCheck(false) : setCheck(true)
}



 const handelFiltering = (e) => {

     setCardState(e)
        
       
    
 }

 const resetProduct = () => {
    setCardState()
 }


//pupopp
const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
 




 const fetchProducts = async () => {
    const response = await axios
    .get("https://fakestoreapi.com/products")
    .catch((err) => {
        console.log("Err", err);
    });
    dispatch(setProducts(response.data));
};

    useEffect(()=>{

     
        fetchProducts();
    }, []);






     let product;

useEffect(()=> {
  

})


let productList = products.map(item => {
    const {id, title, price, category,image} = item;

    
    product = cardsState ?
     category  === cardsState ?
    (
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
    ):""

    : 
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

    return product

})

    
    // console.log("Product: ", products)
    return (
        <div className='main'  style={{marginLeft:'50px'}}>
            <div className='head-list'>
            <span>Beast Of Products</span>
                <button className='btn-filter'  onClick={e => togglePopup()}>
                            {/* <FaFilter/> */}
                            <FaEdit/>
                </button>
               
            </div>
            <div className={isOpen ?'popup-box' : 'form-none'}>
            
                <div className={isOpen?'box':'form-none'}>
                

                    <div className={isOpen ? 'form-blk' : 'form-none'}>
                        <button onClick={e => resetProduct()}><FaEquals /></button>
                        <button   onClick={e => handelFiltering("men's clothing")} ><FaMale /> </button>
                        {/* <br/> */}
                        <button   onClick={e => handelFiltering("women's clothing")}><FaFemale /></button>
                        {/* <br/> */}
                        <button    onClick={e => handelFiltering("jewelery")} ><FaFulcrum /></button>
                        {/* <br/> */}
                        <button   onClick={e => handelFiltering("electronics")} ><FaMicrochip /></button>
                    </div>
                    <div className="apply-icon">
                    <button  onClick={() => togglePopup()}>Apply</button>
                    </div>
                </div>
            </div>


             <div className=' card-list'>



                {
                     productList
                }
                
            </div>
        </div>
    );
}

export default ProductListed;