import { Input,Button,Paper,Card } from "@mui/material";
import { useContext, useState } from "react";
import { ProfileContext } from "../context/profilecontext";
import axios from "axios";

function ViewAllBooking()
{
    const [response,setResponse]=useState()
    const [session_key,setSession_key]=useState()
    const [session_keyValidation,setSession_keyValidation]=useState()
    // const [bookingId,setBookingId]=useState()
    // const [bookingIdValidation,setsetBookingIdValidation]=useState()
    

    return (<div class="container text-center">
    <div class="row align-items-start ">
    <div class="col-5 " style={{border: '2px solid black'}} >
    <table class="table  table-bordered  ">
            <h4>View All Booking </h4>

            {/* Enter SessionId <br/><Input type='text'  onChange={(e)=>{setSession_key(e.target.value)}} /> <br/>
        <p style={{color:"red"}}>{session_keyValidation}</p> */}

        {/* Enter BookingID <br/><Input type='text'  onChange={(e)=>{setBookingId(e.target.value)}} /> <br/>
        <p style={{color:"red"}}>{bookingIdValidation}</p>  */}

       

        <Button style={{marginLeft:"10px"}} variant="outlined" onClick={()=>{

var Booking={
    session_key:session_key,
   
       
    
    }
    let key=localStorage.getItem('session_key')
     let url='http://localhost:8090/booking/booking/viewAllBookings?sessionKey='+key
    
      let headers={
        'Content-Type':'application/json'
    }
    axios.get(url,Booking,{headers}).then((e)=>{
         console.log(e.data)
         setResponse(e.data)
        }).catch((e)=>{
             console.log(e)
            })

            // if(session_key==undefined)
            //     {
            //         setSession_keyValidation("session_key is blank")
            //     }

                //  if(bookingId==undefined)
                // {
                //     setsetBookingIdValidation("booking ID is blank")
                // }
                // else
                // {
                //     setsetBookingIdValidation(" ")
                // }


               
            }}> Submit</Button> 

</table>
    </div>
     <br/>
   &nbsp; <div class="col-6" style={{border: '2px solid black'}}>
    <br/>
    <table class="table  table-bordered table-striped table-hover">
        
  <thead class="table-dark">
    <tr>
   
      <th>Booking ID</th>
      <th>Booking title</th>
      <th>Booking Description</th>
      <th>Number of persons</th>
      <th>Total Cost</th>
    </tr>
  </thead>
  <tbody>
  {response !== undefined ? (
      response.map((e) => (
        <tr key={e.bookingId}>
            <td>{e.bookingId}</td>
          <td>{e.bookingTitle}</td>
          <td>{e.description}</td>
          <td>{e.noOfPersons}</td>
          <td>{e.totalCost}</td>
          </tr>
      ))
      ) : (
        <tr>
          <td colSpan="2">No value found</td>
        </tr>
      )}
    </tbody>
  </table>

    </div>


</div>
    </div> 


);
}
export default ViewAllBooking