import { Input,Button,Paper,Card } from "@mui/material";
import { useContext, useState } from "react";
import { ProfileContext } from "../context/profilecontext";
import axios from "axios";

function UpdateAdmin()
{
    const [message,setMessage]=useState()
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
    
    return (<div class="container text-center">
    <div class="row align-items-start ">
    <div class="col-5 " style={{border: '2px solid black'}} >
    <table class="table  table-bordered">
        <br/>
            <h3>Admin Update</h3>
            <br/>
         
            {/* Enter Session key <br/><Input type='text'  onChange={(e)=>{setSession_key(e.target.value)}} /> <br/>
        <p style={{color:"red"}}>{session_keyValidation}</p> */}

        Enter Your Admin ID <br/><Input type='text' 
        onChange={(e)=>{setAdminID(e.target.value)}}  /> <br/>
        <p style={{color:"red"}}>{adminIDValidation}</p>


        Enter Your Admin Name <br/><Input type='text' inputProps={{"data-testid":"adminName"}}
         onChange={(e)=>{setAdminName(e.target.value)}}  /> <br/>
        <p style={{color:"red"}}>{adminNameValidation}</p> 
        

        Enter Your Email <br/><Input type='text' inputProps={{"data-testid":"email"}}
        onChange={(e)=>{setEmail(e.target.value)}}    /> <br/>
        <p style={{color:"red"}}>{emailValidation}</p> 

        Enter Your Password <br/><Input type='text' inputProps={{"data-testid":"password"}}
        onChange={(e)=>{setPassword(e.target.value)}}    /><br/>
        <p style={{color:"red"}}>{passwordValidation}</p>

        Enter Your Mobile<br/><Input type='text' inputProps={{"data-testid":"mobile"}}
        onChange={(e)=>{setMobile(e.target.value)}}   /> <br/>
        <p style={{color:"red"}}>{mobileValidation}</p>
       
        <Button data-testid="addbtn" style={{marginLeft:"10px"}} variant="outlined" onClick={()=>{
        

var Admin={
                         session_key:session_key,
                        adminID:adminID,
                        adminName:adminName,
                        email:email,
                        password:password,
                        mobile:mobile
                        
}
let key=localStorage.getItem('session_key')
let url='http://localhost:8090/admin/updateAdmin?sessionKey='+key

let headers={
'Content-Type':'application/json'
}
axios.put(url,Admin,{headers}).then((e)=>{
 console.log(e.data)
 setResponse(e.data)        //to show that hook

}).catch((e)=>{
     console.log(e)
    })
    setMessage("Admin updated")
    //  if(session_key==undefined)
    //     {
    //         setSession_keyValidation("session_key is blank")
    //     }
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
    
    }}> Update</Button> 
      <div data-testid="message"> {message} </div>
     <br/>
     <br/>

     </table>
    </div>
     <br/>
   &nbsp; <div class="col-6" style={{border: '2px solid black'}}>
    <br/>
    <table class="table  table-bordered table-striped table-hover">
        
  <thead class="table-dark">
    <tr>
   
      {/* <th>Admin Id</th> */}
      <th>Admin Name</th>
      <th>Email</th>
      <th>Password</th>
      <th>Mobile</th>

    </tr>
  </thead>
  <tbody>
  <tr>
          {/* <td>{  response!=undefined?response.adminID:"   "}</td> */}
          <td>{ response!=undefined?response.adminName:"   "}</td>
          <td>{  response!=undefined?response.email:"   "}</td>
          <td>{response!=undefined?response.password:"   "}</td>
          <td>{ response!=undefined?response.mobile:"   "}</td>
        </tr>
       {/* (
      <tr>
        <td colSpan="2">No value found</td>
      </tr>
    ) */}
  </tbody>
</table>

</div>


</div>
    </div>



);
}
export default UpdateAdmin
