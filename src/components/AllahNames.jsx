import React, { useState, useEffect } from 'react';

const AllahNames = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [nameData, setNameData] = useState(null);
  
  const totalNames = 99; // Total number of names available

  const fetchNameData = async (index) => {
    try {
      const response = await fetch(`https://api.aladhan.com/v1/asmaAlHusna/${index}`);
      const data = await response.json();

      if (data.code === 200) {
        setNameData(data.data[0]);
      } else {
        console.error('Error fetching Allah Names data');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchNameData(currentIndex);
  }, [currentIndex]);

  const goToPrevious = () => {
    setCurrentIndex(prevIndex => (prevIndex === 1 ? totalNames : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex(prevIndex => (prevIndex === totalNames ? 1 : prevIndex + 1));
  };

  return (
    <div className=" flex flex-col items-center justify-center h-full text-yellow-300" style={{
      backgroundImage: 'url("img.jpg")',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }}>
      {nameData ? (
        <>
          <h1 className=' text-9xl my-20'>الله</h1>
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">{nameData.name}</h1>
            <p className="text-lg mb-2">{nameData.en.meaning}</p>
            <p className="text-sm text-white">Transliteration: {nameData.transliteration}</p>
            <p className="text-sm text-white">Number: {nameData.number}</p>
          </div>

          <div className="flex w-full justify-evenly py-6 m-4">
            <button
              className={`bg-slate-500 hover:bg-slate-700 text-black  ${window.outerWidth<300?"text-xs ":" "} font-bold py-2 px-4 rounded m-2`}
              onClick={goToPrevious}
            >
              Previous
            </button>
            <button
              className={` bg-slate-500 hover:bg-slate-700 text-black ${window.outerWidth<300?"text-xs ":" "} py-2 px-4 rounded m-2 font-bold`}
              onClick={goToNext}
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default AllahNames;
