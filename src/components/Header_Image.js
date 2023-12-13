import {React,useState,useEffect} from 'react';
import SideBar from './SideBar';

  export default function Header_Image(props) {

// Initialize your state variables with default values
const [currentDate, setCurrentDate] = useState('');
const [currentDay, setCurrentDay] = useState('');
const [currentDayName, setcurrentDayName] = useState('');
const [currentYear, setCurrentYear] = useState(0);
const [currentMonth, setCurrentMonth] = useState(0);
const [sidebar, setsidebar] = useState(false);
const [daysOfWeek, setdaysOfWeek] = useState( ["", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"]);


// Use useEffect to run code after the component has rendered
useEffect(() => {
  // Define a function to update the state variables
  const updateDate = () => {
    const currentDate = new Date();
    setCurrentDate(currentDate.toLocaleDateString());
    setCurrentDay(currentDate.getDay());
    setCurrentYear(currentDate.getFullYear());
    setCurrentMonth(currentDate.getMonth() + 1);
    const dayName = daysOfWeek[currentDate.getDay()];
    setcurrentDayName(dayName);
    };

  // Call the updateDate function immediately and then every 5000 milliseconds (5 seconds)
   updateDate();
  const intervalId = setInterval(updateDate, 5000);
  return () => clearInterval(intervalId);
  }, []);


  function sidebar__()
  {
   setsidebar(!sidebar);
  }

  return (
    <div >
      <div className='h-80 w-screen' style={{backgroundImage: 'url("b2.jpg")',
        backgroundSize: 'cover',
        backgroundRepeat:'no-repeat',

    }}>

<div className='flex'>
  <div className='flex h-12 w-3/5 py-4'>
<div className=' h-12  w-3/5 py-4 flex items-center justify-around min-[279px]:w-full max-[400]:w-full ' style={{color: '#c5e3cd'}}>
  <button onClick={sidebar__}><i className={` ml-2 text_hover_effect fa-solid  fa-${props.sizing} fa-bars hover:underline hover:underline-offset-8`}></i></button>
  <a href='/' className={`text_hover_effect text-${props.textsize} mx-2 hover:underline hover:underline-offset-8`}>Home</a>
 <a href='/Quran_menu'><i className={`text_hover_effect fas fa-${props.sizing} fa-book-open hover:underline hover:underline-offset-8`}></i></a> 
</div>
</div>
<div className=' h-12 w-2/5 m-4  flex justify-end' style={{color: '#c5e3cd'}}>
  <div className='py-4 h-12 w-2/5 flex justify-around'>
<i className={`hover:text-yellow-400 fa-regular fa-${props.sizing} fa-circle-play`}></i>
<i className={`hover:text-yellow-400 fa-solid fa-${props.sizing} mx-2 fa-bell`}></i>
<i className={`hover:text-yellow-400 fa-brands fa-${props.sizing} fa-whatsapp`}></i>
</div>
</div>
</div>

<div className='mx-8 h-56 text-white flex flex-col items-end justify-center'>
  <h1 className='text-3xl font-bold bold'>{currentYear}</h1>
  <p className='my-2'>{currentMonth} ,{currentDate}</p>
  <p><span className='mx-2'>{currentDayName}</span></p>
</div>


      </div>
      {sidebar&&<SideBar sidebar={sidebar} setsidebar={setsidebar}></SideBar>}
    </div>
  )
}