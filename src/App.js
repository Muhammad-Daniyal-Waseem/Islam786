import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header_Image from './components/Header_Image';
import Hero_section from './components/Hero_section';
import Navbar from './components/Navbar';
import Search_Bar from './components/Search_Bar';
import Second_bar from './components/Second_bar';
import Parent_Hadith from './components/Parent_Hadith';
import Quran_menu from './components/Quran_menu';
import More from './components/More';
import NamazTime from './components/NamazTime';
function App() {

  let size = "";
  let textsize = "";
  function sizer()
  {

    if(window.outerWidth<300)
    {
      size="sm";
      textsize="xs";
    }
   else if(window.outerWidth<416)
    {
      size="lg";
      textsize="lg";
    }
   else if(window.outerWidth>416)
    {
      size="2x";
      textsize="2xl";
    }
    else if(window.outerWidth>600)
    {
      size="3x";
      textsize="3xl";
    }
    else if(window.outerWidth>750)
    {
      size="4x";
      textsize="4xl";
    }
  }
  sizer();
// h-full
  return (
    <BrowserRouter>
      <div className='z-0 h-full'>  
        <Header_Image sizing={size} textsize={textsize} />
        <Search_Bar />
        <Second_bar />
        <Routes>
          <Route path="/" element={<Hero_section sizing={size} />} />
          <Route path="/Quran_menu" element={<Quran_menu sizing={size} textsize={textsize} />} />
          <Route path="/al-hadees" element={<Parent_Hadith />} />
          <Route path="/more" element={<More/>} />
          <Route path="/NamazTime" element={<NamazTime/>} />
        </Routes>
        <Navbar />
      </div>
    </BrowserRouter>
  );
}

export default App;
