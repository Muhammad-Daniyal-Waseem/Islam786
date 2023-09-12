import {React,useState,useEffect} from 'react'




// setInterval(Timer=()=>{
//   setcurrentDate(new Date());
//   setcurrentYear(currentDate.getFullYear());
//   setcurrentMonth(currentDate.getMonth() + 1); 
  
//   },5000)

//   let [currentDate, setcurrentDate] = useState(0);
//   let [currentYear, setcurrentYear] = useState(0);
//   let [currentMonth, setcurrentMonth] = useState(0);





  export default function Header_Image(props) {

// Initialize your state variables with default values
const [currentDate, setCurrentDate] = useState('');
const [currentDay, setCurrentDay] = useState('');
const [currentDayName, setcurrentDayName] = useState('');
const [currentYear, setCurrentYear] = useState(0);
const [currentMonth, setCurrentMonth] = useState(0);
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Use useEffect to run code after the component has rendered
useEffect(() => {
  // Define a function to update the state variables
  const updateDate = () => {
    const currentDate = new Date();
    setCurrentDate(currentDate.toLocaleDateString());
    setCurrentDay(currentDate.getDay());
    setCurrentYear(currentDate.getFullYear());
    setCurrentMonth(currentDate.getMonth() + 1);
   
    setcurrentDayName(daysOfWeek[currentDay]);
  };

  // Call the updateDate function immediately and then every 5000 milliseconds (5 seconds)
  updateDate();
  const intervalId = setInterval(updateDate, 5000);
  return () => clearInterval(intervalId);
  }, []);


  return (
    <div >
      <div className='h-80 w-screen' style={{backgroundImage: 'url("b2.jpg")',
        backgroundSize: 'cover',
      
        backgroundRepeat:'no-repeat',

    }}>

<div className='flex'>
  <div className='flex h-12 w-8/12'>
<div className=' h-12 w-5/12 py-4 flex items-center justify-around min-[279px]:w-full max-[400]:w-full ' style={{color: '#c5e3cd'}}>
  <a href='/'><i className={`text_hover_effect fa-solid  fa-${props.sizing}x fa-bars hover:underline hover:underline-offset-8`}></i></a>
  <a href='/' className={`text_hover_effect text-${window.outerWidth>416?"2xl":"sm"} mx-2 hover:underline hover:underline-offset-8`}>Home</a>
 <a href='/'><i className={`text_hover_effect fas fa-${props.sizing}x fa-book-open hover:underline hover:underline-offset-8`}></i></a> 
</div>
</div>
<div className=' h-12 w-5/12  flex justify-end' style={{color: '#c5e3cd'}}>
  <div className='py-4 h-12 w-4/12 flex justify-around'>
<i className={`hover:text-yellow-400 fa-regular fa-${props.sizing}x fa-circle-play`}></i>
<i className={`hover:text-yellow-400 fa-solid fa-${props.sizing}x mx-2 fa-bell`}></i>
<i className={`hover:text-yellow-400 fa-brands fa-${props.sizing}x fa-whatsapp`}></i>
</div>
</div>
</div>

<div className='mx-4 h-56 text-white flex flex-col items-end justify-center'>
  <h1 className='text-3xl font-bold bold'>{currentYear}</h1>
  <p className='my-2'>{currentMonth},{currentDate}</p>
  <p><span className='mx-2'>{currentDayName}</span><span>{currentDate}</span></p>
</div>


      </div>
    </div>
  )
}
