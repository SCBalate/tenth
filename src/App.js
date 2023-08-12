import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import DepartmentsPage from './Components/DepartmentsPage';
import ProductListPage from './Components/ProductListPage';
import ProductManagement from './Components/ProductManagement';
import DetailedProductPage from './Components/DetailedProductPage';
import Products from './Components/Products';
import Navbar from './Components/Navbar';
import "./App.css"

function App() {
  return (
    <Router>
    
        <Navbar/>
        <div className='content'>
      <Routes>
        <Route path="/" exact element={<Dashboard/>} />
        <Route path="/departments" element={<DepartmentsPage/>} />
        <Route path="/products/:department" element={<ProductListPage/>} />
        <Route path="/new-product" element={<ProductManagement/>} />
        <Route path="/product/:id" element={<DetailedProductPage/>} />
        <Route path="/products" element={<Products/>} />
      </Routes>
      </div>
     
    </Router>
  );
}

export default App;
