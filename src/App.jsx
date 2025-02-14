
import React from 'react'
import Fitness from './pages/fitness';
import Sign from './pages/Signup';
import Home from './pages/Home';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Fitnessmain from './pages/Fitnessmain';


function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} > </Route>
        <Route path="/fitness" element={<Fitness />} ></Route>
        <Route path="/Signup" element={<Sign />} > </Route>
        <Route path='/Login' element={<Login/>} ></Route>
        <Route path="/Fitnessmain" element={<Fitnessmain/> }></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}


export default App;
