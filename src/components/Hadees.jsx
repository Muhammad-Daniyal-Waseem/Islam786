// Hadees.js
import React from 'react';

const Hadees = (props) => {



 

  const abc = () => {
    props.setName(props.englishName);
    const specificLimit = props.limitofbooks.no[props.counting];
    console.log(specificLimit + "n");
    props.setLimit(specificLimit);
    props.setShowLanguageButtons(true);
    props.setBooks(false);
   
  };
 
  

  return (
    <>
      <button onClick={abc} className= 'box my-4 mx-2  text-white  h-32 w-32' style={{ backgroundImage: `url(../public/${props.englishName}.png)` }}>
        <div className="c text-white h-32  w-32">
          <img src={`h${props.image_counter}.jpg`} className='h-32 w-32' alt="Loading..." />
        </div>
      </button>
    </>
  );
}

export default Hadees;
