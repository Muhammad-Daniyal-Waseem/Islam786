import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header_Image from './components/Header_Image';
import Hero_section from './components/Hero_section';
import Navbar from './components/Navbar';
import Search_Bar from './components/Search_Bar';
import Second_bar from './components/Second_bar';
import Al_quran from './components/Al_quran';
import Parent_Hadith from './components/Parent_Hadith';


function App() {
  let check = false;
  let size = 0;

  if (window.outerWidth < 416) {
    size = 1;
  } else {
    size = 2;
  }

  return (
    <BrowserRouter>
      <div>
        <Header_Image sizing={size} />
        <Search_Bar />
        <Second_bar />
        <Routes>
          <Route path="/" element={<Hero_section sizing={size} />} />
          <Route path="/al-quran" element={<Al_quran />} />
          <Route path="/al-hadees" element={<Parent_Hadith/>} />
        </Routes>
        <Navbar />
      </div>
    </BrowserRouter>
  );
}

export default App;
