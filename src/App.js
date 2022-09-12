import React from 'react';
import AOS from "aos";
import './App.css';
import Desktop from './components/Desktop/Desktop';
import Tablet from './components/Tablet/Tablet';
import Mobile from './components/Mobile/Mobile';

function App() {
  AOS.init();

  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
     window.addEventListener("resize", handleResizeWindow);
     return () => {
       window.removeEventListener("resize", handleResizeWindow);
     };
   }, []);

  return (
    <div className="App">
      { width >= 1200 && <Desktop /> }
      { (width >= 768 && width < 1200) && <Tablet /> }
      { width < 768 && <Mobile /> }
    </div>
  );
}

export default App;
