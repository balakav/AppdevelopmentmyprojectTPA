import React, { useState } from 'react'
import './Re.css'
import { Avatar, Button,TextField, alertClasses } from '@mui/material';
import { Flag } from '@mui/icons-material';
import { Toast } from 'bootstrap';
function Re() {
    const [username,setUsername]=useState();
    const [password,setPassword]=useState('');
    const [confirmpassword,setConfirmpassword]=useState('');
    const [email,setEmail]=useState('');
    const g="@";
    const j = email.includes(g);
const emailp=/^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
    const AlertMessage=()=>{
       if(username.length===0){
           return ("fill the username");
        }
        else if(username.length<6){
            return alert("The username must be 6 char")
        }
        
        else if(email.length===0){
            return alert("write a correct email");
        }
        else if(j===false){
            return alert("Email have a '@' symbal");
        }
        else if(!emailp.test(email)){
            return alert("The email have a 'com' or 'in' or 'ac' or 'org' ");
        }
        else if(password.length===0){
            return alert("write a correct password");
        }
        else if(password.length<6){
            return alert("Password must be 6 char and include symbals");
        }
        else if(confirmpassword.length===0){
            return alert("write a correct confirmpassword");
        }
        else if(password.includes(confirmpassword)===false){
            return alert("Password mis matching !!!");
        }
        else{
            return alert("Sucessfully registered...");

        }
    }
    return (
    <div className='rebox'>
        <h1 className='reh1'>Registertion Form</h1>
        <center>
        <Avatar className='reava'></Avatar><br></br>
        </center>
    <TextField label="Username" variant="outlined" className='email'value={username} onChange={(e) => setUsername(e.target.value)} required/><br></br><br></br>
      <TextField label="Email" variant="outlined" className='email'value={email} onChange={(e) => setEmail(e.target.value)} required/><br></br><br></br>
      <TextField label="Password" variant="outlined" className='password'type="password" value={password}onChange={(e) => setPassword(e.target.value)} required/><br></br><br></br>
      <TextField label="Confirmpassword" variant="outlined" className='password'type="password" value={confirmpassword} onChange={(e) => setConfirmpassword(e.target.value)} required/><br></br><br></br><br></br>
      <center>
      <Button variant="contained" className='submitbutton' onClick={AlertMessage}>Register</Button><br></br><br></br>
      
      </center>
      </div>
  )
}

export default Re