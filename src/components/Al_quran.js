import React from 'react'

export default function Al_quran() {
  return (
    <>
    <div className='flex justify-center items-start w-scree text-white'>
      <div className='z-10 flex justify-between items-center my-6 w-11/12 '>
        <a href="/"><i class="fa-solid fa-2x fa-arrow-left hover:text-yellow-200"></i></a>
        <p className=' text-2xl font-bold'>Quran</p>
      <a href='/'><i className={`mx-6 fa-solid fa-${window.outerWidth<300?"xs":"2xl"} fa-magnifying-glass min-[320px]:mx-1 max-[600px]:mx-1 hover:text-yellow-200`}></i></a>
      </div>
    </div>
     <img className='w-full h-72 relative bottom-20 z-0' src="alquran.jpg" alt="" />
     <div className='h-12 w-screen flex items-center justify-around relative bottom-16 text-white'>
       <a href=""><p className='font-bold decoration-4 hover:text-yellow-200 hover:underline  hover:underline-offset-8'>BY SURAH</p></a>
       <a href=""><p className='font-bold decoration-4 hover:text-yellow-200 hover:underline  hover:underline-offset-8'>BY PARAH</p></a>
       <a href=""><p className='font-bold decoration-4 hover:text-yellow-200 hover:underline  hover:underline-offset-8'>FAVOURITE</p></a>
     </div>
     </>
  )
}
