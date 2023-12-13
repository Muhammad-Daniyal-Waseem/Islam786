import React, { useEffect } from 'react'
export default function Surah_content(props) {


function back_page()
{
  
props.setsurahcontent_back(true);
}

  const renderAyahs = () => {
    return props.surahAyahs.map((ayah,index) => (      
      <div key={ayah.number} className='ayah-box flex' style={{ backgroundColor: '#263329' ,direction:"rtl"}}>
        <p>{ayah.text}</p>
        <div className='mx-4 border-solid border-yellow-500 text-yellow-500 border rounded-full p-4 w-9 h-9 flex justify-center items-center'>{index+1}</div>
      </div>
    ));
  };
  return (
    <div className=' absolute top-0 z-10 w-full h-fit pb-36 text-white' style={{ backgroundColor: '#1c2121'}}>
        <div className='flex'><button className='text-white w-20 flex justify-center items-center px-2 py-2 m-4 rounded-2xl hover:text-yellow-200' style={{ backgroundColor: '#263329'}} onClick={back_page}><i class=" text-white fa-solid fa-arrow-left px-2 hover:text-yellow-200"></i>Back</button></div><p className= {`${window.outerWidth<350?"text-xl":""} font-extrabold text-amber-500 text-3xl text-end mr-7 mb-8`}>{props.Arabic}</p>
      {renderAyahs()}
    </div>
  );
}
