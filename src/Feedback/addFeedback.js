import { Input,Button,Paper, Card } from "@mui/material";
import { useContext, useState } from "react";
import { ProfileContext } from "../context/profilecontext";
import axios from "axios";  
import { Feedback } from "@mui/icons-material";

function AddFeedback()
{   
    const [response,setResponse]=useState()
    const [session_key,setSession_key]=useState()
    const [session_keyValidation,setSession_keyValidation]=useState()
    // const [feedbackId,setFeedbackId]=useState()
    // const [feedbackIdValidation,setFeedbackIdValidation]=useState()
    const [feedback,setFeedback]=useState()
    const [feedbackValidation,setfeedbackValidation]=useState()
    const [rating,setRating]=useState()
    const [ratingValidation,setRatingValidation]=useState()
    const [bookingId,setBookingId]=useState()
    const [bookingIdValidation,setBookingIdValidation]=useState()
    const [packageId,setPackageId]=useState()
    const [packageIdValidation,setPackageIdValidation]=useState()
    return (<div class="container text-center">
    <div class="row align-items-start ">
    <div class="col-5 " style={{border: '2px solid black'}} >
    <table class="table  table-bordered  ">
            <h1>Add Feedback</h1>

            Enter Session Key<br/><Input type='text'  onChange={(e)=>{setSession_key(e.target.value)}} /> <br/>
        <p style={{color:"red"}}>{session_keyValidation}</p>

        

        Enter feedback <br/><Input type='text' onChange={(e)=>{setFeedback(e.target.value)}}  /> <br/>
        <p style={{color:"red"}}>{feedbackValidation}</p> 

        Enter rating   <br/><Input type='text' onChange={(e)=>{setRating(e.target.value)}}    /> <br/>
        <p style={{color:"red"}}>{ratingValidation}</p> 

        Enter bookingId <br/><Input type='text'  onChange={(e)=>{setBookingId(e.target.value)}} /> <br/>
        <p style={{color:"red"}}>{bookingIdValidation}</p> 

        Enter packageId   <br/><Input type='text' onChange={(e)=>{setPackageId(e.target.value)}}    /> <br/>
        <p style={{color:"red"}}>{packageIdValidation}</p> 

        <Button style={{marginLeft:"50px"}} variant="outlined" onClick={()=>{

var Feedback={
    session_key:session_key,
    feedback:feedback,
    rating:rating,
    bookingId:bookingId,
    packageId:packageId

    }
     let url='http://localhost:8090/feedbacks/addfeedback?sessionKey='+session_key
      let headers={
        'Content-Type':'application/json'
    }
    axios.post(url,Feedback,{headers}).then((e)=>{
         console.log(e.data)
         setResponse(e.data)    
        }).catch((e)=>{
             console.log(e)
            })
            if(session_key==undefined)
            {
                setSession_keyValidation("session_key is blank")
            }


                if(feedback==undefined)
                {
                    setfeedbackValidation("feedback is blank")
                }
               else
                {
                    setfeedbackValidation(" ")
                }
               
                if(rating==undefined)
                {
                    setRatingValidation("rating is blank")
                }
                else if(rating.length<10)
                {
                    setRatingValidation(" ")
                }else
                {
                    setRatingValidation(" Give Rating less then 10")
                }

                
                if(bookingId==undefined)
                {
                    setBookingIdValidation("bookingID is blank")
                }
                else
                {
                    setBookingIdValidation(" ")
                }



                if(packageId==undefined)
                {
                    setPackageIdValidation("package Id is blank")
                }
               else
                {
                    setPackageIdValidation(" ")
                }

            }}> Submit</Button> 

</table>
    </div>
     <br/>
   &nbsp; <div class="col-6" style={{border: '2px solid black'}}>
    <br/>
    <table class="table  table-bordered">
        
  <thead>
    <tr>
   
      <th>Feedback ID</th>
      <th>Feedback</th>
      <th>Feedback Rating</th>
      <th>Feedback SubmitDate</th>
      
    </tr>
  </thead>
  <tbody>
            <tr>
          <td>{  response!=undefined?response.feedbackId:" "}</td>
          <td>{   response!=undefined?response.feedback:" "}</td>
          {/* <td>{ response!=undefined?response.busNumber:"   "}</td> */}
          <td> {  response!=undefined?response.rating:" "} </td>
          <td>{ response!=undefined?response.submitDate:" "}</td>
          
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
export default AddFeedback