import React, { useEffect, useState } from 'react';
import Hadees from './Hadees';
import Section from './Section';

function App() {
  const [name, setName] = useState(null);
  const [lan, setLang] = useState('urd');
  const [limit, setLimit] = useState(0);
  const [sihaSittaBooks, setSihaSittaBooks] = useState(null);
  const [limitofbooks, setLimitOfBooks] = useState(null);
  const [showLanguageButtons, setShowLanguageButtons] = useState(false);
  const [showSections, setShowSections] = useState(false);
  const [showbooks, setBooks] = useState(true);
  const [off, setOff] = useState(true);
  let image_counter=0;

  let arrofno;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/info.json");
        const jsonData = await response.json();
        const sihaSittaEnglishNames = Object.keys(jsonData).filter(
          (key) => key !== "malik"
        );
 setSihaSittaBooks({
          english: sihaSittaEnglishNames,
        });
        arrofno = new Array(sihaSittaEnglishNames.length);
        for (let i = 0; i < sihaSittaEnglishNames.length; i++) {
          arrofno[i] = jsonData[sihaSittaEnglishNames[i]].hadiths.length;
        }
        setLimitOfBooks({
          no: arrofno,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the fetchData function when the component mounts
  }, []);

 

  function def(a) {
    setShowSections(true);
    setShowLanguageButtons(false);
    setLang(a);
  }

  function back() {
    setBooks(true);
    setShowLanguageButtons(false);
   }
   function back1() {
  
    setShowLanguageButtons(true);
    setShowSections(false);
   }
  return (
    <>
      <div className={`px-3 flex ${window.outerWidth<290?"flex-col justify-center":""}} flex-wrap my-4 mx-auto h-fit w-fit rounded-lg`}>
        {showbooks&&sihaSittaBooks &&
          sihaSittaBooks.english.map((element, index) => (
            <Hadees
            image_counter={++image_counter}
              key={index}
              englishName={element}
              counting={index}
              setName={setName}
              limitofbooks={limitofbooks} // Pass limitofbooks as a prop
              setLimit={setLimit}
              setShowLanguageButtons={setShowLanguageButtons}
              setBooks={setBooks}
            />
          
          ))}
      </div>
      <div className="language-buttons1">
      {!showbooks&&!showSections&&off&&
        <button className='text-white w-20 flex justify-center items-center px-2 py-2 m-4 rounded-2xl hover:text-yellow-200' style={{ backgroundColor: '#263329'}} onClick={back}><i class=" text-white fa-solid fa-arrow-left px-2 hover:text-yellow-200"></i>Back</button>

}</div>
 <div className="language-buttons1">
      {!showbooks&&!showLanguageButtons&&showSections&&off&&
       <button className='text-white w-20 flex justify-center items-center px-2 py-2 m-4 rounded-2xl hover:text-yellow-200' style={{ backgroundColor: '#263329'}} onClick={back1}><i class=" text-white fa-solid fa-arrow-left px-2 hover:text-yellow-200"></i>Back</button>

}</div>


      {showLanguageButtons && (
  <div className="mx-auto rounded-2xl  language-buttons flex flex-wrap justify-around text-white h-20 w-3/4" style={{ backgroundColor: '#263329'}}>
    <button className={` text-${window.outerWidth<300?"xs":"lg"} mx-2 font-bold hover:text-yellow-200 hover:underline decoration-4 hover:underline-offset-8`}  onClick={() => def("eng")}>English</button>
    <button className={` text-${window.outerWidth<300?"xs":"lg"} mx-2 font-bold hover:text-yellow-200 hover:underline decoration-4 hover:underline-offset-8`} onClick={() => def("urd")}>Urdu</button>
    <button className={` text-${window.outerWidth<300?"xs":"lg"} font-bold hover:text-yellow-200 hover:underline decoration-4 hover:underline-offset-8`} onClick={() => def("ind")}>Indonesian</button>
    <button className={` text-${window.outerWidth<300?"xs":"lg"} mx-2 font-bold hover:text-yellow-200 hover:underline decoration-4 hover:underline-offset-8`} onClick={() => def("ben")}>Bengali</button>
    <button className={` text-${window.outerWidth<300?"xs":"lg"} font-bold hover:text-yellow-200 hover:underline decoration-4 hover:underline-offset-8`} onClick={() => def("tur")}>Turkish</button>
    <button className={` text-${window.outerWidth<300?"xs":"lg"} font-bold hover:text-yellow-200 hover:underline decoration-4 hover:underline-offset-8`} onClick={() => def("ara")}>Arabic</button>
  </div>
)}


      {showSections && <Section setOff={setOff} setName={name} lan={lan} totalhadees={limit} />}
    </>
  );
}

export default App;
