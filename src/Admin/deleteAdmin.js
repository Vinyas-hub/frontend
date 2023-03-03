import { Input,Button,Paper } from "@mui/material";
import { useContext, useState } from "react";
import { ProfileContext } from "../context/profilecontext";
import axios from "axios";

function DeleteAdmin()
{
    const [response,setResponse]=useState()
    const [session_key,setSession_key]=useState()
    const [session_keyValidation,setSession_keyValidation]=useState()
    const [adminId,setAdminId]=useState()
    const [adminIdValidation,setadminIdValidation]=useState()
    return (<div>
        <Paper elevation={8} style={{marginTop:"30px",width:"566px", marginLeft:"400px"}}>
        <div style={{marginLeft:"150px"}}>
            <h1>Admin delete</h1>
            Enter Session key <br/><Input type='text'  onChange={(e)=>{setSession_key(e.target.value)}} /> <br/>
        <p style={{color:"red"}}>{session_keyValidation}</p>
        Enter AdminId <br/><Input type='text'  onChange={(e)=>{setAdminId(e.target.value)}} /> <br/>
        <p style={{color:"red"}}>{adminIdValidation}</p>
        <Button style={{marginLeft:"50px"}} variant="outlined" onClick={()=>{
        

var Admin={
session_key:session_key
}
let url='http://localhost:8090/admin?sessionKey='+session_key
let headers={
'Content-Type':'application/json'
}
axios.delete(url,Admin,{headers}).then((e)=>{
 console.log(e.data)
 setResponse(e.data)        //to show that hook

}).catch((e)=>{
     console.log(e)
    })
     if(session_key==undefined)
        {
            setSession_keyValidation("session_key is blank")
        }
        if(adminId==undefined)
        {
            setadminIdValidation("adminId is blank")
        }
       else
        {
            setadminIdValidation(" ")
        }
    }}> Submit</Button> 
    </div>
    </Paper>
    
</div>);
}
export default DeleteAdmin
