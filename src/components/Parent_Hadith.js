import React, { useEffect, useState } from 'react';
import Hadees from './Hadees';
import Section from './Section';

function App(props) {
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
        console.log("Name1 = ",sihaSittaBooks);
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
    <div className={`${showLanguageButtons?"pb-24":""}`}>
      <div className={`px-3  pb-4 flex ${window.outerWidth<290?"flex-col justify-center":""}} ${window.outerWidth<889?"":"my-4"} flex-wrap h-fit mb-16 w-full rounded-lg `}>
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
      <div className={`language-buttons1 ${window.outerWidth<300?"text-xs":""} `}>
      {!showbooks&&!showSections&&off&&
        <button className='text-white border w-20 flex justify-center items-center px-2 py-2 m-4 rounded-2xl hover:text-yellow-200' style={{ backgroundColor: '#263329'}} onClick={back}><i class=" text-white fa-solid fa-arrow-left px-2 hover:text-yellow-200"></i>Back</button>

}</div>
 <div className={`${window.outerWidth<300?"text-xs":""} language-buttons1 z-30 ${showSections?"absolute top-0":" "}`}>
      {!showbooks&&!showLanguageButtons&&showSections&&off&&
       <button className=' text-white w-20 z-30 flex border justify-center items-center px-2 py-2 m-4 rounded-2xl hover:text-yellow-200' style={{ backgroundColor: '#263329'}} onClick={back1}><i class=" text-white z-20 fa-solid fa-arrow-left px-2 hover:text-yellow-200"></i>Back</button>

}</div>


      {showLanguageButtons && (
  <div className={`mx-auto rounded-2xl  border ${window.outerWidth<340?" p-2":""} ${window.outerWidth<650?"flex-col":""} ${window.outerWidth>650?"relative bottom-14":""} language-buttons flex flex-wrap justify-around text-white h-20 w-3/4 `} style={{ backgroundColor: '#263329'}}>
    <button className={` text-${window.outerWidth<300?"xs":"lg"} btn_decoration`}  onClick={() => def("eng")}>English</button>
    <button className={` text-${window.outerWidth<300?"xs":"lg"} btn_decoration`} onClick={() => def("urd")}>Urdu</button>
    <button className={` text-${window.outerWidth<300?"xs":"lg"} btn_decoration`} onClick={() => def("ind")}>Indonesian</button>
    <button className={` text-${window.outerWidth<300?"xs":"lg"} btn_decoration`} onClick={() => def("ben")}>Bengali</button>
    <button className={` text-${window.outerWidth<300?"xs":"lg"} btn_decoration`} onClick={() => def("tur")}>Turkish</button>
    <button className={` text-${window.outerWidth<300?"xs":"lg"} btn_decoration`} onClick={() => def("ara")}>Arabic</button>
  </div>
)}


      {showSections && <Section name={name} setOff={setOff} setName={name} lan={lan} totalhadees={limit} />}
    </div>
  );
}

export default App;
