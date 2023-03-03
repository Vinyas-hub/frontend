import { Input,Button,Paper,Card } from "@mui/material";
import { useContext, useState } from "react";
import { ProfileContext } from "../context/profilecontext";
import axios from "axios";
function Login()
{
    const [response,setResponse]=useState()
    const [message,setMessage]=useState()

    
   const [email,setEmail]=useState()
   const [emailValidation,setEmailValidation]=useState()
    const [password,setPassword]=useState() 
    const [passwordValidation,setPasswordValidation]=useState()
    const [userType,setUserType]=useState() 
    const [userTypeValidation,setUserTypeValidation]=useState()
    const [navigationmesasge,setNavigationMessage]=useState()

    return (<div>
        <Paper elevation={4} style={{marginTop:"130px",width:"566px", marginLeft:"400px"}}>
            <div style={{marginLeft:"150px"}}>

            <h1>ADMIN LOGIN</h1>
            
            
        Enter email <br/><Input type='text' onChange={(e)=>{setEmail(e.target.value)}} /> <br/>
        <p style={{color:"red"}}>{emailValidation}</p> 
        Enter password <br/><Input type='password' onChange={(e)=>{setPassword(e.target.value)}} /> <br/>
        <p style={{color:"red"}}>{passwordValidation}</p>
        Enter userType <br/><Input type='text' onChange={(e)=>{setUserType(e.target.value)}} /> <br/>
        <p style={{color:"red"}}>{userTypeValidation}</p> 
        <a href="\adminReg">Sign Up</a>
             
              <Button style={{marginLeft:"50px"}} variant="outlined" onClick={()=>{

var Login={
    
    email:email,
    password:password,
    userType:userType
        }
        let url='http://localhost:8090/user/login'
      let headers={
        'Content-Type':'application/json'
    }
    axios.post(url,Login,{headers}).then((e)=>{
         console.log(e.data)
         setResponse(e.data)        //to show that hook

        }).catch((e)=>{
             console.log(e)
            })

              if(email==undefined)
                {
                    setEmailValidation("user name is blank")
                }
                else
                {
                    setEmailValidation(" ")
                }
                if(password==undefined)
                {
                    setPasswordValidation("password is blank")
                }
                else
                {
                    setPasswordValidation(" ")
                }

                if(userType==undefined)
                {
                    setUserTypeValidation("password is blank")
                }
                else
                {
                    setUserTypeValidation(" ")
                }
                if(response!=undefined&& response.userType=="ADMIN"){
                window.location.href = '/admin/dashboard';
                }
                

            }}> login</Button> 
            <Card variant="outlined">
            <div>
            <h4>Session key</h4>
            {
                response!=undefined?response.sessionKey:"   "
            }
            
            

             <br/>
             <h4>timeStamp</h4>
            {
                response!=undefined?response.timeStamp:"   "
            }
            </div>
            </Card>
            </div>
            {navigationmesasge}
            </Paper>
    </div>)

}
export default Login