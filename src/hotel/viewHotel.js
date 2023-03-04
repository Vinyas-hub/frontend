
import { Input,Button,Paper,Card, TableCell,TableContainer,Table,TableHead,TableRow } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { ProfileContext } from "../context/profilecontext";
import axios from "axios";
import NavigationBar from "../components/NavigationBar";
 

function ViewHotel()
{
    
    const [response,setResponse]=useState()
    const [message,setMessage]=useState([])
    const [session_key,setSession_key]=useState()
    const [session_keyValidation,setSession_keyValidation]=useState()

    return (<div class="container text-center">
    <div class="row align-items-start ">
    <div class="col-3" style={{border: '2px solid black'}} >
    <table class="table  table-bordered">
        <br/>
            <h1>View Hotel</h1>
            Enter SessionId <br/><Input type='text'  onChange={(e)=>{setSession_key(e.target.value)}} /> <br/>
        <p style={{color:"red"}}>{session_keyValidation}</p>


        
    <Button style={{marginLeft:"50px"}} variant="outlined" onClick={()=>{

var Hotel={
    session_key:session_key,

    }
     let url='http://localhost:8090/hotel/viewAllHotels?sessionKey='+session_key
      let headers={
        'Content-Type':'application/json'
    }
    axios.get(url,Hotel,{headers}).then((e)=>{
         console.log(e)
         setResponse(e.data)
        }).catch((e)=>{   
             console.log(e)
            })
            if(session_key==undefined)
            {
                setSession_keyValidation("session_key is blank")
            }
                 

            }}> Submit</Button> 
          

{/*             
            <table>
  <thead>
    <tr>
   
      <th>hotelType</th>
      <th>hotelStatus</th>
      <th>hotelRent</th>
      <th>hotelName</th>
      <th>hotelDescription</th>
      

    </tr>
  </thead>
  <tbody>
    {response !== undefined ? (
      response.map((e) => (
        <tr key={e.hotel_Id}>
            <td>{e.hotelType}</td>
          <td>{e.hotelStatus}</td>
          <td>{e.hotelRent}</td>
          <td>{e.hotelName}</td>
          <td>{e.hotelDescription}</td>
          <td>{e.hotelAddress}</td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan="2">No value found</td>
      </tr>
    )}
  </tbody>
</table> */}

</table>
    </div>
     <br/>
   &nbsp; <div class="col-8" style={{border: '2px solid black'}}>
    <br/>
    <table class="table  table-bordered">
  <thead>
    <tr>
      <th>Hotel Id</th>
      <th>Hotel Name</th>
      <th>Hotel Address</th>
      <th>Hotel Type</th>
      <th>Hotel Description</th>
      <th>Hotel Rent</th>
      <th>Hotel Status</th>
      
    </tr>
  </thead>
  <tbody>
    {response !== undefined ? (
      response.map((e) => (
        <tr key={e.hotelDescription}>
          <td>{e.hotel_Id}</td>
          <td>{e.hotelName}</td>
          <td>{e.hotelAddress.city}</td>
          <td>{e.hotelType}</td>
          <td>{e.hotelDescription}</td>
          <td>{e.hotelRent}</td>
          <td>{e.hotelStatus}</td>
          
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

        </div> );
    
}
export default ViewHotel