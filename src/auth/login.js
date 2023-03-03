import { Input,Button,Paper } from "@mui/material";
import { useContext, useState } from "react";
import { ProfileContext } from "../context/profilecontext";

function Login()
{
   /* const [username,setUsername]=useState()
    const [password,setPassword]=useState() */

    const{username,setUserName,password,setPassword,showPage,setShowPage}=useContext(ProfileContext)
    const [uservalidation,setUserValidation]=useState()
    const [passwordvalidation,setPasswordValidation]=useState()
    const [navigationmesasge,setNavigationMessage]=useState()

    return (<div>
        <Paper elevation={4} style={{marginTop:"30px",width:"566px", marginLeft:"400px"}}>
            <div style={{marginLeft:"150px"}}>

            <h1>LOGIN</h1>
        Enter UserName <br/><Input type='text' onChange={(e)=>{setUserName(e.target.value)}} /> <br/>
        <p style={{color:"red"}}>{uservalidation}</p> 
        Enter password <br/><Input type='password' onChange={(e)=>{setPassword(e.target.value)}} /> <br/>
        <p style={{color:"red"}}>{passwordvalidation}</p> 
        
              <Button style={{marginLeft:"50px"}} variant="outlined" onClick={()=>{
                 if(username==undefined)
                {
                    setUserValidation("user name is blank")
                }
                else if(username.length<3)
                {
                    setUserValidation("user name less then 3")
                }else
                {
                    setUserValidation(" ")
                }
                if(password==undefined)
                {
                    setPasswordValidation("password is blank")
                }
                else if(username.length<3)
                {
                    setPasswordValidation("password less then 3")
                }else
                {
                    setPasswordValidation(" ")
                }
                if(username!=undefined && password!=undefined && username=="admin" && password=="pass123")
                {
                    setNavigationMessage("valid username and password")
                    setShowPage(true)
                }
                else
                {
                    setNavigationMessage("invalid user name and password")
                }

            }}> login</Button> </div>
            {navigationmesasge}
            </Paper>
    </div>)

}
export default Login