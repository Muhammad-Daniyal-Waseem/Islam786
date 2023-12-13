import React, { useState } from 'react';
import NamazTime from './NamazTime';
import Calendar from './Calender';
import AllahNames from './AllahNames';

export default function More() {
  const [AN_btn, setAN_btn] = useState(true);
  const [C_btn, setC_btn] = useState(false);
  const [background, setBackground] = useState('url("img.jpg")');
  const [color, setcolor] = useState('#1c2121');



  function AllahNames_btn() {
    setAN_btn(true);
    setC_btn(false);
    setBackground('url("img.jpg")');
    setcolor(" ");

  }

  function Calender_btn() {
    setAN_btn(false);
    setC_btn(true);
    setBackground(''); // Change background color to yellow
    setcolor("#1c2121");
  }

  return (
    <div className='text-white h-full border-yellow-300 pt-4 absolute top-0 z-20 w-full mb-32' style={{ backgroundImage: background, backgroundSize:'cover', backgroundRepeat: 'no-repeat',backgroundColor:color }}>
      <div className={`flex justify-around w-full font-extrabold h-14 ${window.outerWidth<520?"text-lg":"text-2xl"} ${window.outerWidth<300?"text-xs":""} `}>
        <button className={`decoration-4 ${AN_btn?"text-yellow-200 underline underline-offset-8":""}`} onClick={AllahNames_btn}>Allah Names</button>
        <button className={`decoration-4 ${C_btn?"text-yellow-200 underline underline-offset-8":""}`} onClick={Calender_btn}>Calendar</button>
      </div>
      {AN_btn && <AllahNames />}
      {C_btn && <Calendar />}
    </div>
  );
}
