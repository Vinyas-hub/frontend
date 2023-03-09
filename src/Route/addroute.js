import { Input,Button,Paper,Card} from "@mui/material";
import { useContext, useState } from "react";
import { ProfileContext } from "../context/profilecontext";
import axios from "axios";  

function RouteReg()
{
    const [message,setMessage]=useState()
    const [response,setResponse]=useState()
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

    return (
        <div class="container text-center">
    <div class="row align-items-start ">
    <div class="col-5 " style={{border: '2px solid black'}} >
    <table class="table  table-bordered">
        <br/>
            <h1>Add Route </h1>
            {/* Enter Session key <br/><Input type='text'  onChange={(e)=>{setSession_key(e.target.value)}} /> <br/>
        <p style={{color:"red"}}>{session_keyValidation}</p> */}

        {/* Enter Route Id <br/><Input type='text' value={routeId} inputProps={{"data-testid":"routeId"}} 
         onChange={(e)=>{setRouteId(e.target.value)}} /> <br/>
        <p style={{color:"red"}}>{routeIdValidation}</p>  */}

        Enter Route From <br/><Input type='text' value={routeFrom} inputProps={{"data-testid":"routeFrom"}}
         onChange={(e)=>{setRouteFrom(e.target.value)}}  /> <br/>
        <p style={{color:"red"}}>{routeFromValidation}</p> 

        Enter routeTo   <br/><Input type='text' value={routeTo} inputProps={{"data-testid":"routeTo"}}
        onChange={(e)=>{setRouteTo(e.target.value)}}    /> <br/>
        <p style={{color:"red"}}>{routeTorValidation}</p> 

        {/* Enter time<br/><Input type='text' onChange={(e)=>{setTime(e.target.value)}}    /><br/>
        <p style={{color:"red"}}>{timeValidation}</p> */}

        Enter pickupPoint<br/><Input type='text' value={pickupPoint} inputProps={{"data-testid":"pickupPoint"}}
        onChange={(e)=>{setPickupPoint(e.target.value)}}   /> <br/>
        <p style={{color:"red"}}>{pickupPointValidation}</p>

        Enter Fare<br/><Input type='text' value={fare} inputProps={{"data-testid":"fare"}}
        onChange={(e)=>{setFare(e.target.value)}}   /> <br/>
        <p style={{color:"red"}}>{fareValidation}</p>

        {/* Enter packageList<br/><Input type='text' onChange={(e)=>{setPackageList(e.target.value)}}   /> <br/>
        <p style={{color:"red"}}>{pickupPointValidation}</p>

        Enter busList<br/><Input type='text' onChange={(e)=>{setBusList(e.target.value)}}   /> <br/>
        <p style={{color:"red"}}>{fareValidation}</p> */}

        <Button data-testid="addbtn" style={{marginLeft:"10px"}} variant="outlined" onClick={()=>{

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
    let key=localStorage.getItem('session_key')
     let url='http://localhost:8090/Route/Register?sessionKey='+key
      let headers={
        'Content-Type':'application/json'
    }
    axios.post(url,Route,{headers}).then((e)=>{
         console.log(e.data)
         setResponse(e.data)
        }).catch((e)=>{

             console.log(e)
            })
            setMessage("route added")
            // if(session_key==undefined)
            //     {
            //         setSession_keyValidation("session_key is blank")
            //     }

                //  if(routeId==undefined)
                // {
                //     setRouteIdValidation("route ID is blank")
                // }
                // else
                // {
                //     setRouteIdValidation(" ")
                // }


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
                // if(time==undefined)
                // {
                //     setTimeValidation("time to  is blank")
                // }
                // else
                // {
                //     setTimeValidation(" ")
                // }

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
<div data-testid="message"> {message} </div>
</table>
    </div>
     <br/>
   &nbsp; <div class="col-6" style={{border: '2px solid black'}}>
    <br/>
    <table class="table  table-bordered table-striped table-hover">
        
  <thead class="table-dark">
    <tr>
   
      <th>Route ID</th>
      <th>Route From</th>
      <th>Route To</th>
      <th>Pickup Point</th>
      <th>Fare</th>

    </tr>
  </thead>
  <tbody>
  <tr>
          <td>{  response!=undefined?response.routeId:"   "}</td>
          <td>{ response!=undefined?response.routeFrom:"   "}</td>
          <td>{ response!=undefined?response.routeTo:"   "}</td>
          <td>{response!=undefined?response.pickupPoint:"   "}</td>
          <td>{response!=undefined?response.fare:"   "}</td>
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
export default RouteReg