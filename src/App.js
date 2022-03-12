import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header.component';
import HomePage from './pages/HomePage/HomePage.component';
import WebDevPage from './pages/WebDevPage/WebDevPage.component';
import WorkPage from './pages/WorkPage/WorkPage.component';
import ResumePage from './pages/ResumePage/ResumePage.component';
import ContactPage from './pages/ContactPage/ContactPage.component';

import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="non-header">
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='web-development' element={<WebDevPage />} />
          <Route path='past-work' element={<WorkPage />} />
          <Route path='resume' element={<ResumePage />} />
          <Route path='contact' element={<ContactPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
