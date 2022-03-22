import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop/ScrollToTop.component'

import Header from './components/Header/Header.component';
import Footer from './components/Footer/Footer.component';
import HomePage from './pages/HomePage/HomePage.component';
import WebDevPage from './pages/WebDevPage/WebDevPage.component';
import WorkPage from './pages/WorkPage/WorkPage.component';
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
            <Route path='web-development' element={<WebDevPage />} />
            <Route path='past-work' element={<WorkPage />} />
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
