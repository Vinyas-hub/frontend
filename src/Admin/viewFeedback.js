import { Input,Button,Paper } from "@mui/material";
import { useContext, useState } from "react";
import { ProfileContext } from "../context/profilecontext";
import axios from "axios";  
import { Feedback } from "@mui/icons-material";

function ViewFeedback()
{   
    const [session_key,setSession_key]=useState()
    const [session_keyValidation,setSession_keyValidation]=useState()
    const [feedbackId,setFeedbackId]=useState()
    const [feedbackIdValidation,setFeedbackIdValidation]=useState()
    const [feedback,setFeedback]=useState()
    const [feedbackValidation,setfeedbackValidation]=useState()
    const [rating,setRating]=useState()
    const [ratingValidation,setRatingValidation]=useState()
    const [submitDate,setSubmitDate]=useState()
    const [submitDateValidation,setSubmitDateValidation]=useState()

    return (<div>
        <Paper elevation={4} style={{marginTop:"30px",width:"566px", marginLeft:"400px"}}>
        <div style={{marginLeft:"150px"}}>
            <h1>Feedback View</h1>

            {/* Enter SessionId <br/><Input type='text'  onChange={(e)=>{setSession_key(e.target.value)}} /> <br/>
        <p style={{color:"red"}}>{session_keyValidation}</p> */}

        Enter feedbackID <br/><Input type='text'  onChange={(e)=>{setFeedbackId(e.target.value)}} /> <br/>
        <p style={{color:"red"}}>{feedbackIdValidation}</p> 

        Enter feedback <br/><Input type='text' onChange={(e)=>{setFeedback(e.target.value)}}  /> <br/>
        <p style={{color:"red"}}>{feedbackValidation}</p> 

        Enter rating   <br/><Input type='text' onChange={(e)=>{setRating(e.target.value)}}    /> <br/>
        <p style={{color:"red"}}>{ratingValidation}</p> 

        Enter submitDate   <br/><Input type='text' onChange={(e)=>{setSubmitDate(e.target.value)}}    /> <br/>
        <p style={{color:"red"}}>{submitDateValidation}</p> 

        <Button style={{marginLeft:"50px"}} variant="outlined" onClick={()=>{

var Feedback={
    session_key:session_key,
    feedbackId:feedbackId,
    feedback:feedback,
    rating:rating,
    submitDate:submitDate

    }
    let key=localStorage.getItem('session_key')
     let url='http://localhost:8090/feedbacks/feedbackid/2?sessionKey='+key
      let headers={
        'Content-Type':'application/json'
    }
    axios.get(url,Feedback,{headers}).then((e)=>{
         console.log(e.data)
        }).catch((e)=>{
             console.log(e)
            })
            // if(session_key==undefined)
            // {
            //     setSession_keyValidation("session_key is blank")
            // }

                 if(feedbackId==undefined)
                {
                    setFeedbackId("feedbackID is blank")
                }
                else
                {
                    setFeedbackId(" ")
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
                    setRatingValidation("rating must be less than 10")
                }else
                {
                    setRatingValidation(" ")
                }


                if(submitDate==undefined)
                {
                    setSubmitDateValidation("submit date is blank")
                }
               else
                {
                    setSubmitDateValidation(" ")
                }

            }}> Submit</Button> 
        </div>
        </Paper>
        
    </div>);
}
export default ViewFeedback