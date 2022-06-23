import React from 'react';
import { useState } from 'react';
import './App.css';
import {auth} from './firebase'
import {  signInWithEmailAndPassword} from 'firebase/auth';
import TextField from "@material-ui/core/TextField";
import {useNavigate} from 'react-router-dom'
import { Button } from '@material-ui/core';



const SigninWithGoogle= ()=> {
  let navigate=useNavigate()
  var [email,setEmail]=useState("")
  var [message,setMessage]=useState('')
  var [password,setPassword]=useState('')
  const [open, setOpen] = useState(false);
  const handleToClose = (event, reason) => {
    if ("clickaway" === reason) return;
    setOpen(false);
  };
const signin=()=>
{

  signInWithEmailAndPassword(auth,email,password).then((res)=>{
    navigate('./todo')
    setOpen(true)
    setMessage('Logged in')
    fetch("https://sainath-todolist.herokuapp.com/login",{
            method:"POST",
            mode: 'cors', 
            headers: {
                'Content-Type': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
              },body: email
        })
        .then(response => {
          return response.json()
          
        })
        .then(data => {
        
        })
 setEmail(email='')
 setPassword(password='')
  }).catch((err)=>{
    console.log(err);
    // setOpen(true)
    //  setMessage(err)
  })
}
const signupbutton=()=>
{
  navigate('/Signup')
}


  return (
    <div className="SigninWithGoogle">
      
      <h1>Login</h1>
      <TextField required label="Enter Email" value={email}
      onChange={(e)=>{{setEmail(e.target.value)}}}></TextField>
      <br></br>
      <TextField required label="Enter Password" value={password}
      onChange={(e)=>{{setPassword(e.target.value)}}}></TextField>
      <br></br><br></br><br></br>
      <Button style={{backgroundColor:'aqua'}} onClick={signin}>Sign In</Button>
     <br></br><br></br>
     <Button style={{backgroundColor:'aqua'}} onClick={signupbutton}>Sign Up</Button>
      <br></br><br></br><br></br>
    </div>
  );
  
  }
  export {SigninWithGoogle}
