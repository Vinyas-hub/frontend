import { Input,Button,Paper, Card } from "@mui/material";
import { useContext, useState } from "react";
import { ProfileContext } from "../context/profilecontext";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
function UserLogin()
{
    const [response,setResponse]=useState()
    const [message,setMessage]=useState()

    const [selectedOption, setSelectedOption] = useState('option');
   const [email,setEmail]=useState()
   const [emailValidation,setEmailValidation]=useState()
    const [password,setPassword]=useState() 
    const [passwordValidation,setPasswordValidation]=useState()
    const [userType,setUserType]=useState() 
    const [userTypeValidation,setUserTypeValidation]=useState()
    const navigate = useNavigate();

  
    const [navigationmesasge,setNavigationMessage]=useState()
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
      }

    return (<div>
        <Paper elevation={4} style={{marginTop:"130px",width:"566px", marginLeft:"400px",height:"505px", backgroundColor: "aliceblue"}}>
            <div style={{marginLeft:"191px"}}>
            <br/>
            <h3>USER LOGIN</h3>
            <br/>
            
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Enter Your Email <br/><Input type='text' onChange={(e)=>{setEmail(e.target.value)}} /> <br/>
        <p style={{color:"red"}}>{emailValidation}</p> 
        &nbsp;&nbsp;&nbsp; Enter Your Password <br/><Input type='password' onChange={(e)=>{setPassword(e.target.value)}} /> <br/>
        <p style={{color:"red"}}>{passwordValidation}</p>
        <div>
        &nbsp; &nbsp; &nbsp;<label htmlFor="dropdown"> Enter User Type </label>
      <br/>
      <br/>
      &nbsp; &nbsp; &nbsp; <select id="userType" class="btn btn-primary dropdown-toggle" value={selectedOption} onChange={handleOptionChange}>
        
        <option value="ADMIN">ADMIN</option>
        <option value="CUSTOMER">CUSTOMER</option>
        
      </select>
      <br/>
      &nbsp; &nbsp; &nbsp;<p style={{color:"green"}}>You selected: {selectedOption}</p>
    </div>

    <p>Not a member?<a href="\addCustomer">     Register</a></p>
              <Button style={{marginLeft:"46px",width:"101px"}} class="btn btn-success" variant="outlined" onClick={()=>{

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
         localStorage.setItem('session_key1',e.data.sessionKey)
         localStorage.setItem('customerId',e.data.userId)
         localStorage.setItem('customerType',e.data.userType)
         navigate('/user/dashboard')

        }).catch((e)=>{
             console.log(e)
             if (e.response.status != e.data) {
                alert('Invalid Email and Password. Please try again.');
             }
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

                
                if(response!=undefined&& response.userType=="CUSTOMER"){
                    window.location.href = '/user/dashboard';
                    }

            }}> LOGIN</Button>
            <br/>
            {/* <Card variant="outlined">
            <div>
            <h4>Session key</h4>
            {
                response!=undefined?response.sessionKey:"   "
            }
            
            

             <br/>
             <h4>Time Stamp</h4>
            {
                response!=undefined?response.timeStamp:"   "
            }
            </div>
            </Card> */}
            
             </div>
            
            {navigationmesasge}
            </Paper>
    </div>)

}
export default UserLogin