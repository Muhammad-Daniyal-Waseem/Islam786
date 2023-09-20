import React, { useState } from 'react';
import Dis from './Dis'; // Import the Dis component

const Sections = (props) => {
  const [clickedHadees, setClickedHadees] = useState(null);
  const [inputValue, setInputValue] = useState(''); // State variable to hold input value

  const handleInputChange = (e) => {
    setInputValue(e.target.value); // Update the input value state
  };

  const handleButtonClick = (hadeesNumber) => {
    setClickedHadees(hadeesNumber);
    
  };

  const renderContent = () => {
    if (clickedHadees) {
      console.log(props.lan);
      props.setOff(false);

      return <Dis setOff={props.setOff}  setClickedHadees={setClickedHadees} totalhadees={props.totalhadees} no={clickedHadees} lan={props.lan} name={props.setName} />;
    } else {
      return (
        <div className='text-white'>

          <div className="button-container h-fit w-5/6 mx-auto col-md-3 grid grid-cols-3 gap-4">{generateButtons()}</div>
        </div>
      );
    }
  };

  const generateButtons = () => {
    const buttons = [];
    for (let i = 1; i <= props.totalhadees; i++) {
      buttons.push(
        <button key={i} className={`button block my-6 h-${window.outerWidth<450?"16":"20"} mx-auto w-4/5 rounded-3xl font-bold  ${window.outerWidth<450?"text-xs":"text-2xl"}  hover:text-yellow-200`} style={{ backgroundColor: '#263329'}} onClick={() => handleButtonClick(i)}>
          Hadees {i}
        </button>
      );
    }
    return buttons;
  };

  return (
    <div className="section-container">
      {renderContent()} {/* Render either the buttons or the <Dis /> component */}
    </div>
  );
};

export default Sections;
