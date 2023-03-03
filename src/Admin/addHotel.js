
import { Input,Button,Paper,Card } from "@mui/material";
import { useContext, useState } from "react";
import { ProfileContext } from "../context/profilecontext";
import axios from "axios";
 

function AddHotel()
{

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

    return (<div>
        <Paper elevation={4} style={{marginTop:"30px",width:"566px", marginLeft:"400px"}}>
        <div style={{marginLeft:"150px"}}>
            <h1>Add Hotel</h1>
            Enter Session Key <br/><Input type='text'  onChange={(e)=>{setSession_key(e.target.value)}} /> <br/>
        <p style={{color:"red"}}>{session_keyValidation}</p>
        Enter HotelID <br/><Input type='text'  onChange={(e)=>{setHotelID(e.target.value)}} /> <br/>
        <p style={{color:"red"}}>{hotelIdValidation}</p> 
        Enter Hotel Name <br/><Input type='text' onChange={(e)=>{setHotelName(e.target.value)}}  /> <br/>
        <p style={{color:"red"}}>{hotelNameValidation}</p> 
        <div>
      <label htmlFor="dropdown"> Enter Hotel Type </label>
      <br/>
      <br/>
      <select id="HotelType" value={selectedOption} onChange={handleOptionChange}>
        <option value="NON_AC">NON AC</option>
        <option value="AC">AC</option>
        <option value="THREE_STAR">THREE STAR</option>
        <option value="FOUR_STAR">FOUR STAR</option>
        <option value="FIVE_STAR">FIVE STAR </option>
      </select>
      <p style={{color:"green"}}>You selected: {selectedOption}</p>
    </div>
       
        <p style={{color:"red"}}>{}</p> 
        Enter Hotel Description <br/><Input type='text' onChange={(e)=>{setHotelDescription(e.target.value)}}    /> <br/>
        <p style={{color:"red"}}>{hotelDescriptionValidation}</p> 
        {/* Enter Hotel Address <br/><Input type='text' onChange={(e)=>{setHotelAddress(e.target.value)}}    /><br/>
        <p style={{color:"red"}}>{hotelAddressValidation}</p> */}
        Enter Hotel Rent <br/><Input type='text' onChange={(e)=>{setHotelRent(e.target.value)}}   /> <br/>
        <p style={{color:"red"}}>{hotelRentValidation}</p>
        
        Enter state <br/><Input type='text' onChange={(e)=>{setState(e.target.value)}}   /> <br/>
        <p style={{color:"red"}}>{stateValidation}</p>

        Enter City <br/><Input type='text' onChange={(e)=>{setCity(e.target.value)}}   /> <br/>
        <p style={{color:"red"}}>{cityValidation}</p>

        Enter landmark <br/><Input type='text' onChange={(e)=>{setLandmark(e.target.value)}}   /> <br/>
        <p style={{color:"red"}}>{landmarkValidation}</p>

        Enter pin <br/><Input type='text' onChange={(e)=>{setPin(e.target.value)}}   /> <br/>
        <p style={{color:"red"}}>{pinValidation}</p>




        <div>
      <label htmlFor="dropdown"> Enter Hotel Status </label>
      <br/>
      <br/>
      <select id="HotelStatus" value={selectedOption1} onChange={handleOptionChange1}>
        <option value="SOLD_OUT">SOLD OUT</option>
        <option value="ROOM_AVAILABLE">ROOM AVAILABLE</option>
      </select>
      <p style={{color:"green"}}>You selected: {selectedOption1}</p>
    </div>
    <Button style={{marginLeft:"50px"}} variant="outlined" onClick={()=>{

var Hotel={
    session_key:session_key,
    hotel_Id:hotel_Id,
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
     let url='http://localhost:8090/hotel/addHotel?sessionKey='+session_key
      let headers={
        'Content-Type':'application/json'
    }
    axios.post(url,Hotel,{headers}).then((e)=>{
         console.log(e.data)
         setResponse(e.data) 
        }).catch((e)=>{
             console.log(e)
             
            })
            if(session_key==undefined)
            {
                setSession_keyValidation("session_key is blank")
            }
                 if(hotel_Id==undefined)
                {
                    setHotelIDValidation("hotel ID is blank")
                }
               else
                {
                    setHotelIDValidation(" ")
                }


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
            <Card variant="outlined">
            <div>
                
             <h4>hotelDescription</h4>
            {
                response!=undefined?response.hotelDescription:"   "
            }
    
             <br/>
             <h4>hotelName</h4>
            {
                response!=undefined?response.hotelName:"   "
            }
    
             <br/>
             <h4>hotelRent</h4>
            {
                response!=undefined?response.hotelRent:"   "
            }
    
             <br/>
             <h4>hotelStatus</h4>
            {
                response!=undefined?response.hotelStatus:"   "
            }
    
             <br/>
             <h4>hotelType</h4>
            {
                response!=undefined?response.hotelType:"   "
            }
    
             <br/>
             
            </div>
            </Card>
        </div>
        </Paper>
        
    </div>);
    
}
export default AddHotel