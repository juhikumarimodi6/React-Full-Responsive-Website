import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Services from './Components/Services';
import Products from './Components/Products';
import Error from './Components/Error';
import SignUp from './Components/SignUp';
import Waterfall from './Components/Adventures/AmazonJungle/Waterfall';
import SaharaDesert from './Components/Adventures/SaharaDesert';
import Football from './Components/Adventures/Football';
import Bali from './Components/Adventures/Bali';
import AtlanticOcean from './Components/Adventures/AtlanticOcean';
import Footer from './Components/Footer';
import {Route, Routes } from 'react-router-dom';
import './App.css';


function App() {
  // const [hamburger, setHamburger] = React.useState(true)
  return (
    <div>
      <Navbar 
        // hamburger={hamburger}
        // setHamburger={setHamburger}
      />
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/waterfall" element={<Waterfall />} />
        <Route path="/saharadesert" element={<SaharaDesert />} />
        <Route path="/football" element={<Football />} />
        <Route path="/bali" element={<Bali />} />
        <Route path="/atlanticocean" element={<AtlanticOcean />} />
        <Route element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
