import { Input,Button,Paper, Card } from "@mui/material";
import { useContext, useState, useEffect } from "react";
import { ProfileContext } from "../context/profilecontext";
import axios from "axios";  
import { Feedback } from "@mui/icons-material";
import NavigationBar from "../components/NavigationBar";
import React from "react";

function ViewFeedback() {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8090/feedbacks/viewallfeedbacks").then((e) => {
      setMessage(e.data);
    });
  }, []);

  return (
    <div>
      <h4>All  FeedBack</h4>
      <table className="table  table-bordered table-striped table-hover">
        <thead class="table-dark">
          <tr>
            <th>FeedbackId</th>
            <th>Feedback</th>
            <th>Rating</th>
            <th>SubmitDate</th>
          </tr>
        </thead>
        <tbody>
          {message.map((e) => {
            return (
              <tr key={e.feedbackId}>
               <td>{e.feedbackId}</td>
                <td>{e.feedback}</td>
                <td>{e.rating}</td>
                <td>{e.submitDate}</td>
              </tr> 
            );
          })}
        </tbody>
      </table>
      <NavigationBar />
    </div>
  );
}

export default ViewFeedback;
