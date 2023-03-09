import { Input,Button,Paper } from "@mui/material";
import { useContext, useState, useEffect } from "react";
import { ProfileContext } from "../context/profilecontext";
import axios from "axios";

function ViewRoute()
{

  const [message, setMessage] = useState([]);

  useEffect(() => {
    let sessionKey = localStorage.getItem('session_key');
    axios.get(`http://localhost:8090/Route/GetAll?sessionKey=${sessionKey}`)
      .then((response) => {
        setMessage(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  



    return (<div class="col-6" style={{border: '2px solid black'}}>
    <br/>
    <table class="table  table-bordered table-striped table-hover">
        
  <thead class="table-dark">
    <tr>
   
      <th>Route Id</th>
      <th>Route From</th>
      <th>Route To</th>
      <th>Pickup Point</th>
      <th>Fare</th>
      
    </tr>
  </thead>
  <tbody>
  
       {message.map((e) => {
        return (
        <tr key={e.routeId}>
             <td>{e.routeId}</td>
          <td>{e.routeFrom}</td>
          <td>{e.routeTo}</td>
          <td>{e.pickupPoint}</td>
          <td>{e.fare}</td>
          </tr> 
            );
          })}
  </tbody>
</table>
  </div>  
);
}
export default ViewRoute