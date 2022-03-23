import React from 'react';
import { Routes, Route} from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop/ScrollToTop.component'

import Header from './components/Header/Header.component';
import Footer from './components/Footer/Footer.component';
import HomePage from './pages/HomePage/HomePage.component';
import AboutPage from './pages/AboutPage/AboutPage.component';
import ServicesPortfolioPage from './pages/ServicesPortfolioPage/ServicesPortfolioPage.component';
import ResumePage from './pages/ResumePage/ResumePage.component';
import ContactPage from './pages/ContactPage/ContactPage.component';
import LegalPage from './pages/LegalPage/LegalPage.component';

import './App.css';

function App() {

  return (
    <div className="app">
      <Header />
      <div className="non-header">
        <ScrollToTop>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path='about' element={<AboutPage />} />
            <Route path='services-+-portfolio' element={<ServicesPortfolioPage />} />
            <Route path='resume' element={<ResumePage />} />
            <Route path='contact' element={<ContactPage />} />
            <Route path='legal' element={<LegalPage />} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </div>
    </div>
  )
}

export default App
