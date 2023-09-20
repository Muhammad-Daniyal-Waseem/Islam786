import React from 'react';

export default function Search_Bar() {


  return (
    <div className='flex justify-center relative bottom-8 w-screen'>
      <div className=' flex items-center justify-between h-14 text-xl w-4/5  min-[270px]:w-full max-[319px]:w-full min-[320px]:w-11/12 max-[600px]:w-11/12 rounded-xl 'style={{ backgroundColor: '#263329'}}>
        <div className='h-10  flex items-center text-white'>
        <a href='/'><i className={`mx-6 fa-solid fa-${window.outerWidth<300?"xs":"lg"} fa-magnifying-glass min-[320px]:mx-1 max-[600px]:mx-1`}></i></a>
            <p className={`${window.outerWidth<350?"text-xs":"text-sm"} ${window.outerWidth>450?"text-lg":"text-xs"}`} >Search word or ayat in Quran</p>
        </div>
        <div className='mx-4 h-10 w-1/5 flex justify-evenly items-center  min-[270px]:mx-0 max-[447px]:mx-0 min-[350px]:w-4/12 max-[447px]:w-4/12  min-[447px]:w-2/5 max-[600px]:w-2/5 sm:w-1/5 text-white'>
        <a href='/'><i className={`hover:text-yellow-600 fa-brands fa-${window.outerWidth<300?"xs":"lg"} fa-youtube`}></i></a>
       <a href='/'><i class={`hover:text-yellow-600 mx-2 fa-sharp fa-${window.outerWidth<300?"xs":"lg"} fa-solid fa-microphone`}></i></a> 
         <a href='/'><i className={`hover:text-yellow-600 fa-sharp fa-${window.outerWidth<300?"xs":"lg"} fa-solid fa-circle-info`}></i></a>
        </div>
      </div>
    </div>
  )
}
