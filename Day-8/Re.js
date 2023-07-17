// import React, { useState } from 'react'
// import './Re.css'
// import { Alert, Avatar, Button,TextField, alertClasses } from '@mui/material';
// import { Flag } from '@mui/icons-material';
// import { Toast } from 'bootstrap';
// import { Link } from 'react-router-dom';
// import Home from './Home.js'

// function Re() {
//     const [username,setUsername]=useState();
//     const [password,setPassword]=useState('');
//     const [confirmpassword,setConfirmpassword]=useState('');
//     const [email,setEmail]=useState('');
// //     const g="@";
// //     const j = email.includes(g);
// //     const reactElement = <Home/>;
// //     const data = { component: 'Home' };
// //     function CallMyFunction(){
// //        return (
// //         <div>
// //             <Home></Home>
// //         </div>
// //        )
     
// //     }
    
// // const emailp=/^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
// //     const AlertMessage=()=>{
// //        if(username.length===0){
// //            return ("fill the username");
// //         }
// //         else if(username.length<6){
// //             return alert("The username must be 6 char")
// //         }
        
// //         else if(email.length===0){
// //             return alert("write a correct email");
// //         }
// //         else if(j===false){
// //             return alert("Email have a '@' symbal");
// //         }
// //         else if(!emailp.test(email)){
// //             return alert("The email have a 'com' or 'in' or 'ac' or 'org' ");
// //         }
// //         else if(password.length===0){
// //             return alert("write a correct password");
// //         }
// //         else if(password.length<6){
// //             return alert("Password must be 6 char and include symbals");
// //         }
// //         else if(confirmpassword.length===0){
// //             return alert("write a correct confirmpassword");
// //         }
// //         else if(password.includes(confirmpassword)===false){
// //             return alert("Password mis matching !!!");
// //         }
// //         else{
// //          return CallMyFunction();
        

// //         }
// //     }
//     return (
//     <div className='rebox'>
//         <h1 className='reh1'>Registration Form</h1>
//         <center>
//         <Avatar className='reava'></Avatar><br></br>
//         </center>
//         <TextField label="Username" variant="outlined" className='email'value={username} onChange={(e) => setUsername(e.target.value)} required/><br></br><br></br>
//         <TextField label="Email" variant="outlined" className='email'value={email} onChange={(e) => setEmail(e.target.value)} required/><br></br><br></br>
//         <TextField label="Password" variant="outlined" className='password'type="password" value={password}onChange={(e) => setPassword(e.target.value)} required/><br></br><br></br>
//         <TextField label="Confirmpassword" variant="outlined" className='password'type="password" value={confirmpassword} onChange={(e) => setConfirmpassword(e.target.value)} required/><br></br><br></br><br></br>
//         <center>
//         <Button variant="contained" className='submitbutton'>Register</Button><br></br><br></br>
//       </center>
//       </div>
//   )
// }

// export default Re

import React,{Component} from 'react';
import './Re.css'
import axios from 'axios';

class Re extends Component{

    constructor(props){
        super(props);
        this.state={
           
            username:'',
            email:'',
            password:'',
            confirmpassword:'',
        };
    }

    handleUsernameChange=(event)=>{
        this.setState({username:event.target.value})
    };
    handleEmailChange=(event)=>{
        this.setState({email:event.target.value})
    };
    handlePasswordChange=(event)=>{
        this.setState({password:event.target.value})
    };
    handleConfirmpasswordChange=(event)=>{
        this.setState({confirmpassword:event.target.value})
    };
    

    handleSubmit = (event) => {
        event.preventDefault();
        const data = {
          username:this.state.username,
          email:this.state.email,
          password:this.state.password ,
          confirmpassword:this.state.confirmpassword, 
        };
        
        axios.post('http://127.0.0.1:8080/p', data)
        .then( alert("Successfully Registrated"))
    }
    render(){
        return ( 
            <body>

                <div className='rebox'>

              <center>
            <div className='container'>
            <form onSubmit={this.handleSubmit}>
                <h1>Registration Form</h1>
                
                    <p>Username</p>
                    <input type="text" id='un' placeholder='ex:Balakavi_20' value={this.state.username}
                        onChange={this.handleUsernameChange} className='reinput36'/><br></br>
                    <p>Email</p>
                    <input type="email" id='em' placeholder='ex:bkavi3997@gmail.com' value={this.state.email}
                        onChange={this.handleEmailChange} className='reinput36'/><br></br>
                    
           
               
                
                    
                    <p>Password</p>
                    <input type="password" id='pwd' placeholder='ex:qwS12#$' value={this.state.password}
                        onChange={this.handlePasswordChange} className='reinput36'/><br></br>
                    <p>Confirmpassword</p>
                    <input type="password" id='cpwd' placeholder='ex:qwS12#$' value={this.state.confirmpassword }
                        onChange={this.handleConfirmpasswordChange} className='reinput36'/><br></br><br></br><br></br>
                 <button class="button-64" role="button"><span class="text">Submit</span></button>
               
               
            </form>
            </div>
            </center>
                </div>
            </body>
         );
    }
}

export default Re
