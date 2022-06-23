import React from 'react';
import { useState } from 'react';
import {auth} from './firebase'
import TextField from "@material-ui/core/TextField";
import { Button } from '@material-ui/core';
import { createUserWithEmailAndPassword, } from 'firebase/auth';
import IconButton from "@material-ui/core/IconButton";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";

const Signup=()=>
{
    // var [name,setName]=useState('')
    var [email,setEmail]=useState('')
    var [password,setPassword]=useState('')
    var [message,setMessage]=useState('')
    const [open, setOpen] = useState(false);
  const handleToClose = (event, reason) => {
    if ("clickaway" === reason) return;
    setOpen(false);
  };

     const signupfirebase=()=>
     {
        createUserWithEmailAndPassword(auth,email,password).then((res)=>{ setOpen(true);setMessage('Account Created')}).catch((err)=>{console.log(err);})
     }



   return(
   <div className='signup'>
<h1>Sign Up</h1>
<TextField required label="Enter Email" value={email}
      onChange={(e)=>{{setEmail(e.target.value)}}}></TextField> 
            <br></br><br></br>
      <TextField  required label="Enter Password" value={password}
      onChange={(e)=>{{setPassword(e.target.value)}}}></TextField>
       <br></br><br></br>
      <Button style={{backgroundColor:'aqua'}} onClick={signupfirebase}>Sign Up</Button>
      <Snackbar
        anchorOrigin={{
          horizontal: "left",
          vertical: "bottom",
        }}
        open={open}
        autoHideDuration={5000}
        message={message}
        onClose={handleToClose}
        action={
          <React.Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleToClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
   </div>
   )
}

export {Signup}