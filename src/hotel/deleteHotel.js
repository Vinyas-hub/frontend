
import { Input,Button,Paper,Card } from "@mui/material";
import { useContext, useState } from "react";
import { ProfileContext } from "../context/profilecontext";
import axios from "axios";
 

function DeleteHotel()
{

    const [response,setResponse]=useState()
    const [session_key,setSession_key]=useState()
    const [session_keyValidation,setSession_keyValidation]=useState()
    const [hotel_Id,setHotelID]=useState()
    const [hotelIdValidation,setHotelIDValidation]=useState()
    
    return (<div>
        <Paper elevation={3} style={{marginTop:"30px",width:"566px", marginLeft:"400px"}}>
        <div style={{marginLeft:"150px"}}>
            <h1>delete Hotel</h1>
            {/* Enter SessionId <br/><Input type='text'  onChange={(e)=>{setSession_key(e.target.value)}} /> <br/>
        <p style={{color:"red"}}>{session_keyValidation}</p> */}
        Enter HotelID <br/><Input type='text'  onChange={(e)=>{setHotelID(e.target.value)}} /> <br/>
        <p style={{color:"red"}}>{hotelIdValidation}</p> 

        
    <Button style={{marginLeft:"50px"}} variant="outlined" onClick={()=>{

var Hotel={
    session_key:session_key,
    hotel_Id:hotel_Id,


    }
    let key=localStorage.getItem('session_key')
     let url='http://localhost:8090/hotel/deleteHotel/1?sessionKey='+key
      let headers={
        'Content-Type':'application/json'
    }
    axios.delete(url,Hotel,{headers}).then((e)=>{
         console.log(e.data)
         setResponse(e.data)
        }).catch((e)=>{   
             console.log(e)
            })
            // if(session_key==undefined)
            // {
            //     setSession_keyValidation("session_key is blank")
            // }
                 if(hotel_Id==undefined)
                {
                    setHotelIDValidation("hotel ID is blank")
                }
                else if(hotel_Id.length<0)
                {
                    setHotelIDValidation("hotel ID  less then 3")
                }else
                {
                    setHotelIDValidation(" ")
                }

            }}> Submit</Button> 
            <br/>
            <br/>
            <Card variant="outlined">
                {/* <div>
                    {
                         response!=undefined?response.description:"  "//change the varibale
                    }
                </div> */}
            </Card>
        </div>
        </Paper>
        
    </div>);
    
}
export default DeleteHotel