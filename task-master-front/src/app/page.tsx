"use client";
import React from 'react';

import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'

import Login from '@/pages/login'
import Register from '@/pages/register';
import Reset from '@/pages/reset';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login/>} />      
        <Route path="/register" element={<Register/>} />
        <Route path="/reset" element={<Reset/>}/>
      </Routes>
    </BrowserRouter>
  )
}
