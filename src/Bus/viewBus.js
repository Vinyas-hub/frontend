import { Input,Button,Paper,Card } from "@mui/material";
import { useContext, useState } from "react";
import { ProfileContext } from "../context/profilecontext";
import axios from "axios";

function ViewBus()
{
     const [response,setResponse]=useState()
    const [session_key,setSession_key]=useState()
    const [session_keyValidation,setSession_keyValidation]=useState()
    const [busId,setBusId]=useState()
    const [busIdValidation,setBusIdValidation]=useState()
    

    return (<div>
        <Paper elevation={4} style={{marginTop:"30px",width:"566px", marginLeft:"400px"}}>
        <div style={{marginLeft:"150px"}}>
            <h1>Bus view</h1>

            Enter Session Key <br/><Input type='text'  onChange={(e)=>{setSession_key(e.target.value)}} /> <br/>
        <p style={{color:"red"}}>{session_keyValidation}</p>

        Enter BusId <br/><Input type='text'  onChange={(e)=>{setBusId(e.target.value)}} /> <br/>
        <p style={{color:"red"}}>{busIdValidation}</p> 

       

        <Button style={{marginLeft:"50px"}} variant="outlined" onClick={()=>{

var Booking={
    session_key:session_key,
    busId:busId
   
       
    
    }
     let url='http://localhost:8090/Bus/GetById/1?sessionKey='+session_key
    
      let headers={
        'Content-Type':'application/json'
    }
    axios.get(url,Booking,{headers}).then((e)=>{
         console.log(e.data)
         setResponse(e.data)
        }).catch((e)=>{
             console.log(e)
            })

            if(session_key==undefined)
                {
                    setSession_keyValidation("session_key is blank")
                }

                 if(busId==undefined)
                {
                    setBusIdValidation("bus Id is blank")
                }
                else
                {
                    setBusIdValidation(" ")
                }


               
            }}> Submit</Button> 

<br/>
            <br/>
            <Card variant="outlined">
            <div>
            
            
             {
                response!=undefined?response.busNumber:"   "
            }
            <br/>
             {
                response!=undefined?response.busType:"   "
            }
            <br/>
             {
                response!=undefined?response.capacity:"   "
            }
             <br/>
            {
                response!=undefined?response.availabeSeat:"   "
            }
           

            </div> <br/>
            
            </Card>
        </div>
        </Paper>
        
    </div>);
}
export default ViewBus