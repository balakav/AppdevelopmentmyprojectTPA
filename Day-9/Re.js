import React,{Component} from 'react';
import './Re.css'
import axios from 'axios';

class Re extends Component{

    constructor(props){
        super(props);
        this.state={
           
            name:'',
            email:'',
            password:'',
            confirmpassword:'',
        };
    }

    handleNameChange=(event)=>{
        this.setState({name:event.target.value})
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
          name:this.state.name,
          email:this.state.email,
          password:this.state.password ,
          confirmpassword:this.state.confirmpassword, 
        };
        console.log(data);
       axios.post('http://127.0.0.1:8080/post',data)
        .then( alert("Successfully Registered"))
    };
    render(){
        return ( 
            <body className='bodyre12'>
                <div className='rebox'>

              <center>
            <div className='container'>
            <form onSubmit={this.handleSubmit}>
                <h1>Registration Form</h1>
                
                    <p>Username</p>
                    <input type="text" id='un' value={this.state.name}
                        onChange={this.handleNameChange} className='reinput36'/><br></br>
                    <p>Email</p>
                    <input type="email" id='em'  value={this.state.email}
                        onChange={this.handleEmailChange} className='reinput36'/><br></br           >
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



























