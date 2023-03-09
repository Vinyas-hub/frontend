import { Input,Button,Paper,Card } from "@mui/material";
import { useContext, useState } from "react";
import { ProfileContext } from "../context/profilecontext";
import axios from "axios";  

function BusReg()
{   
    const [selectedOption, setSelectedOption] = useState('option1');
    const [response,setResponse]=useState()
    const [message,setMessage]=useState()
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

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
      }

    return (<div class="container text-center" >
    <div class="row align-items-start ">
    <div class="col-5 " style={{border: '2px solid black'}}  >
    <table class="table  table-bordered">
        <br/>
    <h3>Add Bus</h3>
    <br/>
    {/* Enter Session Key <br/><Input type='text' 
     onChange={(e)=>{setSession_key(e.target.value)}} /> <br/>
        <p style={{color:"red"}}>{session_keyValidation}</p> */}

        {/* Enter Bus ID <br/><Input type='text'  onChange={(e)=>{setBusId(e.target.value)}} /> <br/>
        <p style={{color:"red"}}>{busIdValidation}</p>  */}

        <div>
      <label htmlFor="dropdown"> Enter Bus Type </label>
      <br/>
      <br/>
      <select id="BusType" class="btn btn-primary dropdown-toggle" value={selectedOption} onChange={handleOptionChange}>
        <option value="NON_AC">NON AC</option>
        <option value="SLEEPER_AC">SLEEPER AC</option>
        <option value="SLEEPER_NON_AC"> SLEEPER NON AC</option>
      </select>
      <p style={{color:"green", paddingTop:"12px"}}>You selected: {selectedOption}</p>
    </div>

        Enter Bus Number   <br/><Input type='text' value={busNumber} inputProps={{"data-testid":"busNumber"}} 
        onChange={(e)=>{setBusNumber(e.target.value)}}    /> <br/>
        <p style={{color:"red"}}>{busNumberValidation}</p> 

        Enter Capacity <br/><Input type='text' value={capacity} inputProps={{"data-testid":"capacity"}} 
        onChange={(e)=>{setCapacity(e.target.value)}}    /><br/>
        <p style={{color:"red"}}>{capacityValidation}</p>

        Enter Available Seat<br/><Input type='text' value={availableSeat} inputProps={{"data-testid":"availableSeat"}}
        onChange={(e)=>{setAvailableSeat(e.target.value)}}   /> <br/>
        <p style={{color:"red"}}>{availableSeatValidation}</p>

        <Button data-testid="addbtn" style={{marginLeft:"10px"}} variant="outlined" onClick={()=>{

var Bus={
    session_key:session_key,
    busId:busId,
    busType:selectedOption,
    busNumber:busNumber,
    capacity:capacity,
    availabeSeat:availableSeat

    }
    console.log(Bus)
    let key=localStorage.getItem('session_key')
     let url='http://localhost:8090/Bus/Register?sessionKey='+key
      let headers={
        'Content-Type':'application/json'
    }
    axios.post(url,Bus,{headers}).then((e)=>{
         console.log(e.data)
         setResponse(e.data)        //to show that hook
        
        }).catch((e)=>{
             console.log(e)
            })
            setMessage("bus added")
            // if(session_key==undefined)
            // {
            //     setSession_keyValidation("session_key is blank")
            // }

                 if(busId==undefined)
                {
                    setBusIdDValidation("bus ID is blank")
                }
               else
                {
                    setBusIdDValidation(" ")
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
            <div data-testid="message"> {message} </div>
            </table>
    </div>
     <br/>
   &nbsp; <div class="col-6" style={{border: '2px solid black'}}>
    <br/>
    <table class="table  table-bordered table-striped table-hover">
        
  <thead class="table-dark">
    <tr>
   
      <th>Bus ID</th>
      <th>Bus Type</th>
      <th>Bus Number</th>
      <th>Capacity</th>
      <th>Available Seat</th>
    </tr>
  </thead>
  <tbody>
            <tr>
          <td>{ response!=undefined?response.busId:"   "}</td>
          <td>{  response!=undefined?response.busType:"   "}</td>
          <td>{ response!=undefined?response.busNumber:"   "}</td>
          <td>{response!=undefined?response.capacity:"   "}</td>
          <td>{response!=undefined?response.availabeSeat:"   "}</td>
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
    </div>);
                
                
            
}
export default BusReg
       
    