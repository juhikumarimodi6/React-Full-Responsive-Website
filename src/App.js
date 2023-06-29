import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import './App.css';
import Services from './Components/Services';
import Products from './Components/Products';
import {Route, Routes } from 'react-router-dom';
import Error from './Components/Error';
import SignUp from './Components/SignUp';
// import Card from './Components/Cards';

function App() {
  const [hamburger, setHamburger] = React.useState(true)
  return (
    <div>
      <Navbar 
        hamburger={hamburger}
        setHamburger={setHamburger}
      />

      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/signup" element={<SignUp />} />
        <Route element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
