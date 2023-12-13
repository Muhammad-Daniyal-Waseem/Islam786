import React, { useState } from 'react';
import Quran_surahs from './Quran_surahs';
import Quran_Fav from './Quran_Fav';
export default function Al_quran(props) {
  const [clickedButton, setClickedButton] = useState(false);
  const [fav_checker,setfav_checker]=useState(false);

  function back_to_menu()
  {
     props.setback(!props.back);
  }

  function presser1() {
    setClickedButton(true);
  }

  function presser2() {
    setClickedButton(false);
  }


  return (
    <>
      <div className='absolute top-0 z-10 h-fit w-full pb-16' style={{backgroundColor: '#1c2121'}}>
        <div className='flex justify-center items-start w-screen text-white'>
          <div className='z-10 flex justify-between items-center my-6 w-full px-4 '>
          <button onClick={back_to_menu}><i class={`fa-solid fa-${props.sizing} fa-arrow-left hover:text-yellow-200`}></i></button>
        <p className={` text-${props.textsize} font-bold`}>Quran</p>
      <a href='#'><i className={`mx-6 fa-solid fa-${props.sizing} fa-magnifying-glass min-[320px]:mx-1 max-[600px]:mx-1 hover:text-yellow-200`}></i></a>
          </div>
        </div>
        <img className='w-full h-72 relative bottom-20 z-0' src="alquran.jpg" alt="" />
        <div className='h-12 w-screen flex items-center justify-around relative bottom-16 text-white'>
          <button onClick={presser2}><p className={`font-bold decoration-4 ${!clickedButton?"text-yellow-200 underline underline-offset-8":""}`}>BY SURAH</p></button>
          {<button onClick={presser1}><p className={`font-bold decoration-4 ${clickedButton?"text-yellow-200 underline underline-offset-8":""}`}>FAVOURITE</p></button>}
        </div> 
        {!clickedButton &&<Quran_surahs></Quran_surahs>}
        {clickedButton &&<Quran_Fav fav_checker={fav_checker} setfav_checker={setfav_checker}/>}
      </div>
    </>
  )
}
