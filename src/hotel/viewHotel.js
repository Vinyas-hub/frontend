
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

    return (<div>
        <Paper elevation={3} style={{marginTop:"30px",width:"610px", marginLeft:"400px"}}>
        <div style={{marginLeft:"150px"}}>
            <h1>view Hotel</h1>
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
            <br/>

            
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
</table>

                </div>
    
                </Paper>
        </div>
        
        
    );
    
}
export default ViewHotel