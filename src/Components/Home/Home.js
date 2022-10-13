import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import ProductListed from '../ProductList/ProductListed';
import Tabs from '../Tabs/Tabs';
import TaypingTitle from '../Typingtitle/TypingTitle';
import './Home.css'
const Home = () => {
    return (

      <div className='main'>
        
        {/* <Tabs /> */}
        <TaypingTitle />
        <AboutUs />
        <ProductListed />
        {/* <TaypingTitle /> */}
        
      </div>
        
    );
}


export default Home;