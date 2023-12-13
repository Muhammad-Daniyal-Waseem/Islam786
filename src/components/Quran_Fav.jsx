import React, { useState, useEffect } from "react";
import Surah_Buttons from "./Surah_Buttons"; // Import your Surah_Buttons component
import Surah_content from "./Surah_content";
import Quran_surahs from "./Quran_surahs";
export default function Quran_Fav(props) {
  const [favSurahArray, setFavSurahArray] = useState([]);
  const [surahButtons, setSurahButtons] = useState([]);
  const [surahAyahs, setsurahAyahs] = useState([]);
  const [clickedButton, setClickedButton] = useState(true);
  const [textAyyahs, settextAyyahs] = useState("");
  const [surahcontent_back, setsurahcontent_back] = useState(false);
  const [contentchecker, setcontentchecker] = useState(false);
  function set_click(value) {
    setClickedButton(value);
  }
  useEffect(() => {
    const storedFavSurahArray = JSON.parse(localStorage.getItem("favSurahArray")) || [];

    if(storedFavSurahArray.length>0)
    {setcontentchecker(true);
      console.log("Length2 = ",storedFavSurahArray.length)
      setFavSurahArray(storedFavSurahArray);
      const buttons = storedFavSurahArray.map((item, index) => (
        <Surah_Buttons
          key={index}
          keyss={item.keyss}
          a_n={item.a_n}
          e_n={item.e_n}
          surah={item}
          set_click={set_click}
          textAyyahs={textAyyahs}
          settextAyyahs={settextAyyahs}
          setClickedButton={setClickedButton}
          setsurahAyahs={setsurahAyahs}
          surahAyahs={surahAyahs}
        />
      ));
      setSurahButtons(buttons);
  }
 
 
  }, []);


if(contentchecker)
{
  return (
    <>
    <div className=" text-white w-full h-fit pb-24">
      {clickedButton && surahButtons}
      </div>
      {!surahcontent_back&&!clickedButton && <Surah_content setsurahcontent_back={setsurahcontent_back} surahAyahs={surahAyahs}/>}
      {surahcontent_back&&<Quran_surahs></Quran_surahs>}
      </>
  );}
  else{
    return(
      <div className=" text-white w-fit mx-auto px-3 pt-6 pb-4 rounded-lg" style={{backgroundColor:"#263329"}}>{<img
        className="inline mr-2 h-5 w-6"
        src="favicon.png" // Replace "favicon.png" with the path to your image
        alt="Description of the image" // Add an appropriate alt text for accessibility
      />}<p className="inline">Islam786</p> <div className="mt-3 rounded-lg h-24 flex flex-col justify-center w-fit mx-auto " style={{backgroundColor:"#1c2121"}}><p className={`px-2 ${window.outerWidth<450?"text-xs":""} text-center mb-2`}><i class="fa-solid fa-triangle-exclamation mr-1"></i>This space eagerly awaits your selection. It's empty now, but a simple click could turn it into your favorite. Go ahead, make this space your own!</p><div className="w-full flex justify-end"></div></div></div>
    );
  }
}
