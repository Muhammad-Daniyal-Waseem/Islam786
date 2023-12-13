import React, { useEffect, useState } from "react";
export default function Surah_Buttons(props) {
  const [color_btn, setcolor_btn] = useState(false);
  const [favSurahArray, setFavSurahArray] = useState([]);
  const [showParagraph, setShowParagraph] = useState(false); // for dialogue box
   const [count, setcount] = useState(false);
   const [para, setpara] = useState(true);// pragrapgh
   const [Dialog, setDialog] = useState(false);//dialog

  function ayahs_text() {
    props.setsurahAyahs(props.surah.ayahs);
    props.set_click(true);
    props.setClickedButton(false);
    props.setArabic(props.surah.name);
  }

  function close_dialog()
  {                                         // for dialog
    setShowParagraph(!showParagraph);
  }

  function color() {


    setShowParagraph(true);   // for paragraph
    if(para)
    {
    const timer = setTimeout(() => {
      setShowParagraph(false);
    }, 2000);
     }

  


    const existingFavSurahArray = JSON.parse(localStorage.getItem("favSurahArray")) || [];

    // Find the index of the surah with the current keyss
    const indexOfSurah = existingFavSurahArray.findIndex(
      (surah) => surah.keyss === props.keyss 
    );

    // setShowParagraph(true);                   // for dialog
    setcount(true);
    if (indexOfSurah !== -1) {
      // Remove the surah if it exists
      existingFavSurahArray.splice(indexOfSurah, 1);
    } else {
      // Add the new data
      const newData = {
        keyss: props.keyss,
        a_n: props.a_n,
        e_n: props.e_n,
        ayahsLength: props.surah.ayahs.length,
        color: true,
        ayahs: props.surah.ayahs, // Store ayahs here
      };
      existingFavSurahArray.push(newData);
    }

    // Sort the array based on keyss before storing it in local storage
    existingFavSurahArray.sort((a, b) => a.keyss - b.keyss);

    localStorage.setItem("favSurahArray", JSON.stringify(existingFavSurahArray));
    setcolor_btn(!color_btn);
  }

  useEffect(() => {
    const storedFavSurahArray = JSON.parse(localStorage.getItem("favSurahArray")) || [];
    setFavSurahArray(storedFavSurahArray);
    const currentSurah = storedFavSurahArray.find((surah) => surah.keyss === props.keyss);
    setcolor_btn(currentSurah && currentSurah.color);
  }, [props.keyss]);

  return (
    <div>
      {Dialog&&showParagraph&&color_btn&&<div className="w-fit mx-auto px-3 pt-6 pb-3 rounded-lg" style={{backgroundColor:"#263329"}}>{<img
      className="inline mr-2 h-5 w-6"
      src="favicon.png" // Replace "favicon.png" with the path to your image
      alt="Description of the image" // Add an appropriate alt text for accessibility
    />}<p className="inline">Islam786</p> <div className="mt-3 rounded-lg h-24 flex flex-col justify-center w-fit mx-auto " style={{backgroundColor:"#1c2121"}}><p className={`px-2 ${window.outerWidth<450?"text-xs":""} text-center mb-2`}><i class="fa-sharp fa-solid fa-square-check mx-2"></i>The Surah {props.keyss+1} has been added to Favourites Successfully</p><div className="w-full flex justify-end"><button onClick={close_dialog} className={`${window.outerWidth<430?"text-sm":""} py-1 my-2 w-fit mr-7 px-4 rounded-md`} style={{backgroundColor:"#263329"}}>OK</button></div></div></div>}
         {Dialog&&count&&!color_btn&&showParagraph&&<div className="w-fit mx-auto px-3 pt-6 pb-3 rounded-lg" style={{backgroundColor:"#263329"}}>{<img
      className="inline mr-2 h-5 w-6"
      src="favicon.png" // Replace "favicon.png" with the path to your image
      alt="Description of the image" // Add an appropriate alt text for accessibility
    />}<p className="inline">Islam786</p> <div className="mt-3 rounded-lg h-24 flex flex-col justify-center w-fit mx-auto " style={{backgroundColor:"#1c2121"}}><p className={`px-2 ${window.outerWidth<450?"text-xs":""} text-center mb-2`}><i class="fa-sharp fa-solid fa-square-check mx-2"></i>The Surah {props.keyss+1} has  removed from Favourites Successfully</p><div className="w-full flex justify-end"><button onClick={close_dialog} className={`${window.outerWidth<430?"text-sm":""} my-2 w-fit mr-7 px-4 rounded-md`} style={{backgroundColor:"#263329"}}>OK</button></div></div></div>}
       
       {para&&showParagraph&&color_btn&&<p className={`px-2 ${window.outerWidth<450?"text-xs":""} text-center mb-2`}><i class="fa-sharp fa-solid fa-square-check mx-2"></i>The Surah {props.keyss+1} has been added to Favourites Successfully</p>}
       {para&&count&&!color_btn&&showParagraph&&<p className={`px-2 ${window.outerWidth<450?"text-xs":""} text-center mb-2`}><i class="fa-sharp fa-solid fa-square-check mx-2"></i>The Surah {props.keyss+1} has  removed from Favourites Successfully</p>}
        <div className="py-4 flex justify-center" style={{backgroundColor: '#1c2121'}}>
            <div className="h-20 w-4/5 rounded-xl flex justify-between items-center " style={{backgroundColor:"#263329"}}>
              <button onClick={ayahs_text} className={`flex mx-4 ${window.outerWidth<300?"text-xs":"text-sm"} ${window.outerWidth<451?"text-sm":"text-xl"}`}>
                <div className="flex my-2">
              {props.keyss+1}
              <span className={`mx-4  font-bold ${window.outerWidth>451?"text-lg":""} text-lime-600`}>
              {props.a_n}
                </span>
                </div>
                <div className="flex flex-col w-fit h-fit" >
               <p>{props.e_n}</p> 
                <p>verses {props.surah.ayahs.length}</p>
                </div>
              </button>
              <button onClick={color} className={` ${color_btn? "text-red-800":"text-white"} mx-4`}>
                <i class={`fas fa-${window.outerWidth>600?"lg":"sm"} fa-heart`}></i>
                </button>
            </div>
          
         </div>
         </div> 
  );
}


