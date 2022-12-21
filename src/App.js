
import './App.css';
import React,{useState,useEffect} from "react"
import Login from './Components/Login/Login';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Berries from './Components/Berries/Berries';
import BerryFirmnesses from './Components/Berries/BerryFirmnesses';
import BerryFlavors from './Components/Berries/BerryFlavors';
import Logout from './Components/Logout';
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom';
import logo from "./Components/Images/logo6.jpg"
import MenuIcon from '@mui/icons-material/Menu';
function App() {

  const [menu, setmenu] = useState(window.innerWidth < 602);
  const [detail,setDetailMenu]=useState(false);
  const [login,setlogin]=useState(localStorage.getItem('user'));
  const validLogin=()=>{
    setlogin(localStorage.getItem('user'));
  }
  setInterval(validLogin, 1000);

         
  useEffect(() => {
    window.addEventListener("resize", () => {
      
      const tranfer = window.innerWidth < 602;
   
        setmenu(tranfer);
    });
  });
 
  return (
    <>
    <BrowserRouter>
    <header className="header">
    <div className='logo' >
      <img src={logo} alt="logo"></img>
    </div>
    <div className='welcome' >
      Pokémon
    </div>
    
    {menu?
    
    <div className='menuBarMain'>
    
      { detail?
   <div className='menuBarMainSub' onMouseEnter={()=>{setDetailMenu(true)}} onMouseLeave={()=>{setDetailMenu(false)}}>
    <div className="menuBar"><Link to="/">Home</Link></div>
    <div className="menuBar"><Link to="/about">About</Link></div>
    <div className="menuBar">{login?<Link to="/logout">Logout</Link>:<Link to="/login">Login</Link>}</div>
    </div>:null}
    <MenuIcon  className='divMenuIcon'
    onMouseEnter={()=>{setDetailMenu(true)}} onMouseLeave={()=>{setDetailMenu(false)}}
    
    ></MenuIcon>
    
    </div>
    
    : <div className='navbarleft'>
    
      <div className="navbar"><Link to="/">Home</Link></div>
        <div className="navbar"><Link to="/about">About</Link></div>
        
        <div className="navbar">{login?<Link to="/logout">Logout</Link>:<Link to="/login">Login</Link>}</div>
        
      	 </div>
     }
         </header>
    <Routes>
 <Route path="/"  element={<Home/>}/>
 <Route path="/berries"  element={<Berries/>}/>
 <Route path="/berryFirmnesses"  element={<BerryFirmnesses/>}/>
 <Route path="/berryFlavors"  element={<BerryFlavors/>}/>
 <Route path="/about"  element={<About/>}/>
 <Route path="/login" element={<Login/>}/>
 <Route path="/logout" element={<Logout/>}/>
</Routes>
     </BrowserRouter>   
                         
  </>

  );
}

export default App;
   