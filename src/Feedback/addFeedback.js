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
    return (<div>
        <Paper elevation={4} style={{marginTop:"30px",width:"566px", marginLeft:"400px"}}>
        <div style={{marginLeft:"150px"}}>
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
                    setRatingValidation(" Give Rating less then 10")
                }else
                {
                    setRatingValidation(" ")
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

            <br/>
            <br/>
            <Card variant="outlined">
            <div>
            <h4>Feedback ID</h4>
            {
              response!=undefined?response.feedbackId:" "
            }
           <br/>
           <h4>Feedback </h4>
           {
              response!=undefined?response.feedback:" "
            }
           <br/>
           <h4>Feedback Rating</h4>
           
             {
              response!=undefined?response.rating:" "
            }
           <br/>
           <h4>Feedback SubmitDate</h4>
           {
              response!=undefined?response.submitDate:" "
            }
            </div> </Card>
            
        </div>
        </Paper>
        
    </div>);
}
export default AddFeedback