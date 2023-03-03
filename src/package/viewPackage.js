import { Input,Button,Paper,Card } from "@mui/material";
import { useContext, useState } from "react";
import { ProfileContext } from "../context/profilecontext";
import axios from "axios";

function ViewAllPackage()
{
     const [response,setResponse]=useState()
    const [session_key,setSession_key]=useState()
    const [session_keyValidation,setSession_keyValidation]=useState()
    // const [busId,setBusId]=useState()
    // const [busIdValidation,setBusIdValidation]=useState()
    

    return (<div>
        <Paper elevation={4} style={{marginTop:"30px",width:"566px", marginLeft:"400px"}}>
        <div style={{marginLeft:"150px"}}>
            <h1>package view</h1>

            Enter Session Key <br/><Input type='text'  onChange={(e)=>{setSession_key(e.target.value)}} /> <br/>
        <p style={{color:"red"}}>{session_keyValidation}</p>

        {/* Enter BusId <br/><Input type='text'  onChange={(e)=>{setBusId(e.target.value)}} /> <br/>
        <p style={{color:"red"}}>{busIdValidation}</p>  */}

       

        <Button style={{marginLeft:"50px"}} variant="outlined" onClick={()=>{

var Package={
    session_key:session_key,
    // busId:busId
   
       
    
    }
     let url='http://localhost:8090/package/viewAllPackages?sessionKey='+session_key

      let headers={
        'Content-Type':'application/json'
    }
    axios.get(url,Package,{headers}).then((e)=>{
         console.log(e.data)
         setResponse(e.data)
        }).catch((e)=>{
             console.log(e)
            })

            if(session_key==undefined)
                {
                    setSession_keyValidation("session_key is blank")
                }

                //  if(busId==undefined)
                // {
                //     setBusIdValidation("bus Id is blank")
                // }
                // else
                // {
                //     setBusIdValidation(" ")
                // }


               
            }}> Submit</Button> 

<br/>
<br/>
            <Card variant="outlined">
            <div>
            
           <h4>Package Id</h4> {
                response!=undefined?response.packageId:"   "
            }
                <br/>
                <h4>Package Name</h4>      {
                response!=undefined?response.packageName:"   "
            }
            <br/>
            <h4>Package description</h4>    
             {
                response!=undefined?response.packageDescription:"   "
            }
            <h4>Package Rating</h4>    
             {
                response!=undefined?response.packageRating:"   "
            }
            <h4>Package COst</h4>    
             {
                response!=undefined?response.packageCost:"   "
            }

            <br/>
            <h4>Total Cost</h4>
            {
                response!=undefined?response.totalCost:"   "
            }
            
            
            

            </div> <br/>
            
            </Card>
        </div>
        </Paper>
            
            
       
        
    </div>);
}
export default ViewAllPackage