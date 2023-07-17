import React from 'react'
import './Hotelform.css'
function Hotelform() {
  return (
    <>
    <center>

    <h1>Hotel Reservation Form</h1>
    <p>please complete the form below</p>
    <hr></hr>
    <p>Your regiatration will be verified priar to your arrival</p>
    </center>
    <div className='cform'>

    <form>
   <p>First Name<br></br></p>
   <input type="text" className='iname' ></input>
   <p>Last Name</p>
   <input type="text" className='iname' ></input>
   <p>Address</p>
   <input type="text" className='iname1' ></input>
   <p>Address Line 2</p>
   <input type="text" className='iname' ></input>
   <p>city</p>
   <input type="text" className='iname1' ></input>
   <p>State</p>
   <input type="text" className='iname' ></input>
   <p>Country</p>
   <input type="text" className='iname' ></input>
   <p>Phone No</p>
   <input type="tel" className='iname' placeholder='(000) 000 - 0000'></input>
   <p>Email</p>
   <input type="tel" className='iname' placeholder='ex:myname@example.com'></input>
   <p>Arrival - Date and Time</p>
   <input type="date" className='iname'></input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='time' className='iname3' ></input>
   <p>Departure - Date and Time</p>
   <input type="date" className='iname'></input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='time' className='iname3' ></input>
   <p>Number of Adults</p>
   <input type="tel" className='iname' placeholder='ex:5'></input>
   <p>Number of kids</p>
   <input type="tel" className='iname' placeholder='ex:1'></input><br></br><br></br>
   <p>Do you have any special request?</p>
   <textarea id="w3review" name="w3review" rows="4" cols="50" placeholder='Type here....'>
</textarea><br></br><br></br>
<button class="button-27" role="button">Submit</button>
    </form>
    </div>
    
    </>
  )
}

export default Hotelform