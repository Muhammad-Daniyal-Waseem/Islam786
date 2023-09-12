import React from 'react'

export default function Iconbar() {
  return (
    <div className='flex justify-center items-center relative bottom-3'>
      <div className='flex justify-between items-center h-14 w-3/4 text-white'>
    <a href="/"><i className={`fa-sharp fa-${window.outerWidth<320?"lg":"2x"} fa-solid fa-book hover:underline hover:underline-offset-8`}></i></a>
    <a href="/"><i className={`fa-solid fa-${window.outerWidth<320?"lg":"2x"} fa-certificate  hover:underline hover:underline-offset-8`}></i></a>
    <a href="/"><i className={`fa-solid fa-${window.outerWidth<320?"lg":"2x"} fa-bookmark  hover:underline hover:underline-offset-8`}></i></a>
    <a href="/"><i className={`fa-solid fa-${window.outerWidth<320?"lg":"2x"} fa-hands-praying  hover:underline hover:underline-offset-8`}></i></a>
    </div>
    </div>
  )
}
