"use client";
import React from 'react';

import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'

import Login from '@/pages/login'
import Register from '@/pages/register';
import Reset from '@/pages/reset';
import DashboardComponent from '@/pages/dashboard';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login/>} />      
        <Route path="/register" element={<Register/>} />
        <Route path="/reset" element={<Reset/>}/>
        <Route path="/dashboard" element={<DashboardComponent/>}/>
      </Routes>
    </BrowserRouter>
  )
}
