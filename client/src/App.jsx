
import './App.css'
import Navbar from './components/navbar/Navbar'
import {  Routes, Route } from "react-router";
import Home from './pages/Home';
import Contact from './pages/Contact';
import OurMenu from './pages/OurMenu';

function App() {
  

  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ourmenu" element={<OurMenu />} />
    </Routes>
    </>
  )
}

export default App
