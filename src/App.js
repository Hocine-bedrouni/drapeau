import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import About from './Pages/About';
import Home from './Pages/Home';
import Navigation from './components/Navigation';

const App = () => {
  return (
    <div className='mx-3'>
    <BrowserRouter>
    <Navigation />
    <Routes>
      <Route path="/home" element={<Home />} />;
      <Route path="/about" element={<About />} />;
      <Route path="*" element={<About />} />;
      
    </Routes>
   
    </BrowserRouter>
    </div>
  );
};

export default App;
