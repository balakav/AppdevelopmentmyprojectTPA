import React, { useState } from 'react'
import { Avatar, Button, Input, InputLabel, TextField } from '@mui/material';
import './Loginpage.css'
import { Link } from 'react-router-dom';

function Loginpage() {
    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    // const Myfunction=()=>{
    //   if(email.length===0){
    //     return alert("-->Fill the email");
    //   }
    //   else{
    //     return <Link to="/"></Link>
    //   }
    // }
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
     <Link to="/Home">
      <Button variant="contained" className='submitbutton'>Login</Button>
      </Link> 
      <br></br><br></br>
      <Link to="/Re"><a href="#">ForgotYourPassword??</a></Link>
      </center>
      </div>
    </div>
    </div>
    </body>
  )
}

export default Loginpage;