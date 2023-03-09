import { Input,Button,Paper,Card } from "@mui/material";
import { useContext, useState } from "react";
import { ProfileContext } from "../context/profilecontext";
import { Link, useNavigate } from "react-router-dom";
import { render,screen ,fireEvent} from "@testing-library/react"
import axios from "axios";

function Login()
{

 

    const navigate=useNavigate()
    const [response,setResponse]=useState()
    const [message,setMessage]=useState()
    const [selectedOption, setSelectedOption] = useState('option');
    
   const [email,setEmail]=useState()
   const [emailValidation,setEmailValidation]=useState()
    const [password,setPassword]=useState() 
    const [passwordValidation,setPasswordValidation]=useState()
    const [userType,setUserType]=useState() 
    const [userTypeValidation,setUserTypeValidation]=useState()
    const [navigationmesasge,setNavigationMessage]=useState()

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
      }

    return (<div  >
        <Paper elevation={4} style={{marginTop:"130px",width:"566px", marginLeft:"493px",height:"505px", backgroundColor: "aliceblue"}}>

            
            <div style={{marginLeft:"191px"}}>
            <br/>
            <h3>ADMIN LOGIN</h3>
            
            <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Enter Your Email <br/><Input type='text' value={email} data-testid="email" onChange={(e)=>{setEmail(e.target.value)}} /> <br/>
        <p style={{color:"red"}}>{emailValidation}</p> 
        &nbsp;&nbsp;&nbsp;Enter Your Password <br/><Input type='password' value={password} data-testid="password" onChange={(e)=>{setPassword(e.target.value)}} /> <br/>
        <p style={{color:"red"}}>{passwordValidation}</p>
        {/* Enter userType <br/><Input type='text' onChange={(e)=>{setUserType(e.target.value)}} /> <br/>
        <p style={{color:"red"}}>{userTypeValidation}</p>  */}
        <div>
        &nbsp; &nbsp; &nbsp; <label htmlFor="dropdown"> Enter User Type </label>
      <br/>
      <br/>
      &nbsp; &nbsp; &nbsp;  <select id="userType" class="btn btn-primary dropdown-toggle" value={selectedOption} onChange={handleOptionChange}>
      <option value="SELECT">SELECT</option>
        <option value="ADMIN">ADMIN</option>
        <option value="CUSTOMER">CUSTOMER</option>
        
      </select>
      <br/>
      &nbsp; &nbsp; &nbsp;<p style={{color:"green"}}>  &nbsp;&nbsp;You selected: {selectedOption}</p>
    </div>

       <p>Not a member?<a href="\adminReg">     Register</a></p> 
             
              <Button data-testid="addbtn" style={{marginLeft:"46px",width:"101px"}}  class="btn btn-success" variant="outlined" onClick={()=>{

var Login={
    
    email:email,
    password:password,
    userType:selectedOption
        }
        let url='http://localhost:8090/user/login'
      let headers={
        'Content-Type':'application/json'
    }
    axios.post(url,Login,{headers}).then((e)=>{
         console.log(e.data)
         setResponse(e.data)        //to show that hook
         alert('Login Sucessfully')
         localStorage.setItem('session_key',e.data.sessionKey)
         localStorage.setItem('adminID',e.data.userId)
         localStorage.setItem('userType',e.data.userType)
        navigate('/admin/dashboard')
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

               
                if(response!=undefined&& response.userType=="ADMIN"){
                    
                    window.location.href = '/admin/dashboard';
                } 
                

            }}> Login</Button> 
            {/* <Card variant="outlined">
            <div>
            <h4>Session key</h4>
            {/* {
                response!=undefined?response.sessionKey:"   "
            }
             
            

             <br/>
             <h4>Time Stamp</h4>
            {
                response!=undefined?response.timeStamp:"   "
            }
            </div>
            <div data-testid="message">{message} </div>
            </Card> */}
            </div>
            {navigationmesasge}
            </Paper>
    </div>)

}
export default Login