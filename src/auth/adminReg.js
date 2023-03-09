
import { Input,Button,Paper } from "@mui/material";
import { useContext, useState } from "react";
import { ProfileContext } from "../context/profilecontext";
import axios from "axios";

function AdminRegistration()
{
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
        <Paper elevation={4} style={{marginTop:"130px",width:"566px", marginLeft:"493px",height:"505px", backgroundColor: "aliceblue"}}>
        <div style={{marginLeft:"191px"}}>
            <br/>
            <h3>Admin Registration</h3>
            <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Enter AdminID <br/><Input type='text'  onChange={(e)=>{setAdminID(e.target.value)}} /> <br/>
        <p style={{color:"red"}}>{adminIDValidation}</p> 

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Enter Admin Name <br/><Input type='text' onChange={(e)=>{setAdminName(e.target.value)}}  /> <br/>
        <p style={{color:"red"}}>{adminNameValidation}</p> 

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Enter Email <br/><Input type='text' onChange={(e)=>{setEmail(e.target.value)}}    /> <br/>
        <p style={{color:"red"}}>{emailValidation}</p> 

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Enter Password <br/><Input type='password' onChange={(e)=>{setPassword(e.target.value)}}    /><br/>
        <p style={{color:"red"}}>{passwordValidation}</p>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Enter Mobile<br/><Input type='text' onChange={(e)=>{setMobile(e.target.value)}}   /> <br/>
        <p style={{color:"red"}}>{mobileValidation}</p>
       
    <Button style={{marginLeft:"50px"}} variant="outlined" onClick={()=>{

var Admin={
                        adminID:adminID,
                        adminName:adminName,
                        email:email,
                        password:password,
                        mobile:mobile
}
let url='http://localhost:8090/admin/add'
let headers={
    'Content-Type':'application/json'
}
axios.post(url,Admin,{headers}).then((e)=>{
    console.log(e.data)
   }).catch((e)=>{
        console.log(e)
       })


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
               else
                {
                    setAdminNameValidation(" ")
                }
               
                if(email==undefined)
                {
                    setEmailValidation("Admin is blank")
                }
                else
                {
                    setEmailValidation(" ")
                }


                if(password==undefined)
                {
                    setPasswordValidation("Admin is blank")
                }
                else
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
                window.location.href = '/login';

            }}> SignUp</Button> 
            
        </div>
        </Paper>
        
    </div>);
}
export default AdminRegistration
