
import { Input,Button,Paper,Card, TableCell,TableContainer,Table,TableHead,TableRow } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { ProfileContext } from "../context/profilecontext";
import axios from "axios";
import NavigationBar from "../components/NavigationBar";
 

function ViewHotel()
{
    
  const [message, setMessage] = useState([]);

  useEffect(() => {
    let sessionKey = localStorage.getItem('session_key');
    axios.get(`http://localhost:8090/hotel/viewAllHotels?sessionKey=${sessionKey}`)
      .then((response) => {
        setMessage(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

    return (<div class="col-8" style={{border: '2px solid black'}}>
    <br/>
    <table class="table  table-bordered table-striped table-hover">
  <thead class="table-dark">
    <tr>
      <th>Hotel Id</th>
      <th>Hotel Name</th>
      <th>Hotel Address</th>
      <th>Hotel Type</th>
      <th>Hotel Description</th>
      <th>Hotel Rent</th>
      <th>Hotel Status</th>
      
    </tr>
  </thead>
  <tbody>
  {message.map((e) => {
        return (
        <tr key={e.hotelDescription}>
          <td>{e.hotel_Id}</td>
          <td>{e.hotelName}</td>
          <td>{e.hotelAddress.city}</td>
          <td>{e.hotelType}</td>
          <td>{e.hotelDescription}</td>
          <td>{e.hotelRent}</td>
          <td>{e.hotelStatus}</td>
          
        </tr>
       );
      })}
  </tbody>
</table>
</div>  
  );
    
}
export default ViewHotel