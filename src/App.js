import React from 'react';
import Navbar from './Components/Navbar';
import NavMenu from './Components/NavMenu';
import './App.css';

function App() {
  const [hamburger, setHamburger] = React.useState(true)
  return (
    <Navbar 
      hamburger={hamburger}
      setHamburger={setHamburger}
    />
  );
}

export default App;
