import { Input,Button,Paper,Card } from "@mui/material";
import { useContext, useState } from "react";
import { ProfileContext } from "../context/profilecontext";
import axios from "axios";

function ViewBooking()
{
    const [response,setResponse]=useState()
    const [session_key,setSession_key]=useState()
    const [session_keyValidation,setSession_keyValidation]=useState()
    const [bookingId,setBookingId]=useState()
    const [bookingIdValidation,setsetBookingIdValidation]=useState()
    

    return (<div>
        <Paper elevation={4} style={{marginTop:"30px",width:"566px", marginLeft:"400px"}}>
        <div style={{marginLeft:"150px"}}>
            <h1>Booking view</h1>

            Enter SessionId <br/><Input type='text'  onChange={(e)=>{setSession_key(e.target.value)}} /> <br/>
        <p style={{color:"red"}}>{session_keyValidation}</p>

        Enter BookingID <br/><Input type='text'  onChange={(e)=>{setBookingId(e.target.value)}} /> <br/>
        <p style={{color:"red"}}>{bookingIdValidation}</p> 

       

        <Button style={{marginLeft:"50px"}} variant="outlined" onClick={()=>{

var Booking={
    session_key:session_key,
    bookingId:bookingId
   
       
    
    }
     let url='http://localhost:8090/booking/viewBooking/1?sessionKey='+session_key
    
      let headers={
        'Content-Type':'application/json'
    }
    axios.get(url,Booking,{headers}).then((e)=>{
         console.log(e.data)
         setResponse(e.data)
        }).catch((e)=>{
             console.log(e)
            })

            if(session_key==undefined)
                {
                    setSession_keyValidation("session_key is blank")
                }

                 if(bookingId==undefined)
                {
                    setsetBookingIdValidation("booking ID is blank")
                }
                else
                {
                    setsetBookingIdValidation(" ")
                }


               
            }}> Submit</Button> 

<br/>
            <br/>
            <Card variant="outlined">
            <div>
            
           <h4>Booking description</h4> {
                response!=undefined?response.description:"   "
            }
                <br/>
                <h4>Booking title</h4>      {
                response!=undefined?response.bookingTitle:"   "
            }
            <br/>
            <h4>Number of persons</h4>    
             {
                response!=undefined?response.noOfPersons:"   "
            }
            <br/>
            <h4>Total Cost</h4>
            {
                response!=undefined?response.totalCost:"   "
            }
            
            
            

            </div> <br/>
            
            </Card>
        </div>
        </Paper>
        
    </div>);
}
export default ViewBooking