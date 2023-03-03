import { Input,Button,Paper } from "@mui/material";
import { useContext, useState } from "react";
import { ProfileContext } from "../context/profilecontext";
import axios from "axios";  
import {  Payment } from "@mui/icons-material";

function MakePayment()
{ 
    const [session_key,setSession_key]=useState()
    const [session_keyValidation,setSession_keyValidation]=useState()
    const [bookingId,setBookingId]=useState()
    const [bookingIdValidation,setbookingIdValidation]=useState()
    const [upi_Id,setUpi_Id]=useState()
    const [upi_IdValidation,setUpi_IdValidation]=useState()
    const [pin,setPin]=useState()
    const [pinValidation,setPinValidation]=useState()
    
    return (<div>
        <Paper elevation={4} style={{marginTop:"30px",width:"566px", marginLeft:"400px"}}>
        <div style={{marginLeft:"150px"}}>
            <h1>make payment</h1>

            Enter Session key <br/><Input type='text'  onChange={(e)=>{setSession_key(e.target.value)}} /> <br/>
        <p style={{color:"red"}}>{session_keyValidation}</p>

        

        Enter bookingId <br/><Input type='text' onChange={(e)=>{setBookingId(e.target.value)}}  /> <br/>
        <p style={{color:"red"}}>{bookingIdValidation}</p> 

        Enter upi_Id   <br/><Input type='text' onChange={(e)=>{setUpi_Id(e.target.value)}}    /> <br/>
        <p style={{color:"red"}}>{upi_IdValidation}</p> 

        Enter pin <br/><Input type='text'  onChange={(e)=>{setPin(e.target.value)}} /> <br/>
        <p style={{color:"red"}}>{pinValidation}</p>

        
        <Button style={{marginLeft:"50px"}} variant="outlined" onClick={()=>{

var Payment={
    session_key:session_key,
    bookingId:bookingId,
    upi_Id:upi_Id,
    pin:pin
}
    let url='http://localhost:8090/payment/makePayment?sessionKey='+session_key
    
    let headers={
        'Content-Type':'application/json'
    }
    axios.post(url,Payment,{headers}).then((e)=>{
         console.log(e.data)
        }).catch((e)=>{
             console.log(e)
            })


    if(session_key==undefined)
    {
        setSession_keyValidation("session_key is blank")
    }

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
    else if(upi_Id.length<10 )
    {
        setUpi_IdValidation(" ")
    }else
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
</div>
</Paper>

</div>);
}
export default MakePayment