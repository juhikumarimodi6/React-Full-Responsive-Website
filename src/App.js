import React from 'react';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import Home from './Components/Home';
import './App.css';

function App() {
  const [hamburger, setHamburger] = React.useState(true)
  return (
    <div>
      <Navbar 
        hamburger={hamburger}
        setHamburger={setHamburger}
      />
    </div>
  );
}

export default App;
