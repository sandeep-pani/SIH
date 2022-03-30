import React,{StrictMode, useState} from 'react'
import './App.css';
import Navbar from './NavBar';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Upload from './Upload';
import DataFound from './datafound';
 


function App() {

  return (
    <>
    <Router>
    <Navbar></Navbar>
    <Routes basename={process.env.PUBLIC_URL}>
      <Route path='/' element={<div className='container my-3 mx-3'>
          <Home></Home>
            </div>}>
          
      </Route>
      <Route path='/Upload' element={<div className='container my-3 mx-3'>
          <Upload></Upload>
            </div>}>
          
      </Route>
      <Route path='/search' element={
          <DataFound></DataFound>
           }>
          
      </Route>
    </Routes>

    </Router>
    
    
    </>
  );
}

export default App;
