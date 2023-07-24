"use client";
import React from 'react';

import Image from 'next/image'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'

import Login from '@/pages/login'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element ={<Login/>}>
      <Route index element={<Login/>} />
      </Route>
      </Routes>
    </BrowserRouter>
  )
}
