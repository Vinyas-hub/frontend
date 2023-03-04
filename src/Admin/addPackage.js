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
    return (
        <div class="container text-center">
    <div class="row align-items-start ">
    <div class="col-5 " style={{border: '2px solid black'}} >
    <table class="table  table-bordered">
        <br/>
            <h2> Add Package</h2>
            <br/>
            <br/>

            Enter Session Id <br/><Input type='text'  onChange={(e)=>{setSession_key(e.target.value)}} /> <br/>
        <p style={{color:"red"}}>{session_keyValidation}</p>

        Enter Package Name <br/><Input type='text'  onChange={(e)=>{setPackageName(e.target.value)}} /> <br/>
        <p style={{color:"red"}}>{packageNameValidation}</p> 

        Enter Package Description <br/><Input type='text' onChange={(e)=>{setPackageDescription(e.target.value)}}  /> <br/>
        <p style={{color:"red"}}>{packageDescriptionValidation}</p> 

        Enter Route Id   <br/><Input type='text' onChange={(e)=>{setRouteId(e.target.value)}}    /> <br/>
        <p style={{color:"red"}}>{routeIdValidation}</p> 

        Enter  Hotel Id <br/><Input type='text' onChange={(e)=>{setHotel_Id(e.target.value)}}    /><br/>
        <p style={{color:"red"}}>{hotel_IdValidation}</p>

        Enter  Bus Id<br/><Input type='text' onChange={(e)=>{setBusId(e.target.value)}}   /> <br/>
        <p style={{color:"red"}}>{busIdValidation}</p>

        Enter Package Cost <br/><Input type='text' onChange={(e)=>{setPackageCost(e.target.value)}}   /> <br/>
        <p style={{color:"red"}}>{packageCostValidation}</p>

        Enter Package Capacity<br/><Input type='text' onChange={(e)=>{setPackageCapacity(e.target.value)}}   /> <br/>
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
            <br/>
            </table>
    </div>
     <br/>
   &nbsp; <div class="col-6" style={{border: '2px solid black'}}>
    <br/>
    <table class="table  table-bordered">
        
  <thead>
    <tr>
   
      <th>Package Name</th>
      <th>Package Description</th>
      <th>Package Id</th>
      <th>Package Rating</th>
      <th>Package Cost</th>
      <th>Current Availability</th>

    </tr>
  </thead>
  <tbody>
  <tr>
          <td>{response!=undefined?response.packageName:"   "}</td>
          <td>{  response!=undefined?response.packageDescription:"   "}</td>
          <td>{  response!=undefined?response.packageId:"   "}</td>
          <td>{ response!=undefined?response.packageRating:"   "}</td>
          <td>{  response!=undefined?response.packageCost:"   "}</td>
          <td>{ response!=undefined?response.currentAvailability:"   "}</td>
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
export default PackageAdd