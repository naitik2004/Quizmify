import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import HelpPage from './Pages/HelpPage'
import MainquizPage from './Pages/MainquizPage'
import LoginPage from './Pages/LoginPage'
import React from 'react'

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Navbar/>
        <div className='main-div'>
          <div className='div-container'>
          <Routes>
            <Route path='/' element = {<HomePage/>}></Route>
            <Route path='/about' element = {<AboutPage/>}></Route>
            <Route path='help' element = {<HelpPage/>}></Route>
            <Route path='/quiz' element = {<MainquizPage/>}></Route>
            <Route path="/login" element={<LoginPage />} />

          </Routes>
          </div>
        </div>
        <Footer/>
      </div>
    
    </BrowserRouter>
  );
}

export default App;
