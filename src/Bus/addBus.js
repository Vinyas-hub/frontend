import { Input,Button,Paper,Card } from "@mui/material";
import { useContext, useState } from "react";
import { ProfileContext } from "../context/profilecontext";
import axios from "axios";  

function BusReg()
{   
    const [response,setResponse]=useState()
    const [session_key,setSession_key]=useState()
    const [session_keyValidation,setSession_keyValidation]=useState()
    const [busId,setBusId]=useState()
    const [busIdValidation,setBusIdDValidation]=useState()
    const [busType,setBusType]=useState()
    const [busTypeValidation,setBusTypeValidation]=useState()
    const [busNumber,setBusNumber]=useState()
    const [busNumberValidation,setBusNumberValidation]=useState()
    const [capacity,setCapacity]=useState()
    const [capacityValidation,setCapacityValidation]=useState()
    const [availableSeat,setAvailableSeat]=useState()
    const [availableSeatValidation,setAvailableSeatValidation]=useState()

    return (<div>
        <Paper elevation={4} style={{marginTop:"30px",width:"566px", marginLeft:"400px"}}>
        <div style={{marginLeft:"150px"}}>
            <h1>BusAdd</h1>

            Enter Session Key <br/><Input type='text'  onChange={(e)=>{setSession_key(e.target.value)}} /> <br/>
        <p style={{color:"red"}}>{session_keyValidation}</p>

        Enter Bus ID <br/><Input type='text'  onChange={(e)=>{setBusId(e.target.value)}} /> <br/>
        <p style={{color:"red"}}>{busIdValidation}</p> 

        Enter BusType<br/><Input type='text' onChange={(e)=>{setBusType(e.target.value)}}  /> <br/>
        <p style={{color:"red"}}>{busTypeValidation}</p> 

        Enter busNumber   <br/><Input type='text' onChange={(e)=>{setBusNumber(e.target.value)}}    /> <br/>
        <p style={{color:"red"}}>{busNumberValidation}</p> 

        Enter capacity <br/><Input type='text' onChange={(e)=>{setCapacity(e.target.value)}}    /><br/>
        <p style={{color:"red"}}>{capacityValidation}</p>

        Enter availableSeat<br/><Input type='text' onChange={(e)=>{setAvailableSeat(e.target.value)}}   /> <br/>
        <p style={{color:"red"}}>{availableSeatValidation}</p>

        <Button style={{marginLeft:"50px"}} variant="outlined" onClick={()=>{

var Bus={
    session_key:session_key,
    busId:busId,
    busType:busType,
    busNumber:busNumber,
    capacity:capacity,
    availabeSeat:availableSeat

    }
    console.log(Bus)
     let url='http://localhost:8090/Bus/Register?sessionKey='+session_key
      let headers={
        'Content-Type':'application/json'
    }
    axios.post(url,Bus,{headers}).then((e)=>{
         console.log(e.data)
         setResponse(e.data)        //to show that hook

        }).catch((e)=>{
             console.log(e)
            })
            if(session_key==undefined)
            {
                setSession_keyValidation("session_key is blank")
            }

                 if(busId==undefined)
                {
                    setBusIdDValidation("bus ID is blank")
                }
               else
                {
                    setBusIdDValidation(" ")
                }


                if(busType==undefined)
                {
                    setBusTypeValidation("busType is blank")
                }
                else
                {
                    setBusTypeValidation(" ")
                }
               
                if(busNumber==undefined)
                {
                    setBusNumberValidation("bus Number is blank")
                }
                else
                {
                    setBusNumberValidation(" ")
                }


                if(capacity==undefined)
                {
                    setCapacityValidation("capacity is blank")
                }
                else
                {
                    setCapacityValidation(" ")
                }


                if(availableSeat==undefined)
                {
                    setAvailableSeatValidation("available seat blank")
                }
                else
                {
                    setAvailableSeatValidation(" ")
                    
                }

            }}> Submit</Button> 
            <br/>
            <Card variant="outlined">
            <div>
                
            <h4>Bus Type</h4>
            {
                response!=undefined?response.busType:"   "
            }
    
             <br/>
             <h4>Bus Number</h4>
            {
                response!=undefined?response.busNumber:"   "
            }
             <br/>
             <h4>Capacity</h4>
            {
                response!=undefined?response.capacity:"   "
            }
              <br/>
             <h4>AvailabeSeat</h4>
            {
                response!=undefined?response.availabeSeat:"   "
            }
            </div>
            </Card>
        </div>
        </Paper>
        
    </div>);
}
export default BusReg
       
    