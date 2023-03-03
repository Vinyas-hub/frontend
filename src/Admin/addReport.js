import { Input,Button,Paper } from "@mui/material";
import { useContext, useState } from "react";
import { ProfileContext } from "../context/profilecontext";
import axios from "axios";  


function AddReport()
{   
    const [session_key,setSession_key]=useState()
    const [session_keyValidation,setSession_keyValidation]=useState()
    const [reportID,setReportID]=useState()
    const [reportIDValidation,setReportIDValidation]=useState()
    const [reportName,setReportName]=useState()
    const [reportNameValidation,setReportNameValidation]=useState()
    const [reportType,setReportType]=useState()
    const [reportTypeValidation,setReportTypeValidation]=useState()

    return (<div>
        <Paper elevation={4} style={{marginTop:"30px",width:"566px", marginLeft:"400px"}}>
        <div style={{marginLeft:"150px"}}>
            <h1>Report Add</h1>

            Enter SessionId <br/><Input type='text'  onChange={(e)=>{setSession_key(e.target.value)}} /> <br/>
        <p style={{color:"red"}}>{session_keyValidation}</p>

        Enter reportID <br/><Input type='text'  onChange={(e)=>{setReportID(e.target.value)}} /> <br/>
        <p style={{color:"red"}}>{reportIDValidation}</p> 

        Enter Report Name <br/><Input type='text' onChange={(e)=>{setReportName(e.target.value)}}  /> <br/>
        <p style={{color:"red"}}>{reportNameValidation}</p> 

        Enter reportType   <br/><Input type='text' onChange={(e)=>{setReportType(e.target.value)}}    /> <br/>
        <p style={{color:"red"}}>{reportTypeValidation}</p> 


        <Button style={{marginLeft:"50px"}} variant="outlined" onClick={()=>{

var Report={
    session_key:session_key,
    reportID:reportID,
    reportName:reportName,
    reportType:reportType

    }
     let url='http://localhost:8090/report/addReport?sessionKey='+session_key
      let headers={
        'Content-Type':'application/json'
    }
    axios.post(url,Report,{headers}).then((e)=>{
         console.log(e.data)
        }).catch((e)=>{
             console.log(e)
            })
            if(session_key==undefined)
            {
                setSession_keyValidation("session_key is blank")
            }

                 if(reportID==undefined)
                {
                    setReportIDValidation("report ID is blank")
                }
                else
                {
                    setReportIDValidation(" ")
                }


                if(reportName==undefined)
                {
                    setReportNameValidation("reportName is blank")
                }
               else
                {
                    setReportNameValidation(" ")
                }
               
                if(reportType==undefined)
                {
                    setReportTypeValidation("report type is blank")
                }
                else
                {
                    setReportTypeValidation(" ")
                }

            }}> Submit</Button> 
        </div>
        </Paper>
        
    </div>);
}
export default AddReport 