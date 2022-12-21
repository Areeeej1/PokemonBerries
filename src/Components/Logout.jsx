import React,{useState,useEffect} from "react";
import { Navigate ,useNavigate } from "react-router-dom";
const Logout = () => {
  const nav=useNavigate();
  const [redirect,setRedirect]=useState(localStorage.getItem('user'));
   useEffect(()=>{
     if(redirect!=="")
     {
    localStorage.removeItem('user');
    nav("/");
     }
     else{
      nav("/"); 
     }
  
  },[])
   
  return <div></div>;
};

export default Logout;
