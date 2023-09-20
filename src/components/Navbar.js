import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='justify-center fixed bottom-0 left-0'>
      <ul className='flex justify-evenly items-center w-screen h-16' style={{ backgroundColor: '#263329', color: '#c5e3cd' }}>
        <Link to="/al-quran"  className='check'><i className="fa-sharp fa-solid fa-book"></i><li className={`${window.outerWidth < 300 ? "text-xs" : "text-sm"}`}>Quran</li></Link>
        <Link to="/al-hadees"  className='check'><i className="fa-solid fa-certificate"></i><li className={`${window.outerWidth < 300 ? "text-xs" : "text-sm"}`}>Hadith</li></Link>
        <Link to="/" className='check'><i className="fa-sharp fa-solid fa-house"></i><li className={`${window.outerWidth < 300 ? "text-xs" : "text-sm"}`}>Home</li></Link>
        <Link to="/" className='check'><i className="fa-sharp fa-solid fa-landmark-dome"></i><li className={`${window.outerWidth < 300 ? "text-xs" : "text-sm"}`}>Worship</li></Link>
        <Link to="/" className='check'><i className="fa-solid fa-ellipsis"></i><li className={`${window.outerWidth < 300 ? "text-xs" : "text-sm"}`}>More</li></Link>

      </ul>
    </div>
  );
}
