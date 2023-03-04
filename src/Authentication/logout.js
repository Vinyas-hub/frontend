import { Input,Button,Paper } from "@mui/material";
import { useContext, useState } from "react";
import { ProfileContext } from "../context/profilecontext";
import axios from "axios";
function Logout()
{
    const [response,setResponse]=useState()
    const [message,setMessage]=useState()
    const [userType,setUserType]=useState() 
    const [userTypeValidation,setUserTypeValidation]=useState()
    const [adminID,setAdminID]=useState() 
    const [adminIDValidation,setAdminIDValidation]=useState()
    const [navigationmesasge,setNavigationMessage]=useState()

    return (<div>
        <Paper elevation={4} style={{marginTop:"30px",width:"566px", marginLeft:"400px"}}>
            <div style={{marginLeft:"150px"}}>

            <h1>LOGOUT</h1>
        Enter adminID <br/><Input type='text' onChange={(e)=>{setAdminID(e.target.value)}} /> <br/>
        <p style={{color:"red"}}>{adminIDValidation}</p> 
       
        Enter userType <br/><Input type='text' onChange={(e)=>{setUserType(e.target.value)}} /> <br/>
        <p style={{color:"red"}}>{userTypeValidation}</p> 
        
              <Button style={{marginLeft:"50px"}} variant="outlined" onClick={()=>{

var Logout={
    adminID:adminID,
    userType:userType
        }
        let url=' http://localhost:8090/user/logout'
        
      let headers={
        'Content-Type':'application/json'
    }
    axios.post(url,Logout,{headers}).then((e)=>{
         console.log(e.data)
         setResponse(e.data)        //to show that hook

        }).catch((e)=>{
             console.log(e)
            })
                 if(adminID==undefined)
                {
                    setAdminIDValidation("user name is blank")
                }
                else
                {
                    setAdminIDValidation(" ")
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
                    window.location.href = '/user/dashboard';
                    
                }
            }}> Logout</Button> </div>
            {navigationmesasge}
            </Paper>
    </div>)

}
export default Logout