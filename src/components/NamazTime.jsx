import React, { useState } from 'react';

const NamazTime = () => {
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState('');
  const [prayerTimings, setPrayerTimings] = useState(null);
  const [date, setDate] = useState(null);
  const [hijri, setHijri] = useState(null);

  const handleSearch = async () => {
    try {
      if (loading) return; // Do nothing if already loading
      setLoading(true);
      const capitalizedCity = city.charAt(0).toUpperCase() + city.slice(1);
      const response = await fetch(`https://api.aladhan.com/v1/timingsByCity/15-11-2023?city=${capitalizedCity}&country=&method=8`);
      const data = await response.json();
      console.log('first', data);
      if (data.code === 200) {
        setPrayerTimings(data.data.timings);
        setDate(data.data.date.gregorian.date);
        setHijri(data.data.date.hijri.date);
      } else {
        console.error('Error fetching prayer timings');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="absolute z-20 top-0 h-fit flex flex-col items-center justify-center w-full pt-14 pb-60" style={{backgroundColor:"#1c2121"}}>
      <h1 className="text-3xl font-bold mb-4 text-yellow-400">Prayer Timings</h1>
      <div className="flex flex-col items-center text-yellow-200">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="rounded py-2 px-4 mb-4"
          style={{ backgroundColor: "#263329" }}
        />
        <button
          onClick={handleSearch}
          disabled={loading}
          className="text-yellow-200 hover:text-yellow-300 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          style={{ backgroundColor: "#263329" }}
        >
          {loading ? 'Loading...' : 'Search'}
        </button>
      </div>

      <div className='mt-8 grid  grid-cols-3 gap-4 text-yellow-200'>
        {prayerTimings &&
          Object.entries(prayerTimings).map(([prayer, time]) => (
            <div key={prayer} className={`bg-white p-4 ${window.outerWidth<520?" w-20":""} rounded-md shadow-md`} style={{ backgroundColor: "#263329" }}>
              <h2 className={`${window.outerWidth<520?"text-sm":"text-lg"} font-semibold mb-2`}>{prayer}</h2>
              <p className={`${window.outerWidth<520?"text-xs":"text-sm"}`}>{time}</p>
            </div>
          ))}
      </div>

      {date && hijri && (
        <div className="mt-8 text-yellow-400">
          <p>
            <strong>Gregorian Date: </strong> {date}
          </p>
          <p>
            <strong>Hijri Date: </strong> {hijri}
          </p>
        </div>
      )}
    </div>
  );
};

export default NamazTime;
