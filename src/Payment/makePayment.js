import { Input,Button,Paper,Card } from "@mui/material";
import { useContext, useState } from "react";
import { ProfileContext } from "../context/profilecontext";
import axios from "axios";  
import {  Payment } from "@mui/icons-material";

function MakePayment()
{ 
    const [message,setMessage]=useState()
    const [response,setResponse]=useState()
    const [session_key,setSession_key]=useState()
    const [session_keyValidation,setSession_keyValidation]=useState()
    const [bookingId,setBookingId]=useState()
    const [bookingIdValidation,setbookingIdValidation]=useState()
    const [upi_Id,setUpi_Id]=useState()
    const [upi_IdValidation,setUpi_IdValidation]=useState()
    const [pin,setPin]=useState()
    const [pinValidation,setPinValidation]=useState()
    
    return (<div class="container text-center">
    <div class="row align-items-start ">
    <div class="col-4" style={{border: '2px solid black'}} >
    <table class="table  table-bordered  ">
        <br/>
            <h4>Make payment</h4>

            {/* Enter Session key <br/><Input type='text'  onChange={(e)=>{setSession_key(e.target.value)}} /> <br/>
        <p style={{color:"red"}}>{session_keyValidation}</p> */}

        

        Enter bookingId <br/><Input type='text' value={bookingId} inputProps={{"data-testid":"bookingId"}} 
         onChange={(e)=>{setBookingId(e.target.value)}}  /> <br/>
        <p style={{color:"red"}}>{bookingIdValidation}</p> 

        Enter upi_Id   <br/><Input type='text' value={upi_Id} inputProps={{"data-testid":"upi_Id"}} 
        onChange={(e)=>{setUpi_Id(e.target.value)}}    /> <br/>
        <p style={{color:"red"}}>{upi_IdValidation}</p> 

        Enter pin <br/><Input type='text' value={pin} inputProps={{"data-testid":"pin"}} 
         onChange={(e)=>{setPin(e.target.value)}} /> <br/>
        <p style={{color:"red"}}>{pinValidation}</p>

        
        <Button data-testid="addbtn" style={{marginLeft:"50px"}} variant="outlined" onClick={()=>{

var Payment={
    session_key:session_key,
    bookingId:bookingId,
    upi_Id:upi_Id,
    pin:pin
}
let key=localStorage.getItem('session_key')
    let url='http://localhost:8090/payment/makePayment?sessionKey='+key
    
    let headers={
        'Content-Type':'application/json'
    }
    axios.post(url,Payment,{headers}).then((e)=>{
         console.log(e.data)
         setResponse(e.data)  

        }).catch((e)=>{
             console.log(e)
            })

            setMessage("payment")
    // if(session_key==undefined)
    // {
    //     setSession_keyValidation("session_key is blank")
    // }

    if(bookingId==undefined)
    {
        setbookingIdValidation("booking is blank")
    }
   else
    {
        setbookingIdValidation(" ")
    }
   
    if(upi_Id==undefined)
    {
        setUpi_IdValidation("upi id is blank")
    }
    else
    {
        setUpi_IdValidation(" ")
    }

    
    if(pin==undefined)
    {
        setPinValidation("pin is blank")
    }
    else
    {
        setPinValidation(" ")
    }

}}> Submit</Button> 
<div data-testid="message"> {message} </div>
<br/>
<br/>
<br/>
</table>
    </div>
     <br/>
   &nbsp; <div class="col-10" style={{border: '2px solid black'}}>
    <br/>
    <table class="table  table-bordered table-striped table-hover">
        
  <thead >
    <tr>
   
      
      <th>Booking Id</th>
      <th>Booking Date</th>
      <th>Booking Status</th>
      <th>Booking description</th>
      <th>Number Of Persons</th>
      <th>Total Cost</th>
      <th>Payment Amount</th>
      <th>Payment Information</th>
      <th>Payment Status</th>
    
    </tr>
  </thead>
  <tbody>
            <tr>
          <td>{   response!=undefined?response.booking.bookingId:"   "}</td>
          <td>{    response!=undefined?response.booking.bookingDate:"   "}</td>
          <td>{  response!=undefined?response.booking.bookingStatus:"   "}</td>
          <td>{ response!=undefined?response.booking.bookingTitle:"   "}</td>
          <td>{   response!=undefined?response.booking.description:"   "}</td>
          <td>{     response!=undefined?response.booking.noOfPersons:"   "}</td>
          <td>{     response!=undefined?response.booking.totalCost:"   "}</td>
          <td>{    response!=undefined?response.paymentAmount:"   "}</td>
          <td>{    response!=undefined?response.paymentInfo:"   "}</td>
          <td>{     response!=undefined?response.paymentStatus:"   "}</td>
          
        </tr>
       {/* (
      <tr>
        <td colSpan="2">No value found</td>
      </tr>
    ) */}
  </tbody>
</table>

    </div>


</div>

    </div> 


);
}
export default MakePayment