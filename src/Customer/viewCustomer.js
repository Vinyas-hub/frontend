import { Input,Button,Paper } from "@mui/material";
import { useContext, useState } from "react";
import { ProfileContext } from "../context/profilecontext";
import axios from "axios";

function ViewCustomer()
{
    const [response,setResponse]=useState()
    const [session_key,setSession_key]=useState()
    const [session_keyValidation,setSession_keyValidation]=useState()
    return (<div>
        <Paper elevation={8} style={{marginTop:"30px",width:"566px", marginLeft:"400px"}}>
        <div style={{marginLeft:"150px"}}>
            <h1>customer View</h1>
            Enter Session key <br/><Input type='text'  onChange={(e)=>{setSession_key(e.target.value)}} /> <br/>
        <p style={{color:"red"}}>{session_keyValidation}</p>
        <Button style={{marginLeft:"50px"}} variant="outlined" onClick={()=>{

var Customer={
session_key:session_key
}
let url='http://localhost:8090/admin/2?sessionKey='+session_key
let headers={
'Content-Type':'application/json'
}
axios.get(url,Customer,{headers}).then((e)=>{
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
    </div>
    </Paper>
    
</div>);
}
export default ViewCustomer
