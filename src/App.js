import React, { StrictMode, useState } from "react";
import "./App.css";
import Navbar from "./NavBar";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Upload from "./Upload";
import DataFound from "./datafound";

function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/Upload" element={<Upload></Upload>}></Route>
          <Route path="/search" element={<DataFound></DataFound>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
