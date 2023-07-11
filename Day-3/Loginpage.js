import React, { useState } from 'react'
import { Avatar, Button, Input, InputLabel, TextField } from '@mui/material';
import './Loginpage.css'

function Loginpage() {
    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");
  
    function validateForm() {
  
      return email.length > 0 && password.length > 0;
  
    }
  
    // function handleSubmit(event) {
  
    //   event.preventDefault();
  
    // }
  return (
    <body className='body1'>
    <div className='appbox'>
    <div className="App">
      <h1 className='apph1'>LOGIN</h1>
      <center>
      <Avatar src="https://cdn-icons-png.flaticon.com/128/7606/7606103.png"></Avatar><br></br>
      </center>
      <div className='appbox1'>
      <TextField label="Email" variant="outlined" className='email' value={email} onChange={(e) => setEmail(e.target.value)}/><br></br><br></br>
      <TextField label="Password" variant="outlined" className='password'type="password" value={password}onChange={(e) => setPassword(e.target.value)}/><br></br><br></br><br></br>
      <center>
      <Button variant="contained" className='submitbutton' onClick={validateForm()}>Login</Button><br></br><br></br>
      <a href="#">ForgotYourPassword??</a>
      </center>
      </div>
    </div>
    </div>
    </body>
  )
}

export default Loginpage