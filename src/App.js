// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import About from './Routes/About';

function App() {
  return (
    <div>

    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
