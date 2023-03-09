import { Input,Button,Paper,Card } from "@mui/material";
import { useContext, useState } from "react";
import { ProfileContext } from "../context/profilecontext";
import axios from "axios";

function ViewAllBus()
{
  const [message,setMessage]=useState()
     const [response,setResponse]=useState()
    const [session_key,setSession_key]=useState()
    const [session_keyValidation,setSession_keyValidation]=useState()
    // const [busId,setBusId]=useState()
    // const [busIdValidation,setBusIdValidation]=useState()
    

    return (<div class="container text-center">
    <div class="row align-items-start ">
    <div class="col-5 " style={{border: '1px solid black'}} >
    <table class="table  table-bordered">
        <br/>
    <h3>View All Bus</h3>
                <br/>
                {/* Enter Session Key <br/><Input type='text' value={session_key} inputProps={{"data-testid":"session_key"}} 
                 onChange={(e)=>{setSession_key(e.target.value)}} /> <br/>
        <p style={{color:"red"}}>{session_keyValidation}</p> */}

        {/* Enter BusId <br/><Input type='text'  onChange={(e)=>{setBusId(e.target.value)}} /> <br/>
        <p style={{color:"red"}}>{busIdValidation}</p>  */}

       

        <Button  data-testid="addbtn" style={{marginLeft:"10px"}} variant="outlined" onClick={()=>{

var Booking={
    session_key:session_key,
    // busId:busId
   
       
    
    }
    let key=localStorage.getItem('session_key')
     let url='http://localhost:8090/Bus/GetAll?sessionKey='+key
    
      let headers={
        'Content-Type':'application/json'
    }
    axios.get(url,Booking,{headers}).then((e)=>{
         console.log(e.data)
         setResponse(e.data)
        }).catch((e)=>{
             console.log(e)
            })
            setMessage("AllBus")
            // if(session_key==undefined)
            //     {
            //         setSession_keyValidation("session_key is blank")
            //     }

                //  if(busId==undefined)
                // {
                //     setBusIdValidation("bus Id is blank")
                // }
                // else
                // {
                //     setBusIdValidation(" ")
                // }


               
            }}> Submit</Button> 
            <div data-testid="message"> {message} </div>
            </table>
    </div>
     <br/>
   &nbsp; <div class="col-6" style={{border: '1px solid black'}}>
    <br/>
    <table class="table  table-bordered table-striped table-hover">
        
  <thead class="table-dark">
    <tr>
    <th >Bus Id</th>
      <th>Bus Type</th>
      <th>Bus Number</th>
      <th>Capacity</th>
      <th>Availabe Seat</th>

    </tr>
  </thead>
  <tbody>
  {response !== undefined ? (
      response.map((e) => (
        <tr key={e.busId}>
             <td>{e.busId}</td>
          <td>{e.busType}</td>
          <td>{e.busNumber}</td>
          <td>{e.capacity}</td>
          <td>{e.availabeSeat}</td>
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
export default ViewAllBus