import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import Home from './pages/home/Home';

export default function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Login />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}