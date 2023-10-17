import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Components/Layouts/Header'
import Footer from './Components/Layouts/Footer'
import Home from './Components/Home'
import Login from './Components/User/Login'
import ProductDetails from './Components/Product/ProductDetails.js'
import Register from './Components/User/Register'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} exact="true" />
          <Route path="/product/:id" element={<ProductDetails />} exact="true" />
          <Route path="/search/:keyword" element={<Home />} exact="true" />
          <Route path="/login" element={<Login />} exact="true"/>
          <Route path="/register" element={<Register />} exact="true" />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;