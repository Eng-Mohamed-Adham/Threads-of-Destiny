import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header'
import ProductDetails from './Components/ProductDetails';
import ProductListed from './Components/ProductListed';
function App() {
  return (
    <div className="App">
    
    
      <Router>
      <Header/>

        <Routes>
          <Route  path="/" exct element={<ProductListed/>}/>
          <Route path="/product/:productId" element={<ProductDetails/>}/>
          <Route>404 Not Found!</Route>
        </Routes>
        </Router>
    </div>
  );
}

export default App;
