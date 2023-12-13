import React, { useEffect, useState } from "react";
import Surah_Buttons from "./Surah_Buttons";
import Surah_content from "./Surah_content";
import Quran_surahs from "./Quran_surahs";

function App() {
  const [surahButtons, setSurahButtons] = useState([]);
  const [surahAyahs, setsurahAyahs] = useState([]);
  const [clickedButton, setClickedButton] = useState(true);
  const [textAyyahs, settextAyyahs] = useState("");
  const [surahcontent_back, setsurahcontent_back] = useState(false);
  const [Arabic, setArabic] = useState("");
  var suraharray;
  function set_click(value) {
    setClickedButton(value);
    console.log("clickedButton = ", clickedButton);
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.alquran.cloud/v1/quran/quran-uthmani"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        console.log(jsonData);
        suraharray = jsonData.data.surahs;
        const buttons = suraharray.map((surah, index) => (
          <Surah_Buttons
            keyss={index}
            a_n={surah.name}
            e_n={surah.englishName}
            surah={surah}
            set_click={set_click}
            textAyyahs={textAyyahs}
            settextAyyahs={settextAyyahs}
            setClickedButton={setClickedButton}
            setsurahAyahs={setsurahAyahs}
            surahAyahs={surahAyahs}
            setArabic={setArabic}
          />
        ));
        setSurahButtons(buttons);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
    <div className={` text-white h-fit`}>
      {clickedButton && surahButtons}
      </div>
      {!surahcontent_back&&!clickedButton && <Surah_content Arabic={Arabic} setsurahcontent_back={setsurahcontent_back} surahAyahs={surahAyahs}/>}
      {surahcontent_back&&<Quran_surahs></Quran_surahs>}
      </>
  );
}
export default App;





