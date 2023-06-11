import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './Components/Home/Header';
import Content from './Components/Home/Content';
import Footer from './Components/Home/Footer';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';

function App() {
  return (

    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Content /> } />
        <Route path="Login" element={<Login />} />
        <Route path="Register" element={<Register />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

