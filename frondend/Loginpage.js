// import React, { Component} from 'react'
// import { Avatar, Button, Input, InputLabel, TextField } from '@mui/material';
// import './Loginpage.css'
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// class Loginpage extends Component {
   
//     constructor(props){
//       super(props);
//       this.state={
//           email:'',
//           password:'',
//       };
//   }

 
//   handleEmailChange=(event)=>{
//       this.setState({email:event.target.value})
//   };
//   handlePasswordChange=(event)=>{
//       this.setState({password:event.target.value})
//   };
 

//   handleSubmit = (event) => {
//           event.preventDefault();
//           const data = {
//             name:this.state.name,
//             email:this.state.email,
//             password:this.state.password ,
//             confirmpassword:this.state.confirmpassword, 
//           };
         
//           console.log(data);
//          axios.post('http://127.0.0.1:8080/api/v1/auth/authenticate',data)
//           .then( alert("Successfully Registered"))
      
//   };
//   render(){

//     return (
//       <div className='body1'>
//       <body>
//       <div className='appbox'>
//       <div className="App">
//         <h1 className='apph1'>LOGIN</h1>
//   {/* <img src="https://image.slidesdocs.com/responsive-images/slides/2-yellow-blue-cartoon-travel-plan-agency-project-introduction-powerpoint-background_8caae62cd2__960_540.jpg"></img> */}
//         <center>
//         <Avatar src="https://cdn-icons-png.flaticon.com/128/7606/7606103.png"></Avatar><br></br>
//         </center>
//         <div className='appbox1'>
//         <TextField label="Email" variant="outlined" className='email'value={this.state.email} onChange={this.handleEmailChange}/><br></br><br></br>
//         <TextField label="Password" variant="outlined" className='password'type="password" value={this.state.password} onChange={this.handlePasswordChange}/><br></br><br></br><br></br>
//         <center>
//        {/* <Link to="/Home"> */}
//         <Button variant="contained" className='submitbutton'>Login</Button>
//         {/* </Link>  */}
//         <br></br><br></br>
//         {/* <Link to="/Re"><a href="#">ForgotYourPassword?? or NewUser</a></Link> */}
//         </center>
//         </div>
//       </div>
//       </div>
//       </body>
//       </div>
//     )
//   }
//   }

// export default Loginpage;









import React, { useState } from 'react';
import { Avatar, Button, TextField } from '@mui/material';
import './Loginpage.css';
// import { Link} from 'react-router-dom';
import axios from 'axios';
import {Link, useNavigate} from "react-router-dom"
// import { useNavigate} from "react-router-dom"
const Loginpage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();
  // const handleEmailChange = (event) => {
  //   setEmail(event.target.value);
  // };

  // const handlePasswordChange = (event) => {
  //   setPassword(event.target.value);
  // };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const response = await axios.post('http://localhost:8081/api/v1/auth/authenticate', {
  //       email: email,
  //       password: password
  //     });
      
  //     console.log(response.data);
  //     localStorage.setItem('token', response.data.token);
  //     console.log(localStorage.getItem('token'));
      
  //     alert("Login Successful.");
  //     Navigate("/Home");
  //   } catch (error) {
  //     console.error('Error:', error);
      
  //   }
  // }
  const checkpassword = (e) =>{
    //const passwordRegex =/^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
    if (password.length===0 || password.length>=20) {
      window.alert(
        "Password should contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character."
      );
      initialize1()
      return;
    }
    else{
      window.alert("Registration Successful !!!");
    }
  }
  const initialize1 = () =>{
    setPassword('')
   
  }
  
 
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  

  const handleSubmit= async (e)=>{
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8081/api/v1/auth/authenticate",
        {
          email,
         // mobile,
          password,
        },
      );

      console.log("Sign in successful");
      console.log(response.data); 
      navigate('/Home');

      // setName("");
      // setEmail("");
      // setMobile("");
      // setPassword("");
      // setRegistrationError("");
    } catch (error) {
      console.error("Registration failed");
      console.error(error); 

    }
}
  return (
    <div className="body1">
      <body>
        <div className="appbox">
          <div className="App">
            <h1 className="apph1">LOGIN</h1>
            <center>
              <Avatar src="https://cdn-icons-png.flaticon.com/128/7606/7606103.png"></Avatar>
              <br></br>
            </center>
            <from onSumbit={handleSubmit}>

            <div className="appbox1">
              <input type="text"
                label="Email"
                placeholder='example@gamil.com'
                variant="outlined"
                className="lo"
                value={email}
                onChange={handleEmailChange}
                required
                />
              <br></br>
              <br></br>
              <input
                label="Password"
                variant="outlined"
                className="lo"
                placeholder='Enter password'
                type="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <br></br>
              <br></br>
              <br></br>
              <center>
               <Link to="/Home">
        <Button variant="contained" className='submitbutton' onClick={checkpassword}>Login</Button>
         </Link> 
                <br></br>
                <br></br>
                {/* <Link to="/Re"><a href="#">ForgotYourPassword?? or NewUser</a></Link> */}
              </center>
            </div>
            </from>
          </div>
        </div>
      </body>
    </div>
  );
  };
export default Loginpage;
