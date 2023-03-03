import { Input,Button,Paper, Card } from "@mui/material";
import { useContext, useState } from "react";
import { ProfileContext } from "../context/profilecontext";
import axios from "axios";  
import { Feedback } from "@mui/icons-material";
const [session_key,setSession_key]=useState()


function ViewFeedback()
{  
    const[message,setMessage] = useState([]);
    useEffect(()=>{
       axios.get("http://localhost:8090/feedbacks/viewallfeedbacks").then((e)=>{
               setMessage(e.data);
    })
           },[]);
            return(
                <div>
                    <h4> Admin can see medicines list</h4>
                    <table className="table" >
                        <tr scope="row" >
                            <th>Id</th>
                             <th>Name</th>
                             <th>STOCK</th>
                             <th>PRICE</th>
                              </tr>
                              {message.map((e)=>{
                                return (
                                    <tr>
                                       <td>{e.feedbackId}</td>
                                        <td>{e.feedback}</td>
                                        <td>{e.rating}</td>
                                        <td>{e.submitDate}</td>
                                         </tr> 
                                          )
                                          })} </table><NavigationBar/>
                                           </div>
                                            )
                    
                   }
export default ViewFeedback