import React, { useState } from 'react'
import Recitation2 from './Recitation2';
export default function Al_quran(props) {

  const [clickedButton, setClickedButton] = useState(false);
  

function presser1()
{
   setClickedButton(true);
}

function presser2()
{
   setClickedButton(false);
}

function back_to_menu()
{
   props.setback(!props.back);
}

  return (
    <>
    <div className='absolute top-0 z-10 h-fit w-screen pb-16' style={{backgroundColor: '#1c2121'}} >
    <div className='flex justify-center items-start w-scree text-white '>
      <div className='z-10 flex justify-between items-center my-6 w-11/12 '>
        <button onClick={back_to_menu}><i class={`fa-solid fa-${props.sizing} fa-arrow-left hover:text-yellow-200`}></i></button>
        <p className={` ${props.textsize}  ${window.outerWidth>550?"text-2xl":"text-lg"} font-bold`}>Quran</p>
      <a href='#'><i className={`mx-6 fa-solid fa-${props.sizing} fa-magnifying-glass min-[320px]:mx-1 max-[600px]:mx-1 hover:text-yellow-200`}></i></a>
      </div>
    </div>
     <img className='w-screen h-72 relative bottom-20 z-0' src="alquran.jpg" alt="" />
     <div className='h-12 w-screen flex items-center justify-around relative bottom-16 text-white'>
       <button onClick={presser2}><p className={`font-bold text-yellow-200 underline underline-offset-8 decoration-2`}>Surah Recitation</p></button>
     </div> 
       <Recitation2></Recitation2>
     </div>
     </>
  )
}
