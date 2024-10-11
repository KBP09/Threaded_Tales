// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider, useUser } from './components/Usercontext'; // Import the UserProvider
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './components/Contactcard';
import Commentpage from './pages/Commentpage';
import Footer from './components/Footer';
import 'primereact/resources/themes/saga-blue/theme.css';  // Theme
import 'primereact/resources/primereact.min.css';           // Core CSS
import 'primeicons/primeicons.css';                         // PrimeIcons
import './App.css';
import ProfilePage from './pages/Profilepage';
import Login from './pages/Login';

const App = () => {
  return (
    <UserProvider>
      <Router>
        <NavbarWrapper /> {/* Use a wrapper component to access context */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/comment" element={<Commentpage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
        <Contact />
        <Footer />
      </Router>
    </UserProvider>
  );
};

// Create a wrapper component to access the user context
const NavbarWrapper = () => {
  const { userProfilePic } = useUser(); // Access userProfilePic from context

  return <Navbar userProfilePic={userProfilePic} />; // Pass it to Navbar
};

export default App;
