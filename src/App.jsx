import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './pages/Page_accueil'
import Avis from './pages/Page_Avis';
import Contact from './pages/Page_contact';
import Service from './pages/Page_service';
import Realisation from './pages/Page_realisation';
import Header from './components/Header';

function App() {
  

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/avis" element={<Avis />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/realisation" element={<Realisation />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
