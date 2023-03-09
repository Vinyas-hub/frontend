import { Input,Button,Paper, TableContainer, Table, TableHead, TableRow, TableCell, Card } from "@mui/material";
import { useContext, useState } from "react";
import { ProfileContext } from "../context/profilecontext";
import axios from "axios";
import { RepeatOneSharp } from "@mui/icons-material";

function AddBooking()
{
    const [message,setMessage]=useState()
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

    return (<div class="container text-center" >
    <div class="row align-items-start ">
    <div class="col-5 " style={{border: '2px solid black'}}  >
    <table class="table  table-bordered">
        <br/>
            <h3>Make Booking</h3>

            {/* Enter Session key <br/><Input type='text' value={session_key} inputProps={{"data-testid":"session_key"}}
             onChange={(e)=>{setSession_key(e.target.value)}} /> <br/> */}
        <p style={{color:"red"}}>{session_keyValidation}</p>

        Enter packageId <br/><Input type='text' value={packageId} inputProps={{"data-testid":"packageId"}}
         onChange={(e)=>{setPackageId(e.target.value)}} /> <br/>
        <p style={{color:"red"}}>{packageIdValidation}</p> 

        Enter customerId <br/><Input type='text' value={customerId} inputProps={{"data-testid":"customerId"}}
        onChange={(e)=>{setCustomerId(e.target.value)}}  /> <br/>
        <p style={{color:"red"}}>{customerIdValidation}</p> 

        Enter noOfPersons   <br/><Input type='text' value={noOfPersons} inputProps={{"data-testid":"noOfPersons"}}
        onChange={(e)=>{setNoOfPersons(e.target.value)}}    /> <br/>
        <p style={{color:"red"}}>{noOfPersonsValidation}</p> 

        {/* Enter bookingDate <br/><Input type='text' onChange={(e)=>{setBookingDate(e.target.value)}}    /><br/>
        <p style={{color:"red"}}>{bookingDateValidation}</p>

        Enter totalCost<br/><Input type='text' onChange={(e)=>{setTotalCost(e.target.value)}}   /> <br/>
        <p style={{color:"red"}}>{totalCostValidation}</p> */}

        <Button data-testid="addbtn" style={{marginLeft:"10px"}} variant="outlined" onClick={()=>{

var Booking={
    session_key:session_key,
    packageId:packageId,
    customerId:customerId,
    noOfPersons:noOfPersons,
    // bookingDate:bookingDate,
    // totalCost:totalCost
       
    
    }
    let key=localStorage.getItem('session_key1')
    // console.log(key)
     let url='http://localhost:8090/booking/makeBooking?sessionKey='+key
   
      let headers={
        'Content-Type':'application/json'
    }
    axios.post(url,Booking,{headers}).then((e)=>{
         console.log(e.data)
         setResponse(e.data)        //to show that hook
        }).catch((e)=>{
             console.log(e)
            })
            setMessage("booking added")
            // if(session_key==undefined)
            //     {
            //         setSession_keyValidation("session_key is blank")
            //     }

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
             <div data-testid="message"> {message} </div> 
            <br/>

            </table>
    </div>
     <br/>
   &nbsp; <div class="col-9" style={{border: '2px solid black'}}>
    <br/>
    <table class="table  table-bordered table-striped table-hover">

    <thead class="table-dark">
    <tr>
   
      <th>Booking Date</th>
      <th>booking Id</th>
      <th>Booking Status</th>
      <th>Booking Title</th>
      <th>Description</th>
      <th>NoOfPersons</th>
      <th>Total Cost</th>
    </tr>
  </thead>
  <tbody>
            <tr>
          <td>{ response!=undefined?response.bookingDate:"   "}</td>
          <td>{  response!=undefined?response.bookingId:"   "}</td>
          <td>{ response!=undefined?response.bookingStatus:"   "}</td>
          <td>{response!=undefined?response.bookingTitle:"   "}</td>
          <td>{response!=undefined?response.description:"   "}</td>
          <td>{response!=undefined?response.noOfPersons:"   "}</td>
          <td>{response!=undefined?response.totalCost:"   "}</td>
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
    </div>);










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
    
}
export default AddBooking