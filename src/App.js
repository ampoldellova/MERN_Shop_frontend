import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Components/Layouts/Header'
import Footer from './Components/Layouts/Footer'
import Home from './Components/Home'
import ProductDetails from './Components/Product/ProductDetails.js'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} exact="true" />
          <Route path="/product/:id" element={<ProductDetails />} exact="true" />
          <Route path="/search/:keyword" element={<Home />} exact="true" />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;