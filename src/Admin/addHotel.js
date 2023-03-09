
import { Input,Button,Paper,Card } from "@mui/material";
import { useContext, useState } from "react";
import { ProfileContext } from "../context/profilecontext";
import axios from "axios";
 

function AddHotel()
{
  const [message,setMessage]=useState()
    const [response,setResponse]=useState()   
    const [selectedOption, setSelectedOption] = useState('option1');
    const [selectedOption1, setSelectedOption1] = useState('option2');
    // initialize the selected option state with the first option as default
    const [session_key,setSession_key]=useState()
    const [session_keyValidation,setSession_keyValidation]=useState()
    const [hotel_Id,setHotelID]=useState()
    const [hotelIdValidation,setHotelIDValidation]=useState()
    const [hotelName,setHotelName]=useState()
    const [hotelNameValidation,setHotelNameValidation]=useState()
    const [hotelDescription,setHotelDescription]=useState()
    const [hotelDescriptionValidation,setHotelDescriptionValidation]=useState()
    const [hotelAddress,setHotelAddress]=useState()
    const [hotelAddressValidation,setHotelAddressValidation]=useState()
    const [state,setState]=useState()
    const [stateValidation,setStateValidation]=useState()
    const [city,setCity]=useState()
    const [cityValidation,setCityValidation]=useState()
    const [landmark,setLandmark]=useState()
    const [landmarkValidation,setLandmarkValidation]=useState()
    const [pin,setPin]=useState()
    const [pinValidation,setPinValidation]=useState()
    const [hotelRent,setHotelRent]=useState()
    const [hotelRentValidation,setHotelRentValidation]=useState()




  
    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    }
    const handleOptionChange1 = (event) => {
        setSelectedOption1(event.target.value);
      }

    return (
       <div class="container text-center">
    <div class="row align-items-start ">
    <div class="col-4 " style={{border: '2px solid black'}} >
    <table class="table  table-bordered">
        <br/>
        <h3>Add Hotel</h3>
        <br/>
            {/* Enter Your Session Key <br/><Input type='text'   value={session_key} inputProps={{"data-testid":"session_key"}}
            onChange={(e)=>{setSession_key(e.target.value)}} /> <br/>
        <p style={{color:"red"}}>{session_keyValidation}</p> */}
        {/* Enter Your HotelID <br/><Input type='text'   value={hotel_Id} inputProps={{"data-testid":"hotel_Id"}}
        onChange={(e)=>{setHotelID(e.target.value)}} /> <br/> */}
        <p style={{color:"red"}}>{hotelIdValidation}</p> 
        Enter Hotel Name <br/><Input type='text'  value={hotelName} inputProps={{"data-testid":"hotelName"}}
        onChange={(e)=>{setHotelName(e.target.value)}}  /> <br/>
        <p style={{color:"red"}}>{hotelNameValidation}</p> 
        <div>
      <label htmlFor="dropdown"> Enter Hotel Type </label>
      <br/>
      <br/>
      <select id="HotelType" class="btn btn-primary dropdown-toggle"  value={selectedOption} 
      onChange={handleOptionChange}>
        <option value="NON_AC">NON AC</option>
        <option value="AC">AC</option>
        <option value="THREE_STAR">THREE STAR</option>
        <option value="FOUR_STAR">FOUR STAR</option>
        <option value="FIVE_STAR">FIVE STAR </option>
      </select>
      <p style={{color:"green",paddingTop:"12px"}}>You selected: {selectedOption}</p>
    </div>
       
        <p style={{color:"red"}}>{}</p> 
        Enter Hotel Description <br/><Input type='text'  value={hotelDescription} inputProps={{"data-testid":"hotelDescription"}}
        onChange={(e)=>{setHotelDescription(e.target.value)}}    /> <br/>
        <p style={{color:"red"}}>{hotelDescriptionValidation}</p> 
        {/* Enter Hotel Address <br/><Input type='text' onChange={(e)=>{setHotelAddress(e.target.value)}}    /><br/>
        <p style={{color:"red"}}>{hotelAddressValidation}</p> */}
        Enter Hotel Rent <br/><Input type='text'  value={hotelRent} inputProps={{"data-testid":"hotelRent"}}
        onChange={(e)=>{setHotelRent(e.target.value)}}   /> <br/>
        <p style={{color:"red"}}>{hotelRentValidation}</p>
        
        Enter state <br/><Input type='text'  value={state} inputProps={{"data-testid":"state"}}
        onChange={(e)=>{setState(e.target.value)}}   /> <br/>
        <p style={{color:"red"}}>{stateValidation}</p>

        Enter City <br/><Input type='text'  value={city} inputProps={{"data-testid":"city"}}
        onChange={(e)=>{setCity(e.target.value)}}   /> <br/>
        <p style={{color:"red"}}>{cityValidation}</p>

        Enter landmark <br/><Input type='text'  value={landmark} inputProps={{"data-testid":"landmark"}}
        onChange={(e)=>{setLandmark(e.target.value)}}   /> <br/>
        <p style={{color:"red"}}>{landmarkValidation}</p>

        Enter pin <br/><Input type='text'  value={pin} inputProps={{"data-testid":"pin"}}
        onChange={(e)=>{setPin(e.target.value)}}   /> <br/>
        <p style={{color:"red"}}>{pinValidation}</p>




        <div>
      <label htmlFor="dropdown"> Enter Hotel Status </label>
      <br/>
      <br/>
      <select id="HotelStatus" class="btn btn-primary dropdown-toggle"  value={selectedOption1} onChange={handleOptionChange1}>
        <option value="SOLD_OUT">SOLD OUT</option>
        <option value="ROOM_AVAILABLE">ROOM AVAILABLE</option>
      </select>
      <p style={{color:"green" ,paddingTop:"12px"}}>You selected: {selectedOption1}</p>
    </div>
    <Button data-testid="addbtn" style={{marginLeft:"10px"}} variant="outlined" onClick={()=>{

var Hotel={
    session_key:session_key,
   //hotel_Id:hotel_Id,
    hotelType:selectedOption,
    hotelStatus:selectedOption1,
    hotelName:hotelName,
    hotelDescription:hotelDescription,
    hotelAddress:{
        state: state,
    city: city,
    landmark: landmark,
    pin: pin
  },
  
    hotelRent:hotelRent

    }
    let key=localStorage.getItem('session_key')
     let url='http://localhost:8090/hotel/addHotel?sessionKey='+key
      let headers={
        'Content-Type':'application/json'
    }
    axios.post(url,Hotel,{headers}).then((e)=>{
         console.log(e.data)
         setResponse(e.data) 
        }).catch((e)=>{
             console.log(e)
             
            })
            setMessage("hotel added")
            // if(session_key==undefined)
            // {
            //     setSession_keyValidation("session_key is blank")
            // }
              //    if(hotel_Id==undefined)
              //   {
              //       setHotelIDValidation("hotel ID is blank")
              //   }
              //  else
              //   {
              //       setHotelIDValidation(" ")
              //   }


                if(hotelName==undefined)
                {
                    setHotelNameValidation("hotelName is blank")
                }
                else if(hotelName.length<3)
                {
                    setHotelNameValidation("hotelName less then 3 words")
                }else
                {
                    setHotelNameValidation(" ")
                }
               
                if(hotelDescription==undefined)
                {
                    setHotelDescriptionValidation("HotelDescription is blank")
                }
                else if(hotelDescription.length<10)
                {
                    setHotelDescriptionValidation("HotelDescription must be described in 10 to 1000 Character")
                }else
                {
                    setHotelDescriptionValidation(" ")
                }


                if(hotelAddress==undefined)
                {
                    setHotelAddressValidation("user name is blank")
                }
                else if(hotelAddress.length<3)
                {
                    setHotelAddressValidation("user name less then 3")
                }else
                {
                    setHotelAddressValidation(" ")
                }


                if(hotelRent==undefined)
                {
                    setHotelRentValidation("HotelRentis blank")
                }
                else if(hotelRent.length<0)
                {
                    setHotelRentValidation(" ")
                }else
                {
                    setHotelRentValidation(" ")
                }

            }}> Submit</Button> 
             <div data-testid="message"> {message} </div>

</table>
    </div>
     <br/>
   &nbsp; <div class="col-7" style={{border: '2px solid black'}}>
    <br/>
    <table class="table  table-bordered table-striped table-hover" >
        
  <thead class="table-dark">
    <tr>
    <th>Hotel Name</th>
    <th>Hotel Type</th>
      <th>Hotel Description</th>
      
      <th>Hotel Rent</th>
      <th>Hotel Status</th>
     
    </tr>
  </thead>
  <tbody>
  <tr>
  <td>{  response!=undefined?response.hotelName:"   "}</td>
  <td>{response!=undefined?response.hotelType:"   "}</td>
          <td>{ response!=undefined?response.hotelDescription:"   "}</td>
          
          <td>{ response!=undefined?response.hotelRent:"   "}</td>
          <td>{response!=undefined?response.hotelStatus:"   "}</td>
          
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
export default AddHotel