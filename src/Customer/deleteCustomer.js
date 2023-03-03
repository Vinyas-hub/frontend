import { Input,Button,Paper, Card } from "@mui/material";
import { useContext, useState } from "react";
import { ProfileContext } from "../context/profilecontext";
import axios from "axios";

function  DeleteCustomer()
{
    const [response,setResponse]=useState()
    const [session_key,setSession_key]=useState()
    const [session_keyValidation,setSession_keyValidation]=useState()
    const [customerID,setCustomerID]=useState()
    const [customerIDValidation,setCustomerIDValidation]=useState()
    
    return (<div>
        <Paper elevation={4} style={{marginTop:"30px",width:"566px", marginLeft:"400px"}}>
        <div style={{marginLeft:"150px"}}>
            <h1> Delete Customer </h1>

            Enter SessionId <br/><Input type='text'  onChange={(e)=>{setSession_key(e.target.value)}} /> <br/>
        <p style={{color:"red"}}>{session_keyValidation}</p>

        Enter CustomerID <br/><Input type='text'  onChange={(e)=>{setCustomerID(e.target.value)}} /> <br/>
        <p style={{color:"red"}}>{customerIDValidation}</p> 

        
    <Button style={{marginLeft:"50px"}} variant="outlined" onClick={()=>{

var Customer={
    session_key:session_key,
    customerID:customerID
    
    }
     let url='http://localhost:8090/customers/deletecustomer/1?sessionKey='+session_key
      let headers={
        'Content-Type':'application/json'
    }
    axios.delete(url,Customer,{headers}).then((e)=>{
         console.log(e.data)
        }).catch((e)=>{
             console.log(e)
             setResponse(e.data)
            })

            if(session_key==undefined)
            {
                setSession_keyValidation("session_key is blank")
            }

                 if(customerID==undefined)
                {
                    setCustomerIDValidation("customerID is blank")
                }
                else
                {
                    setCustomerIDValidation(" ")
                }

            }}> Submit</Button> 
            <br/>
            <br/>
            <Card variant="outlined">
                <div>
                    {
                         response!=undefined?response.description:"  "//change the varibale
                    }
                </div>
            </Card>
        </div>
        </Paper>
        
    </div>);
}
export default DeleteCustomer
