import React,{useState}from "react";
import "./Login.css";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [userName,setUserName]=useState("")
  const [error,setError]=useState()
  const [redirect,setRedirect]=useState(localStorage.getItem('user'))
  const login=(e)=>{
   e.preventDefault();
   
   if(userName.trim()!=="")
   {
    if((userName.trim()).length<10){
   localStorage.setItem('user', JSON.stringify(userName));
   setRedirect(true);
   }
   else{
     setError("UserName can't greater than 9 words")
   }

  }
   else{
    setError("UserName Required")
   }
  }
 
  return  redirect ? <Navigate to="/"/> :  <div className="login"><hr></hr>
   {error?<div className="error">{error}</div>:null}
   Enter Your Name <br></br>
    <input type="text"   onChange={(e)=>{setUserName(e.target.value);
    if(error!==""){
      setError("")
    }
  }
      } ></input>
   <br></br><button onClick={(e)=>login(e)}>Login</button>
   <hr></hr> </div>
};

export default Login;
