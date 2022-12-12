import {Routes, Route } from "react-router-dom";

import React from "react";
import Homepage from "../../Pages/HomePage/Homepage";
import ContactPage from "../../Pages/ContactPage/ContactPage";
import AboutPage from "../../Pages/AboutPage/AboutPage";
import "./App.css";

const App = () => {
  return(
    <>
        <Routes>
            <Route path="/" element={<Homepage/>}></Route>
            <Route path="/aboutme" element={<AboutPage/>}></Route>
            <Route path="/contact" element={<ContactPage/>}></Route>
        </Routes>
    </>
  )
}

export default App;