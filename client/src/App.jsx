
import './App.css'
import Navbar from './components/navbar/Navbar'
import {  Routes, Route } from "react-router";
import Home from './pages/Home';
import Contact from './pages/Contact';
import OurMenu from './pages/OurMenu';
import Footer from './components/footer/Footer';
import OrderFood from './pages/OrderFood';

function App() {
  

  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ourmenu" element={<OurMenu />} />
        <Route path="/orderfood" element={<OrderFood />} />
    </Routes>
      <Footer/>
    </>
  )
}

export default App
