import { Button, Input } from "@mui/material";
import { useState } from "react";

function Registor()
{
    const [username,setUsername]=useState()
    const [password,setPassword]=useState()
    const [email,setEmail]=useState()
    const [uservalidation,setUserValidation]=useState()
    const [passwordvalidation,setPasswordValidation]=useState()
    const [emailvalidation,setEmailValidation]=useState()
return(<div>
    <form>
    Enter the Name <br/>
    <Input type='text' required onChange={(e)=>{setUsername(e.target.value)}}    /><br/>
    Enter the password<br/>
    <Input type='password' required onChange={(e)=>{setPassword(e.target.value)}} /><br/>
    Enter the Email<br/>
    <Input type='Email' required patter="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" /><br/>
    <p style={{color:"red"}}>{passwordvalidation}</p> 
        <p style={{color:"red"}}>{uservalidation}</p> 
        <p style={{color:"red"}}>{emailvalidation}</p> 
    <Button onClick={()=>{
        if(username==undefined)
        {
            setUserValidation("user name is blank")
        }
        else if(username.length<3)
        {
          setUserValidation("user name less then 3")
        }
      else
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
         


    }} >Registration</Button>
    </form>
    </div>);
}
export default Registor