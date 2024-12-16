<<<<<<< HEAD
import React from 'react';
import './App.css'; // Import global CSS for styling
import { Route, Routes, BrowserRouter } from 'react-router-dom'; // for routing
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
=======
import React from "react";
import { Route, Routes } from "react-router-dom";  // Import Routes and Route
import Header from "./components/Header";  // Import the Header component
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Header />  {/* Add Header to the App */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
>>>>>>> 7232a70679a4a4a696a15c11ad5d24d17154d074
  );
}

export default App;
