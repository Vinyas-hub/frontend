import { Input,Button,Paper } from "@mui/material";
import { useContext, useState } from "react";
import { ProfileContext } from "../context/profilecontext";
import axios from "axios";  

function RouteReg()
{
    const [session_key,setSession_key]=useState()
    const [session_keyValidation,setSession_keyValidation]=useState()
    const [routeId,setRouteId]=useState()
    const [routeIdValidation,setRouteIdValidation]=useState()
    const [routeFrom,setRouteFrom]=useState()
    const [routeFromValidation,setRouteFromValidation]=useState()
    const [routeTo,setRouteTo]=useState()
    const [routeTorValidation,setRouteToValidation]=useState()
    // const [time,setTime]=useState()
    // const [timeValidation,setTimeValidation]=useState()
    const [pickupPoint,setPickupPoint]=useState()
    const [pickupPointValidation,setPickupPointValidation]=useState()
    const [fare,setFare]=useState()
    const [fareValidation,setFareValidation]=useState()
    // const [packageList,setPackageList]=useState()
    // const [packageListValidation,setPackageListValidation]=useState()
    // const [busList,setBusList]=useState()
    // const [busListValidation,setBusListValidation]=useState()

    return (<div>
        <Paper elevation={4} style={{marginTop:"30px",width:"566px", marginLeft:"400px"}}>
        <div style={{marginLeft:"150px"}}>
            <h1>Route Add</h1>
            Enter Session key <br/><Input type='text'  onChange={(e)=>{setSession_key(e.target.value)}} /> <br/>
        <p style={{color:"red"}}>{session_keyValidation}</p>

        Enter routeId <br/><Input type='text'  onChange={(e)=>{setRouteId(e.target.value)}} /> <br/>
        <p style={{color:"red"}}>{routeIdValidation}</p> 

        Enter routeFrom <br/><Input type='text' onChange={(e)=>{setRouteFrom(e.target.value)}}  /> <br/>
        <p style={{color:"red"}}>{routeFromValidation}</p> 

        Enter routeTo   <br/><Input type='text' onChange={(e)=>{setRouteTo(e.target.value)}}    /> <br/>
        <p style={{color:"red"}}>{routeTorValidation}</p> 

        {/* Enter time<br/><Input type='text' onChange={(e)=>{setTime(e.target.value)}}    /><br/>
        <p style={{color:"red"}}>{timeValidation}</p> */}

        Enter pickupPoint<br/><Input type='text' onChange={(e)=>{setPickupPoint(e.target.value)}}   /> <br/>
        <p style={{color:"red"}}>{pickupPointValidation}</p>

        Enter Fare<br/><Input type='text' onChange={(e)=>{setFare(e.target.value)}}   /> <br/>
        <p style={{color:"red"}}>{fareValidation}</p>

        {/* Enter packageList<br/><Input type='text' onChange={(e)=>{setPackageList(e.target.value)}}   /> <br/>
        <p style={{color:"red"}}>{pickupPointValidation}</p>

        Enter busList<br/><Input type='text' onChange={(e)=>{setBusList(e.target.value)}}   /> <br/>
        <p style={{color:"red"}}>{fareValidation}</p> */}

        <Button style={{marginLeft:"50px"}} variant="outlined" onClick={()=>{

var Route={
    session_key:session_key,
    routeId:routeId,
    routeFrom:routeFrom,
    routeTo:routeTo,
    // time:time,
    pickupPoint:pickupPoint,
    fare:fare,
    // packageList:packageList,
    // busList:busList

    }
     let url='http://localhost:8090/Route/Register?sessionKey='+session_key
      let headers={
        'Content-Type':'application/json'
    }
    axios.post(url,Route,{headers}).then((e)=>{
         console.log(e.data)
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


                if(routeFrom==undefined)
                {
                    setRouteFromValidation("route from is blank")
                }
                else if(routeFrom.length<3)
                {
                    setRouteFromValidation("route from less then 3 words")
                }else
                {
                    setRouteFromValidation(" ")
                }
               
                if(routeTo==undefined)
                {
                    setRouteToValidation("route to  is blank")
                }
                else
                {
                    setRouteToValidation(" ")
                }

                if(pickupPoint==undefined)
                {
                    setPickupPointValidation("pickupPoint blank")
                }
                else
                {
                    setPickupPointValidation(" ")
                }

                if(fare==undefined)
                {
                    setFareValidation("fare is blank")
                }
                else
                {
                    setFareValidation(" ")
                }

            }}> Submit</Button> 
        </div>
        </Paper>
        
    </div>);
}
export default RouteReg