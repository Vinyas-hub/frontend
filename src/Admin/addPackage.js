import { Input,Button,Paper, Card } from "@mui/material";
import { useContext, useState } from "react";
import { ProfileContext } from "../context/profilecontext";
import axios from "axios";

function PackageAdd()
{
    const [response,setResponse]=useState()   
    const [session_key,setSession_key]=useState()
    const [session_keyValidation,setSession_keyValidation]=useState()
    const [packageName,setPackageName]=useState()
    const [packageNameValidation,setPackageNameValidation]=useState()
    const [packageDescription,setPackageDescription]=useState()
    const [packageDescriptionValidation,setPackageDescriptionValidation]=useState()
    const [routeId,setRouteId]=useState()
    const [routeIdValidation,setRouteIdValidation]=useState()
    const [hotel_Id,setHotel_Id]=useState()
    const [hotel_IdValidation,setHotel_IdValidation]=useState()
    const [busId,setBusId]=useState()
    const [busIdValidation,setBusIdValidation]=useState()
    const [packageCost,setPackageCost]=useState()
    const [packageCostValidation,setPackageCostValidation]=useState()
    const [packageCapacity,setPackageCapacity]=useState()
    const [packageCapacityValidation,setPackageCapacityValidation]=useState()
    return (<div>
        <Paper elevation={4} style={{marginTop:"30px",width:"566px", marginLeft:"400px"}}>
        <div style={{marginLeft:"150px"}}>
            <h1>Package Add</h1>

            Enter SessionId <br/><Input type='text'  onChange={(e)=>{setSession_key(e.target.value)}} /> <br/>
        <p style={{color:"red"}}>{session_keyValidation}</p>

        Enter package name <br/><Input type='text'  onChange={(e)=>{setPackageName(e.target.value)}} /> <br/>
        <p style={{color:"red"}}>{packageNameValidation}</p> 

        Enter package packageDescription <br/><Input type='text' onChange={(e)=>{setPackageDescription(e.target.value)}}  /> <br/>
        <p style={{color:"red"}}>{packageDescriptionValidation}</p> 

        Enter routeId   <br/><Input type='text' onChange={(e)=>{setRouteId(e.target.value)}}    /> <br/>
        <p style={{color:"red"}}>{routeIdValidation}</p> 

        Enter  hotel_Id <br/><Input type='text' onChange={(e)=>{setHotel_Id(e.target.value)}}    /><br/>
        <p style={{color:"red"}}>{hotel_IdValidation}</p>

        Enter  busId<br/><Input type='text' onChange={(e)=>{setBusId(e.target.value)}}   /> <br/>
        <p style={{color:"red"}}>{busIdValidation}</p>

        Enter packageCost <br/><Input type='text' onChange={(e)=>{setPackageCost(e.target.value)}}   /> <br/>
        <p style={{color:"red"}}>{packageCostValidation}</p>

        Enter packageCapacity<br/><Input type='text' onChange={(e)=>{setPackageCapacity(e.target.value)}}   /> <br/>
        <p style={{color:"red"}}>{packageCapacityValidation}</p>

    
       
    <Button style={{marginLeft:"50px"}} variant="outlined" onClick={()=>{

var Package={
    session_key:session_key,
    packageName:packageName,
    packageDescription:packageDescription,
    routeId:routeId,
    hotel_Id:hotel_Id,
    busId:busId,
    packageCost:packageCost,
    packageCapacity:packageCapacity
       
    
    }
     let url='http://localhost:8090/package/addPackageByIds?sessionKey='+session_key
      let headers={
        'Content-Type':'application/json'
    }
    axios.post(url,Package,{headers}).then((e)=>{
         console.log(e.data)
         setResponse(e.data) 
        }).catch((e)=>{
             console.log(e)
            })

            if(session_key==undefined)
                {
                    setSession_keyValidation("session_key is blank")
                }

                 if(packageName==undefined)
                {
                    setPackageNameValidation("package name  is empty")
                }
                else
                {
                    setPackageNameValidation(" ")
                }


                if(packageDescription==undefined)
                {
                    setPackageDescriptionValidation("description  is blank")
                }
                else if(packageDescription.length<3)
                {
                    setPackageDescriptionValidation("description is less then 3 words")
                }else
                {
                    setPackageDescriptionValidation(" ")
                }
               
                


                if(routeId==undefined)
                {
                    setRouteIdValidation("routeId is blank")
                }
                else
                {
                    setRouteIdValidation(" ")
                }

                if(hotel_Id==undefined)
                {
                    setHotel_IdValidation("HotelId is blank")
                }
               else
                {
                    setHotel_IdValidation(" ")
                }   


                if(busId==undefined)
                {
                    setBusIdValidation("bus Id is blank")
                }
                else
                {
                    setBusIdValidation(" ")
                }

                if(packageCost==undefined)
                {
                    setPackageCostValidation("package cost blank")
                }
                else if(packageCost.length<0)
                {
                    setPackageCostValidation(" ")
                }else
                {
                    setPackageCostValidation(" ")
                }

                if(packageCapacity==undefined)
                {
                    setPackageCapacityValidation("packlage capacity is blank")
                }
                else
                {
                    setPackageCapacityValidation(" ")
                }

            }}> Submit</Button> 
            <Card variant="outlined">
            <div>
                
             <h4>package Name</h4>
            {
                response!=undefined?response.packageName:"   "
            }
    
             <br/>
             <h4>package Description</h4>
            {
                response!=undefined?response.packageDescription:"   "
            }
    
             <br/>
             <h4>packageId</h4>
            {
                response!=undefined?response.packageId:"   "
            }
    
             <br/>
             <h4>packageRating</h4>
            {
                response!=undefined?response.packageRating:"   "
            }
    
             <br/>
             <h4>packageCost</h4>
            {
                response!=undefined?response.packageCost:"   "
            }
    
             <br/>
             <h4>Current Availability</h4>
            {
                response!=undefined?response.currentAvailability:"   "
            }
    
             <br/>
             
            </div>
            </Card>
        </div>
        </Paper>
        
    </div>);
}
export default PackageAdd