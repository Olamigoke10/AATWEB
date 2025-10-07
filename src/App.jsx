import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { ThemeProvider } from './components/theme-provider'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Footer from './components/Footer'
import Contact from './pages/Contact'
import { inject } from '@vercel/analytics';


function App() {

  React.useEffect(() => {
    inject();
  }, []);

  return (
    <>
    <ThemeProvider >
      <Navbar />
      <Routes>
     <Route path="/"  element={<Home />}/>
     <Route path="/about"  element={<About />}/>
     <Route path="/contact"  element={<Contact />}/>

    </Routes>
    <Footer />
    </ThemeProvider>
    </>
  )
}

export default App
