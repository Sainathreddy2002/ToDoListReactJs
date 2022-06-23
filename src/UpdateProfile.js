import React, { useState } from 'react';
import TextField from "@material-ui/core/TextField";
import { Button } from '@material-ui/core';
import { auth } from './firebase';
import { sendPasswordResetEmail, updateProfile } from 'firebase/auth';
import IconButton from "@material-ui/core/IconButton";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";


const UpdateProfile=()=>
{
    var [email,setEmail]=useState('')
    var [name,setName]=useState('')
    const [open, setOpen] = useState(false);
    const [message,setMessage]=useState('')
  
  const handleToClose = (event, reason) => {
    if ("clickaway" === reason) return;
    setOpen(false);
  };
    const resetpassword =()=>{
       sendPasswordResetEmail(auth,email)
       .then((res)=>{setOpen(true);  setMessage("Email sent to change password,please check your spam folders too.")})
       .catch((err)=>{console.log(err);})
    }
    const updatename=()=>{
        updateProfile(auth.currentUser,{displayName:name}).then((res)=>{ setOpen(true);
            setMessage("Name Updated")})
    }
    return(
        <div className='signup'>
            <h2>Update Name</h2>
            <TextField  required value={name} label="Update Name" onChange={(e)=>{{setName(e.target.value)}}}></TextField>
            <br></br><br></br>
            <Button style={{backgroundColor:'aqua'}} onClick={updatename}>Update Name</Button>
            <br></br><br></br>
            <h2>Change Password</h2>
            <TextField required value={email} label='Email' onChange={(e)=>{
              {setEmail(e.target.value); }}}></TextField>
            <br></br><br></br>
            <Button style={{backgroundColor:'aqua'}} onClick={resetpassword}>Change Password</Button>
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

export {UpdateProfile}