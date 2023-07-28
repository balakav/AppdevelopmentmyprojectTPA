import React, { useState } from 'react'
import { Avatar, Button, Input, InputLabel, TextField } from '@mui/material';
import './Alogin.css'
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
    <div className='body1'>
    <body>
    <div className='appbox'>
    <div className="App">
      <h1 className='apph1'>LOGIN</h1>
{/* <img src="https://image.slidesdocs.com/responsive-images/slides/2-yellow-blue-cartoon-travel-plan-agency-project-introduction-powerpoint-background_8caae62cd2__960_540.jpg"></img> */}
      <center>
      <Avatar src="https://cdn-icons-png.flaticon.com/128/7606/7606103.png"></Avatar><br></br>
      </center>
      <div className='appbox1'>
      <TextField label="Email" variant="outlined" className='email' value={email} onChange={(e) => setEmail(e.target.value)}/><br></br><br></br>
      <TextField label="Password" variant="outlined" className='password'type="password" value={password}onChange={(e) => setPassword(e.target.value)}/><br></br><br></br><br></br>
      <center>
     <Link to="/Admin">
      <Button variant="contained" className='submitbutton'>Login</Button>
      </Link> 
      <br></br><br></br>
      <Link to="/"><a href="#">ForgotYourPassword?? or NewUser</a></Link>
      </center>
      </div>
    </div>
    </div>
    </body>
    </div>
  )
}

export default Loginpage;