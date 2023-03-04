import { Input,Button,Paper } from "@mui/material";
import { useContext, useState } from "react";
import { ProfileContext } from "../context/profilecontext";
import axios from "axios";

function ViewRoute()
{
    const [response,setResponse]=useState()
    const [session_key,setSession_key]=useState()
    const [session_keyValidation,setSession_keyValidation]=useState()
    return (<div class="container text-center">
    <div class="row align-items-start ">
    <div class="col-5 " style={{border: '2px solid black'}} >
    <table class="table  table-bordered">
        <br/>
            <h1> View Route</h1>
            Enter Session key <br/><Input type='text'  onChange={(e)=>{setSession_key(e.target.value)}} /> <br/>
        <p style={{color:"red"}}>{session_keyValidation}</p>
        <Button style={{marginLeft:"50px"}} variant="outlined" onClick={()=>{

var Route={
session_key:session_key
}
let url='http://localhost:8090/Route/GetAll?sessionKey='+session_key

let headers={
'Content-Type':'application/json'
}
axios.get(url,Route,{headers}).then((e)=>{
 console.log(e.data)
 setResponse(e.data)        //to show that hook

}).catch((e)=>{
     console.log(e)
    })
     if(session_key==undefined)
        {
            setSession_keyValidation("session_key is blank")
        }
    }}> Submit</Button> 
    
    </table>
    </div>
     <br/>
   &nbsp; <div class="col-6" style={{border: '2px solid black'}}>
    <br/>
    <table class="table  table-bordered">
        
  <thead>
    <tr>
   
      <th>Route Id</th>
      <th>Route From</th>
      <th>Route To</th>
      <th>Pickup Point</th>
      <th>Fare</th>
      
    </tr>
  </thead>
  <tbody>
    {response !== undefined ? (
      response.map((e) => (
        <tr key={e.routeId}>
             <td>{e.routeId}</td>
          <td>{e.routeFrom}</td>
          <td>{e.routeTo}</td>
          <td>{e.pickupPoint}</td>
          <td>{e.fare}</td>
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
</div>);
}
export default ViewRoute