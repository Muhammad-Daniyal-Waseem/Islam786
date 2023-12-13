import React, { useState } from 'react';
import Dis from './Dis'; // Import the Dis component

const Sections = (props) => {
  const [clickedHadees, setClickedHadees] = useState(null);
  const [BookName, setBookName] = useState("");
  const [HadeesChecker, setHadeesChecker] = useState(false);
  const [inputValue, setInputValue] = useState(''); // State variable to hold input value
  const [books, setbooks] = useState([" أبو داود السجستاني","البخاري"," سنن ابن ماجه "," الصحيح مسلم","النسائي","الطريدى"]); 

  const handleInputChange = (e) => {
    setInputValue(e.target.value); // Update the input value state
  };

  const handleButtonClick = (hadeesNumber) => {
    setClickedHadees(hadeesNumber);
    if(hadeesNumber>props.totalhadees)
    {
      setHadeesChecker(true);
    }
    else
    {
      setHadeesChecker(false);
    }
  
  };

  const renderContent = () => {
    if (clickedHadees&&!HadeesChecker) {
      props.setOff(false);

      return <Dis setOff={props.setOff}  setClickedHadees={setClickedHadees} totalhadees={props.totalhadees} no={clickedHadees} lan={props.lan} name={props.setName} />;
    } else {
      return (
        <div className='text-white h-full mb-16'>

          <div className="button-container h-full w-5/6 mx-auto col-md-3 grid grid-cols-3 gap-4">{generateButtons()}</div>
        </div>
      );
    }
  };

  const generateButtons = () => {
    const buttons = [];
    for (let i = 1; i <= props.totalhadees; i++) {
      buttons.push(
        <button key={i} className={`button border-solid border block my-6 ${window.outerWidth<450?"h-16":"h-20 w-4/5"} ${window.outerWidth<450?" h-10 w-20 px-5":""} mx-auto rounded-3xl font-bold  ${window.outerWidth<450?"text-xs":"text-2xl"}  hover:text-yellow-200`} style={{ backgroundColor: '#263329'}} onClick={() => handleButtonClick(i)}>
          Hadees {i}
        </button>
      );
    }
    return buttons;
  };

  const surah_Name = () => {
    let newBookName = "";
    if (props.name === "abudawud") newBookName = books[0];
    else if (props.name === "bukhari") newBookName = books[1];
    else if (props.name === "ibnmajah") newBookName = books[2];
    else if (props.name === "muslim") newBookName = books[3];
    else if (props.name === "nasai") newBookName = books[4];
    else if (props.name === "tirmidhi") newBookName = books[5];

    return newBookName;
  };
  const updatedBookName = surah_Name();

  return (
    <div className="z-20 absolute top-0 h-fit  w-full" style={{ backgroundColor: '#1c2121'}}>
        <h1 className={`${window.outerWidth<300?"text-lg font-bold":"font-extrabold text-2xl"} m-16 text-yellow-300`} style={{direction:"rtl"}}>{updatedBookName}</h1>
        <div className='flex flex-col items-center justify-center'>
          <div className=" w-screen h-12 flex justify-center items-center mt-4">
          <input
          style={{ backgroundColor: '#263329'}}
          className={`h-10 mx-8 w-1/3 rounded-md  border-2 border-solid ${!HadeesChecker?"border-green-700  text-white":"border-red-500 text-red-500"}`}
          placeholder=' Search...'
            type="number"
            value={inputValue<0?-1*inputValue:inputValue}
            onChange={handleInputChange} // Update input value state on change
            />
          <button className='text-white bg-green-700 font-bold hover:bg-green-900 w-14 h-8 rounded-lg' onClick={() => handleButtonClick(inputValue)}>OK</button> {/* Pass inputValue to handleButtonClick */}
            </div>
        {HadeesChecker&&<p className={`text-red-500 my-2 ${window.outerWidth>650?"mr-36":""} ${window.outerWidth<300?"text-xs":""}`}>Invalid Hadith Number    Enter Again... </p>}
        </div>
      {renderContent()} {/* Render either the buttons or the <Dis /> component */}
    </div>
  );
};

export default Sections;
