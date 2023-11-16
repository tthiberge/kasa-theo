import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import App from './App.scss';
import About from './pages/About';
import Error from './pages/Error';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Location from './pages/Location';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <div className='global-container'>
        <div className='top-container'>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/location/:locationId" element={<Location />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  </React.StrictMode>
);
