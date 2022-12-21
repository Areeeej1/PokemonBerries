import React,{useState} from 'react'
import {Link} from "react-router-dom";
import "./Home.css"
const Home = () => {
  const [login,setlogin]=useState(localStorage.getItem('user'));
  return (

  
   <div className='gridContainer'>
   {login? <div className="item4">Welcome {login}</div>:null}
   <div className="item1"><Link to="/berries">Berries</Link></div>
   <div className="item2"><Link to="/berryFirmnesses">Berry Firmnesses</Link>
   </div>
   <div className="item3"><Link to="/berryFlavors">Berry Flavors</Link></div>  
  
   
      </div>
    

   
  )
}

export default Home