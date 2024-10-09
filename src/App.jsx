import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import 'primereact/resources/themes/saga-blue/theme.css';  // Theme
import 'primereact/resources/primereact.min.css';           // Core CSS
import 'primeicons/primeicons.css';                         // PrimeIcons

import './App.css'

function App() {

  return (
    <>
    <Navbar/>
    <Home/>
    </>
  )
}

export default App
