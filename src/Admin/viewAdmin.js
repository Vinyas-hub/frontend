import { Input,Button,Paper,Card, TableCell,TableContainer,Table,TableHead,TableRow} from "@mui/material";
import { useContext, useState } from "react";
import { ProfileContext } from "../context/profilecontext";
import axios from "axios";

function ViewAdmin()
{
    const [response,setResponse]=useState()
    const [session_key,setSession_key]=useState()
    const [session_keyValidation,setSession_keyValidation]=useState()
    // const [adminId,setAdminId]=useState()
    // const [adminIdValidation,setadminIdValidation]=useState()
    return (<div>
        <Paper elevation={8} style={{marginTop:"30px",width:"766px", marginLeft:"200px"}}>
        <div style={{marginLeft:"150px"}}>
            <h1>Customer View</h1>
            Enter Session key <br/><Input type='text'  onChange={(e)=>{setSession_key(e.target.value)}} /> <br/>
        <p style={{color:"red"}}>{session_keyValidation}</p>
        {/* Enter AdminId <br/><Input type='text'  onChange={(e)=>{setAdminId(e.target.value)}} /> <br/>
        <p style={{color:"red"}}>{adminIdValidation}</p> */}
        <Button style={{marginLeft:"50px"}} variant="outlined" onClick={()=>{
        

var Admin={
session_key:session_key
}
let url='http://localhost:8090/customers/viewallcustomers?sessionKey='+session_key
let headers={
'Content-Type':'application/json'
}
axios.get(url,Admin,{headers}).then((e)=>{
 console.log(e.data)
 setResponse(e.data)        //to show that hook

}).catch((e)=>{
     console.log(e)
    })
     if(session_key==undefined)
        {
            setSession_keyValidation("session_key is blank")
        }
    //     if(adminId==undefined)
    //     {
    //         setadminIdValidation("adminId is blank")
    //     }
    //    else
    //     {
    //         setadminIdValidation(" ")
    //     }
    }}> Submit</Button> 

<table>
  <thead>
    <tr>
   
      <th>customerName</th>
      <th>Address</th>
      <th>Email</th>
      <th>Mobile</th>
    </tr>
  </thead>
  <tbody>
    {response !== undefined ? (
      response.map((e) => (
        <tr key={e.customerId}>
          <td>{e.customerName}</td>
          <td>{e.address}</td>
          <td>{e.email}</td>
          <td>{e.mobile}</td>
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
    
</div>);
}
export default ViewAdmin
