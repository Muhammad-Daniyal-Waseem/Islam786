import React, { useState, useEffect } from 'react';

const Calendar = (props) => {
  const [calendarData, setCalendarData] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1); // Initial month
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear()); // Initial year

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.aladhan.com/v1/gToHCalendar/${currentMonth}/${currentYear}`);
        const data = await response.json();
        setCalendarData(data.data);
        console.log(calendarData);
      } catch (error) {
        console.error('Error fetching calendar data:', error);
      }
    };

    fetchData();
  }, [currentMonth, currentYear]);
  const renderCalendar = () => {
    return (
      <div className="h-full container pb-20 mx-auto">
        <div className="flex flex-wrap items-center justify-between">
          <h2 className={` mx-2 mt-6 ${window.outerWidth<500?"text-xs":"text-2xl"} font-semibold sm:w-full`}>
            Islamic and Gregorian Calendar - {getMonthName(currentMonth)} / {currentYear}
          </h2>
          <div className=' mt-2'>
          <button
  className={`mx-4 mt-6 bg-blue-500 ${window.outerWidth<200?"text-xs":"text-sm"} ${window.outerWidth<390?"text-sm":"text-lg font-bold"} hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
  onClick={() => setCurrentYear(currentYear - 1)}
>
  Previous Year
</button>

<button
  className={`mx-4 mt-6 bg-green-500 ${window.outerWidth<200?"text-xs":"text-sm"} ${window.outerWidth<390?"text-sm":"text-lg font-bold"} hover:bg-green-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
  onClick={() => setCurrentMonth(prevMonth(currentMonth))}
>
  Previous Month
</button>

<button
  className={`mx-4 mt-6 bg-yellow-500 ${window.outerWidth<200?"text-xs":"text-sm"} ${window.outerWidth<390?"text-sm":"text-lg font-bold"} hover:bg-yellow-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
  onClick={() => setCurrentMonth(nextMonth(currentMonth))}
>
  Next Month
</button>

<button
  className={`mx-4 mt-6 bg-red-500 ${window.outerWidth<200?"text-xs":"text-sm"} ${window.outerWidth<390?"text-sm":"text-lg font-bold"} hover:bg-red-700 text-white  py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
  onClick={() => setCurrentYear(currentYear + 1)}
>
  Next Year
</button>
</div>

        </div>
        <div className={`grid  gap-4 m-4 ${window.outerWidth<490?"grid-cols-1":" grid-cols-3"} ${window.outerWidth>1040&&window.outerWidth<2000?"grid-cols-6":""}`}>
          {calendarData.map((day, index) => (
            
            <div key={day.hijri.date} className="border border-gray-300 p-4 rounded-md" style={{ backgroundColor: "#301d04" }}>
              <p className="text-lg font-semibold">
                {day.gregorian.date}, {day.gregorian.weekday.en}           
              </p>
              <p className="text-sm">
                {day.hijri.date}, {day.hijri.weekday.en}, <br />{day.hijri.month.ar}
                
              </p>
            </div>
  
          ))}
        </div>
        
      </div>
    );
  };
  
  const prevMonth = (currentMonth) => (currentMonth === 1 ? 12 : currentMonth - 1);
  const nextMonth = (currentMonth) => (currentMonth === 12 ? 1 : currentMonth + 1);

  const getMonthName = (month) => {
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return monthNames[month - 1];
  };

  return <div>{renderCalendar()}</div>;
};

export default Calendar;
