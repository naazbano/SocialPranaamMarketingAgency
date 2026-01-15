import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Service from './pages/Service.jsx';
import Contact from './pages/Contact.jsx';


const App = () => {
  return (
   <>
   
   <Routes>
  {/* Add the angle brackets < > around your components */}
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/service" element={<Service />} />
  <Route path="/contact-us" element={<Contact />} />
</Routes>
   </>
  )
}

export default App