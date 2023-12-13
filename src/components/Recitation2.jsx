import React, { useEffect, useState } from "react";
import Recitation_btn from "./Recitation_btn";


function App() {
  const [surahButtons, setSurahButtons] = useState([]);
  const [surahAyahs, setsurahAyahs] = useState([]);
  const [clickedButton, setClickedButton] = useState(true);
  const [textAyyahs, settextAyyahs] = useState("");
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
          <Recitation_btn
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
    <div className=" text-white">
      {clickedButton && surahButtons}
      </div>

      </>
  );
}
export default App;
