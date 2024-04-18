import React from "react";
import { Route, Routes } from 'react-router-dom';
import AboutPage from '../pages/AboutPage/AboutPage';
import HomePage from "../pages/HomePage/HomePage";
import ServicePage from '../pages/ServicePage/ServicePage';
import ContacrPage from '../pages/ContacrPage/ContacrPage'

const App = () => {

  return (
    <div>
      <Routes>  
        <Route path="/" element={<HomePage />}/>
        <Route path="/about" element={<AboutPage />}/>
        <Route path="/service" element={<ServicePage />}/>
        <Route path="/contact" element={<ContacrPage />}/>
      </Routes>
    </div>
  );
};

export default App;
