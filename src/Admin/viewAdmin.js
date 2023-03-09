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
        <div class="container text-center">
    <div class="row align-items-start ">
    <div class="col-5 " style={{border: '1px solid black'}} >
    <table class="table  table-bordered">
        <br/>
            <h4>View Customer </h4>
            <br/>
            {/* Enter Session key <br/><Input type='text'  onChange={(e)=>{setSession_key(e.target.value)}} /> <br/>
        <p style={{color:"red"}}>{session_keyValidation}</p> */}
        {/* Enter AdminId <br/><Input type='text'  onChange={(e)=>{setAdminId(e.target.value)}} /> <br/>
        <p style={{color:"red"}}>{adminIdValidation}</p> */}
        <Button style={{marginLeft:"10px"}} variant="outlined" onClick={()=>{
        

var Admin={
session_key:session_key
}
let key=localStorage.getItem('session_key')
let url='http://localhost:8090/customers/viewallcustomers?sessionKey='+key
let headers={
'Content-Type':'application/json'
}
axios.get(url,Admin,{headers}).then((e)=>{
 console.log(e.data)
 setResponse(e.data)        //to show that hook

}).catch((e)=>{
     console.log(e)
    })
    //  if(session_key==undefined)
    //     {
    //         setSession_keyValidation("session_key is blank")
    //     }
    //     if(adminId==undefined)
    //     {
    //         setadminIdValidation("adminId is blank")
    //     }
    //    else
    //     {
    //         setadminIdValidation(" ")
    //     }
    }}> Submit</Button> 
 </table>
    </div>
     <br/>
   &nbsp; <div class="col-6" style={{border: '1px solid black'}}>
    <br/>
    <table class="table  table-bordered table-striped table-hover">
  <thead class="table-dark">
    <tr>
   
      <th>CustomerName</th>
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


</div>
    </div>     




   
    
</div>);
}
export default ViewAdmin
