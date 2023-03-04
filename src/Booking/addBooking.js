import { Input,Button,Paper, TableContainer, Table, TableHead, TableRow, TableCell, Card } from "@mui/material";
import { useContext, useState } from "react";
import { ProfileContext } from "../context/profilecontext";
import axios from "axios";
import { RepeatOneSharp } from "@mui/icons-material";

function AddBooking()
{
    const [response,setResponse]=useState() //this is hook for getting that console info on frontend
    const [session_key,setSession_key]=useState()
    const [session_keyValidation,setSession_keyValidation]=useState()
    const [packageId,setPackageId]=useState()
    const [packageIdValidation,setPackageIdValidation]=useState()
    const [customerId,setCustomerId]=useState()
    const [customerIdValidation,setCustomerIdValidation]=useState()
    const [noOfPersons,setNoOfPersons]=useState()
    const [noOfPersonsValidation,setNoOfPersonsValidation]=useState()
    // const [bookingDate,setBookingDate]=useState()
    // const [bookingDateValidation,setBookingDateValidation]=useState()
    // const [totalCost,setTotalCost]=useState()
    // const [totalCostValidation,setTotalCostValidation]=useState()

    return (<div>
        <Paper elevation={4} style={{marginTop:"30px",width:"566px", marginLeft:"400px"}}>
        <div style={{marginLeft:"150px"}}>
            <h1>Make Booking</h1>

            Enter Session key <br/><Input type='text'  onChange={(e)=>{setSession_key(e.target.value)}} /> <br/>
        <p style={{color:"red"}}>{session_keyValidation}</p>

        Enter packageId <br/><Input type='text'  onChange={(e)=>{setPackageId(e.target.value)}} /> <br/>
        <p style={{color:"red"}}>{packageIdValidation}</p> 

        Enter customerId <br/><Input type='text' onChange={(e)=>{setCustomerId(e.target.value)}}  /> <br/>
        <p style={{color:"red"}}>{customerIdValidation}</p> 

        Enter noOfPersons   <br/><Input type='text' onChange={(e)=>{setNoOfPersons(e.target.value)}}    /> <br/>
        <p style={{color:"red"}}>{noOfPersonsValidation}</p> 

        {/* Enter bookingDate <br/><Input type='text' onChange={(e)=>{setBookingDate(e.target.value)}}    /><br/>
        <p style={{color:"red"}}>{bookingDateValidation}</p>

        Enter totalCost<br/><Input type='text' onChange={(e)=>{setTotalCost(e.target.value)}}   /> <br/>
        <p style={{color:"red"}}>{totalCostValidation}</p> */}

        <Button style={{marginLeft:"50px"}} variant="outlined" onClick={()=>{

var Booking={
    session_key:session_key,
    packageId:packageId,
    customerId:customerId,
    noOfPersons:noOfPersons,
    // bookingDate:bookingDate,
    // totalCost:totalCost
       
    
    }
     let url='http://localhost:8090/booking/makeBooking?sessionKey='+session_key
      let headers={
        'Content-Type':'application/json'
    }
    axios.post(url,Booking,{headers}).then((e)=>{
         console.log(e.data)
         setResponse(e.data)        //to show that hook
        }).catch((e)=>{
             console.log(e)
            })

            if(session_key==undefined)
                {
                    setSession_keyValidation("session_key is blank")
                }

                 if(packageId==undefined)
                {
                    setPackageIdValidation("booking ID is blank")
                }
                else
                {
                    setPackageIdValidation(" ")
                }


                if(customerId==undefined)
                {
                    setCustomerIdValidation("Description is blank")
                }
                else
                {
                    setCustomerIdValidation(" ")
                }
               
                


                if(noOfPersons==undefined)
                {
                    setNoOfPersonsValidation("booking title is blank")
                }
                else
                {
                    setNoOfPersonsValidation(" ")
                }

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
            {/* <br/>
            <Card variant="outlined">
            <div>
            
            {
                response!=undefined?response.description:"   "
            }
            
            

            </div> <br/>
            <div>
            {
                response!=undefined?response.bookingTitle:"   "
            }
            </div>
            </Card> */}
        </div>
        </Paper>
        
    </div>);
}
export default AddBooking