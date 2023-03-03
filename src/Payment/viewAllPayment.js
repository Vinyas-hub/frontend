import { Input,Button,Paper } from "@mui/material";
import { useContext, useState } from "react";
import { ProfileContext } from "../context/profilecontext";
import axios from "axios";  
import {  Payment } from "@mui/icons-material";

function ViewAllPayment()
{ 
    //const [session_key,setSession_key]=useState()
   // const [session_keyValidation,setSession_keyValidation]=useState()

    return (<div>
        <Paper elevation={4} style={{marginTop:"30px",width:"566px", marginLeft:"400px"}}>
        <div style={{marginLeft:"150px"}}>
            <h1>viewAllPayment payment</h1>

            {/* Enter Session key <br/><Input type='text'  onChange={(e)=>{setSession_key(e.target.value)}} /> <br/>
        <p style={{color:"red"}}>{session_keyValidation}</p> */}

        <Button style={{marginLeft:"50px"}} variant="outlined" onClick={()=>{


        var Payment={
   // session_key:session_key
        }
        let url='http://localhost:8090/payment/viewAllPayment'
    let headers={
        'Content-Type':'application/json'
    }
    axios.post(url,Payment,{headers}).then((e)=>{
         console.log(e.data)
        }).catch((e)=>{
             console.log(e)
            })


    // if(session_key==undefined)
    // {
    //     setSession_keyValidation("session_key is blank")
    // }
    }}
    > Submit</Button> 
</div>
</Paper>

</div>);
}
export default ViewAllPayment