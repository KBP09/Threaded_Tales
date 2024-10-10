import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './components/Contactcard';
import Commentpage from './pages/Commentpage';
import Footer from './components/Footer';
import 'primereact/resources/themes/saga-blue/theme.css';  // Theme
import 'primereact/resources/primereact.min.css';           // Core CSS
import 'primeicons/primeicons.css';                         // PrimeIcons
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comment" element={<Commentpage />} />
      </Routes>
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;
