import { Input,Button,Paper,Card } from "@mui/material";
import { useContext, useState } from "react";
import { ProfileContext } from "../context/profilecontext";
import axios from "axios";  

function ViewRoute()
{
    const [response,setResponse]=useState() //this is hook for getting that console info on frontend

    const [session_key,setSession_key]=useState()
    const [session_keyValidation,setSession_keyValidation]=useState()
    const [routeId,setRouteId]=useState()
    const [routeIdValidation,setRouteIdValidation]=useState()

    return (<div>
        <Paper elevation={8} style={{marginTop:"30px",width:"566px", marginLeft:"400px"}}>
        <div style={{marginLeft:"150px"}}>
            <h1>Route View</h1>
            Enter Session key <br/><Input type='text'  onChange={(e)=>{setSession_key(e.target.value)}} /> <br/>
        <p style={{color:"red"}}>{session_keyValidation}</p>

        Enter routeId <br/><Input type='text'  onChange={(e)=>{setRouteId(e.target.value)}} /> <br/>
        <p style={{color:"red"}}>{routeIdValidation}</p> 

        <Button style={{marginLeft:"50px"}} variant="outlined" onClick={()=>{

        var Route={
    session_key:session_key,
    routeId:routeId
        }
        let url='http://localhost:8090/Route/GetById/1?sessionKey='+session_key
      let headers={
        'Content-Type':'application/json'
    }
    axios.get(url,Route,{headers}).then((e)=>{
         console.log(e.data)
         setResponse(e.data)        //to show that hook

        }).catch((e)=>{
             console.log(e)
            })
             if(session_key==undefined)
                {
                    setSession_keyValidation("session_key is blank")
                }

                 if(routeId==undefined)
                {
                    setRouteIdValidation("route ID is blank")
                }
                else
                {
                    setRouteIdValidation(" ")
                }
 }}> Submit</Button> 
 <br/>
 <Card variant="outlined">
            <div>
            
           <h4> Route From</h4> {
                response!=undefined?response.routeFrom:"   "
            }
                <br/>
                <h4>Route To</h4>      {
                response!=undefined?response.routeTo:"   "
            }
            <br/>
            <h4>pickupPoint</h4>    
             {
                response!=undefined?response.pickupPoint:"   "
            }
            <br/>
            <h4>fare</h4>    
             {
                response!=undefined?response.fare:"   "
            }
            <br/>
            <h4>bus list</h4>    
             {
                response!=undefined?response.busList:"   "
            }

            <br/>
            <h4>Total Cost</h4>
            {
                response!=undefined?response.packageList.packageName:"   "
            }
            
            
            

            </div> <br/>
            
            </Card>
            <br/><br/>
        </div>
        
        </Paper>
        
    </div>);
}
export default ViewRoute