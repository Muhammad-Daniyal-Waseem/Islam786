import React, { useState } from 'react';
import Al_quran from './Al_quran';
import Recitation from './Recitation';

export default function Quran_menu(props) {
  const [showQuran, setShowQuran] = useState(false);
  const [showRecitation, setShowRecitation] = useState(false);
  const [back, setback] = useState(false);


  const handleQuranButtonClick = () => {
    setShowQuran(true);
    setback(!back);
    setShowRecitation(false); // Hide Recitation component if it was previously shown
  };

  const handleRecitationButtonClick = () => {
    setShowRecitation(true);
    setback(!back);
    setShowQuran(false); // Hide Al_quran component if it was previously shown
  };

  return (
    <div className={`flex justify-evenly w-full ${window.outerWidth<350?"flex-col justify-center items-center":""} mt-6 h-fit pb-20`}>
      <button onClick={handleQuranButtonClick} className={`rounded-xl ${window.outerWidth<350?"w-1/2 border-2 mb-3 ":""}`}>
        <img src='/al_Quran.jpg' className={`${window.outerWidth < 450 ? " h-28 w-full" : " h-36 w-full"} border  rounded-xl`} alt="Loading..." />
      </button>
      <button onClick={handleRecitationButtonClick} className={`rounded-xl ${window.outerWidth<350?"w-1/2 border-2":""}`}>
        <img src='/Recitation.jpg' className={`h-${window.outerWidth < 450 ? "28" : "36"} border w-full rounded-xl`} alt="Loading..." />
      </button>
      {!back&&showQuran && <Al_quran back={back} setback={setback} sizing={props.sizing} textsize={props.textsize}/>}
      {!back&&showRecitation && <Recitation back={back} setback={setback} sizing={props.sizing} textsize={props.textsize} />}
    </div>
  );
}
