import { Avatar, Button } from '@mui/material'
import React, { Component } from 'react'
import './Loru.css'
import { Link } from 'react-router-dom'
export class Loru extends Component {
  render() {
    return (
      <>
      <body className='pagebody'>

     <div className='logobox1o'>
        
        </div>
      <center>
      <div className='loru1'>
        <div className='pagediv'>

        <center>
          <Link to='/Alogin'>

        <button class="button-27admain" role="button"><p className='pagepara'>Admin</p></button><br></br><br></br>
          </Link>
        <Link to='/Re'>
          <button class="button-27user" role="button"><p className='pagepara'>User</p></button>
          </Link>
        </center>
        </div>
      </div>
      </center>
      </body>
      
      </>
    )
  }
}

export default Loru