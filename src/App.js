
import './App.css';
import Header_Image from './components/Header_Image';
import Hero_section from './components/Hero_section';
import Navbar from './components/Navbar';
import Search_Bar from './components/Search_Bar';
import Second_bar from './components/Second_bar';


let check=false;
let size=0;

if(window.outerWidth<416)
{
  size=1;
}
else{
  size=2;
}


function App() {
  return (

<div>
    <Header_Image sizing={size} />
    <Search_Bar/>
    <Second_bar/>
    <Hero_section sizing={size}/>
    <Navbar/>
    </div>
   
  
  );
}

export default App;
