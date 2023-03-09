import { Input,Button,Paper,Card } from "@mui/material";
import { useContext, useState } from "react";
import { ProfileContext } from "../context/profilecontext";
import axios from "axios";

function DeleteBooking()
{
    const [response,setResponse]=useState()
    const [session_key,setSession_key]=useState()
    const [session_keyValidation,setSession_keyValidation]=useState()
    const [bookingId,setBookingId]=useState()
    const [bookingIdValidation,setsetBookingIdValidation]=useState()
    // const [description,setDescription]=useState()
    // const [descriptionValidation,setDescriptionValidation]=useState()
    // const [bookingTitle,setBookingTitle]=useState()
    // const [bookingTitleValidation,setBookingTitleValidation]=useState()
    // const [bookingDate,setBookingDate]=useState()
    // const [bookingDateValidation,setBookingDateValidation]=useState()
    // const [totalCost,setTotalCost]=useState()
    // const [totalCostValidation,setTotalCostValidation]=useState()

    return (<div>
        <Paper elevation={4} style={{marginTop:"30px",width:"566px", marginLeft:"400px"}}>
        <div style={{marginLeft:"150px"}}>
            <h3>Booking view</h3>

            {/* Enter SessionId <br/><Input type='text'  onChange={(e)=>{setSession_key(e.target.value)}} /> <br/>
        <p style={{color:"red"}}>{session_keyValidation}</p> */}

        Enter BookingID <br/><Input type='text'  onChange={(e)=>{setBookingId(e.target.value)}} /> <br/>
        <p style={{color:"red"}}>{bookingIdValidation}</p> 

        {/* Enter description <br/><Input type='text' onChange={(e)=>{setDescription(e.target.value)}}  /> <br/>
        <p style={{color:"red"}}>{descriptionValidation}</p> 

        Enter bookingTitle   <br/><Input type='text' onChange={(e)=>{setBookingTitle(e.target.value)}}    /> <br/>
        <p style={{color:"red"}}>{bookingTitleValidation}</p> 

        Enter bookingDate <br/><Input type='text' onChange={(e)=>{setBookingDate(e.target.value)}}    /><br/>
        <p style={{color:"red"}}>{bookingDateValidation}</p>

        Enter totalCost<br/><Input type='text' onChange={(e)=>{setTotalCost(e.target.value)}}   /> <br/>
        <p style={{color:"red"}}>{totalCostValidation}</p> */}

        <Button style={{marginLeft:"50px"}} variant="outlined" onClick={()=>{

var Booking={
    session_key:session_key,
    bookingId:bookingId,
    // description:description,
    // bookingTitle:bookingTitle,
    // bookingDate:bookingDate,
    // totalCost:totalCost
       
    
    }
    let key=localStorage.getItem('session_key')
     let url='http://localhost:8090/booking/cancelBooking/1?sessionKey='+key
    
      let headers={
        'Content-Type':'application/json'
    }
    axios.delete(url,Booking,{headers}).then((e)=>{
         console.log(e.data)
         setResponse(e.data)
        }).catch((e)=>{
             console.log(e)
            })

            // if(session_key==undefined)
            //     {
            //         setSession_keyValidation("session_key is blank")
            //     }

                 if(bookingId==undefined)
                {
                    setsetBookingIdValidation("booking ID is blank")
                }
                else
                {
                    setsetBookingIdValidation(" ")
                }


                // if(description==undefined)
                // {
                //     setDescriptionValidation("Description is blank")
                // }
                // else if(description.length<3)
                // {
                //     setDescriptionValidation("Description less then 3 words")
                // }else
                // {
                //     setDescriptionValidation(" ")
                // }
               
                


                // if(bookingTitle==undefined)
                // {
                //     setBookingTitleValidation("booking title is blank")
                // }
                // else
                // {
                //     setBookingTitleValidation(" ")
                // }

                // if(bookingDate==undefined)
                // {
                //     setBookingDateValidation("booking date is blank")
                // }
                // else
                // {
                //     setBookingDateValidation(" ")
                // }   


             
                // if(totalCost==undefined)
                // {
                //     setTotalCostValidation("total cost is blank")
                // }
                // else
                // {
                //     setTotalCostValidation(" ")
                // }

            }}> Submit</Button> 

<br/>
            <br/>
            <Card variant="outlined">
            <div>
            
            {
                response!=undefined?response.bookingStatus:"   "
            }
            
            

            </div> <br/>
            {/* <div>
            {
                response!=undefined?response.bookingTitle:"   "
            }
            </div> */}
            </Card>
        </div>
        </Paper>
        
    </div>);
}
export default DeleteBooking