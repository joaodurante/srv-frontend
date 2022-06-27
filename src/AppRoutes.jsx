import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Products from './pages/products/Products';
import Employees from './pages/employees/Employees';
import Partnership from './pages/partnership/Partnership';
import Sales from './pages/sales/Sales';

export default function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/partnerships" element={<Partnership />} />
                <Route path="/sales" element={<Sales />} />
            </Routes>
        </BrowserRouter>
    );
}