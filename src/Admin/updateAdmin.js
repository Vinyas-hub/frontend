import { Input,Button,Paper,Card } from "@mui/material";
import { useContext, useState } from "react";
import { ProfileContext } from "../context/profilecontext";
import axios from "axios";

function UpdateAdmin()
{
    const [response,setResponse]=useState()
    const [session_key,setSession_key]=useState()
    const [session_keyValidation,setSession_keyValidation]=useState()
    const [adminID,setAdminID]=useState()
    const [adminIDValidation,setAdminIDValidation]=useState()
    const [adminName,setAdminName]=useState()
    const [adminNameValidation,setAdminNameValidation]=useState()
    const [email,setEmail]=useState()
    const [emailValidation,setEmailValidation]=useState()
    const [password,setPassword]=useState()
    const [passwordValidation,setPasswordValidation]=useState()
    const [mobile,setMobile]=useState()
    const [mobileValidation,setMobileValidation]=useState()
    
    return (<div>
        <Paper elevation={8} style={{marginTop:"30px",width:"566px", marginLeft:"400px"}}>
        <div style={{marginLeft:"150px"}}>
            <h1>Admin update</h1>
            Enter Session key <br/><Input type='text'  onChange={(e)=>{setSession_key(e.target.value)}} /> <br/>
        <p style={{color:"red"}}>{session_keyValidation}</p>

        Enter Admin ID <br/><Input type='text' onChange={(e)=>{setAdminID(e.target.value)}}  /> <br/>
        <p style={{color:"red"}}>{adminIDValidation}</p>


        Enter Admin Name <br/><Input type='text' onChange={(e)=>{setAdminName(e.target.value)}}  /> <br/>
        <p style={{color:"red"}}>{adminNameValidation}</p> 
        

        Enter Email <br/><Input type='text' onChange={(e)=>{setEmail(e.target.value)}}    /> <br/>
        <p style={{color:"red"}}>{emailValidation}</p> 

        Enter Password <br/><Input type='text' onChange={(e)=>{setPassword(e.target.value)}}    /><br/>
        <p style={{color:"red"}}>{passwordValidation}</p>

        Enter Mobile<br/><Input type='text' onChange={(e)=>{setMobile(e.target.value)}}   /> <br/>
        <p style={{color:"red"}}>{mobileValidation}</p>
       
        <Button style={{marginLeft:"50px"}} variant="outlined" onClick={()=>{
        

var Admin={
                         session_key:session_key,
                        adminID:adminID,
                        adminName:adminName,
                        email:email,
                        password:password,
                        mobile:mobile
                        
}
let url='http://localhost:8090/admin/updateAdmin?sessionKey='+session_key

let headers={
'Content-Type':'application/json'
}
axios.put(url,Admin,{headers}).then((e)=>{
 console.log(e.data)
 setResponse(e.data)        //to show that hook

}).catch((e)=>{
     console.log(e)
    })
     if(session_key==undefined)
        {
            setSession_keyValidation("session_key is blank")
        }
        if(adminID==undefined)
        {
            setAdminIDValidation("Admin ID is blank")
        }
        // else if(adminID.length)
        // {
        //     setAdminIDValidation("Admin ID  less then 3")
        //}
        // else
        // {
        //     setAdminIDValidation(" ")
        // }


        if(adminName==undefined)
        {
            setAdminNameValidation("Admin is blank")
        }
        else if(adminName.length<3)
        {
            setAdminNameValidation("Admin less then 3 words")
        }else
        {
            setAdminNameValidation(" ")
        }
       
        if(email==undefined)
        {
            setEmailValidation("Admin is blank")
        }
        else if(email.length<10)
        {
            setEmailValidation("Admin must be described in 10 to 1000 Character")
        }else
        {
            setEmailValidation(" ")
        }


        if(password==undefined)
        {
            setPasswordValidation("Admin is blank")
        }
        else if(password.length<3)
        {
            setPasswordValidation("Admin less then 3")
        }else
        {
            setPasswordValidation(" ")
        }


        if(mobile==undefined)
        {
            setMobileValidation("Admin is blank")
        }
        else if(mobile.length<10)
        {
            setMobileValidation("Admin is less then /")
        }else
        {
            setMobileValidation(" ")
        }
    
    }}> Submit</Button> 

<Card variant="outlined">
            <div>
            <h4>adminID</h4>
            {
                response!=undefined?response.adminID:"   "
            }
    
             <br/>
             <h4>adminName</h4>
            {
                response!=undefined?response.adminName:"   "
            }
    
             <br/>
             <h4>email</h4>
            {
                response!=undefined?response.email:"   "
            }
    
             <br/>
             <h4>password</h4>
            {
                response!=undefined?response.password:"   "
            }
    
             <br/>
             <h4>mobile</h4>
            {
                response!=undefined?response.mobile:"   "
            }
    
             <br/>
            
            
             
            </div>
            </Card>


    </div>
    </Paper>
    
</div>);
}
export default UpdateAdmin
