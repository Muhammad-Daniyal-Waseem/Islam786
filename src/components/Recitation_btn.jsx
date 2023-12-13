



import React, { useState, useEffect } from 'react';

const LoaderWithPercentage = ({ progress }) => {
  return (
    <div className='flex flex-col justify-center items-center'>
    <div class=" inline-block animate-spin ease duration-300 w-8 h-8 border-t-2 border-b-2 border-t-green-600 border-b-yellow-200 rounded-full mx-auto"></div>
    <div className="loader-container">
      <div className="loader my-3 text-center">
        {progress}%
      </div>
    </div>
    </div>
  );
};

const AudioPlayer = ({ audioFile, surah, keys, set_surahAyahs, set_click, setClickedButton }) => {
  const [selectedAudio, setSelectedAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [color_btn, setcolor_btn] = useState(false);
  const [count, setcount] = useState(false);
  const [showParagraph, setShowParagraph] = useState(false);


  // Function to play an audio file
  const playAudio = (url) => {
    if (selectedAudio) {
      selectedAudio.pause(); // Pause the currently playing audio
      setIsPlaying(false); // Reset play state
    }

    const newAudio = new Audio(url);

    newAudio.onerror = (error) => {
      console.error('Audio playback error:', error);
    };

    newAudio.volume = 0.5;

    newAudio.play()
      .then(() => {
        setSelectedAudio(newAudio);
        setIsPlaying(true); // Set play state to true when audio is playing
      })
      .catch((error) => {
        console.error('Error playing audio:', error);
      });
  };


  // Function to pause audio
  const pauseAudio = () => {
    if (selectedAudio) {
      selectedAudio.pause();
      setIsPlaying(false); // Set play state to false when audio is paused
    }
  };

  function color()
  {
    setcolor_btn(!color_btn);
    setcount(true);
    setShowParagraph(true);
    const timer = setTimeout(() => {
      setShowParagraph(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }

  useEffect(() => {
    // Cleanup the audio element when the component unmounts
    return () => {
      if (selectedAudio) {
        selectedAudio.pause();
        selectedAudio.src = '';
      }
    };
  }, [selectedAudio]);

  return (
    <div>
    <div className="audio-player">
      <div className="py-4 flex  justify-center" style={{ backgroundColor: '#1c2121' }}>
        <div key={audioFile.id} className={`h-20 ${window.outerWidth < 400 ? " w-9/12" : "w-4/5"}  rounded-xl flex justify-between items-center`} style={{ backgroundColor: "#263329" }}>
          <button className={`flex mx-4 ${window.outerWidth < 300 ? "text-xs" : "text-sm"} ${window.outerWidth < 451 ? "text-sm" : "text-xl"}`}   onClick={() => {
    playAudio(audioFile.audio_url);
   
  }}>
    
            <div className="flex  my-2">
              {surah.number}
              <span className={`mx-4 font-bold ${window.outerWidth > 451 ? "text-lg" : ""} text-lime-600`}>
                {surah.name}
              </span>
            </div>
            <div className={`${window.outerWidth < 300 ? "text-xs" : "text-lg"} flex flex-col w-fit h-fit`}>
              <p>{surah.englishName}</p>
              <p>verses {surah.ayahs.length}</p>
            </div>
          </button>
          <button onClick={color} className={` ${color_btn ? "text-red-800" : "text-white"} mx-4`}>
            <i className={`fas fa-${window.outerWidth > 600 ? "lg" : "sm"} fa-heart`}></i>
          </button>
        </div>
        {selectedAudio && (
          <div>
            {isPlaying ? (
              <button className={`mx-3 px-1 ${window.outerWidth<300?"text-xs ":""} relative top-4 w-fit h-10 border rounded-lg`} style={{backgroundColor: '#263329'}} onClick={pauseAudio}>Pause</button>
            ) : (
              <button className={`mx-3 px-1 ${window.outerWidth<300?"text-xs ":""}  relative top-4 w-fit h-10 border rounded-lg`} style={{backgroundColor: '#263329'}} style={{backgroundColor: '#263329'}} onClick={() => playAudio(selectedAudio.src)}>Resume</button>
            )}
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

const Recitation = (props) => {
  const [audioFiles, setAudioFiles] = useState([]);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Simulated loading of audio data with intervals
    let progress = 0;
    const interval = setInterval(() => {
      progress += 90; // Increment the progress (adjust logic for real data loading)

      setLoadingProgress(progress > 100 ? 100 : progress);

      if (progress >= 100) {
        clearInterval(interval);
        // Fetch audio data from the provided API after simulated loading is done
        fetch('https://api.quran.com/api/v4/chapter_recitations/4')
          .then((response) => response.json())
          .then((data) => setAudioFiles(data.audio_files))
          .catch((error) => console.error('Error fetching audio data:', error));
      }
    }, 1000);

    return () => clearInterval(interval); // Cleanup function to clear interval on unmount
  }, []);

  return (
    <div className="App">
      {audioFiles.length > 0 ? (
        <AudioPlayer audioFile={audioFiles[props.keyss]} {...props} />
      ) : (<>
       
        <LoaderWithPercentage progress={loadingProgress} /></>
      )}
    </div>
  );
};

export default Recitation;
