// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Routes/Home';
import Contact from './Routes/Contact';

function App() {
  return (
    <div>

    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
