import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar';
import ProductDetails from './Components/ProductList/ProductDetails';


function App() {
  return (
    <div className="App">
    
    
      <Router>
      <Navbar />

        <Routes>
          <Route  path="/" exct element={<Home/>}/>
          <Route path="/product/:productId" element={<ProductDetails/>}/>
          <Route>404 Not Found!</Route>
        </Routes>
        </Router>
    </div>
  );
}

export default App;
