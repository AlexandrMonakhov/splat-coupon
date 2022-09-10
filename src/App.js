import React from 'react';
import './App.css';
import Desktop from './components/Desktop/Desktop';
import Tablet from './components/Tablet/Tablet';
import Mobile from './components/Mobile/Mobile';

function App() {
  return (
    <div className="App">
      <Desktop />
      <Tablet />
      <Mobile />
    </div>
  );
}

export default App;
