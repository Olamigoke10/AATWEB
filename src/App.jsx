import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { ThemeProvider } from './components/theme-provider'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <ThemeProvider >
      <Navbar />
      <Routes>
     <Route path="/"  element={<Home />}/>
     <Route path="/about"  element={<About />}/>

    </Routes>
    <Footer />
    </ThemeProvider>
    </>
  )
}

export default App
