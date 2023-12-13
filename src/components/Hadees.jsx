// Hadees.js
import React from 'react';

const Hadees = (props) => {

  const abc = () => {
    props.setName(props.englishName);
    const specificLimit = props.limitofbooks.no[props.counting];
    props.setLimit(specificLimit);
    props.setShowLanguageButtons(true);
    props.setBooks(false);
   
  };
 
  return (
    <div className=' mx-auto h-full '>
      <button onClick={abc} className= 'rounded-xl box my-4 mx-2  text-white  h-32 w-32' style={{ backgroundImage: `url(../public/${props.englishName}.png)` }}>
        <div className="text-white h-32  w-32">
          <img src={`h${props.image_counter}.jpg`} className='rounded-xl h-32 w-32 border-2' alt="Loading..." />
        </div>
      </button>
    </div>
  );
}

export default Hadees;
