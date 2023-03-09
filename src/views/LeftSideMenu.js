
import { Link, Outlet } from "react-router-dom";
import addbus from "../image/addbus.jpeg";
import hotel from "../image/hotel.jpeg";
import locationhotel from "../image/locationhotel.jpeg";
import logout from "../image/logout.jpeg";
import update from "../image/update.jpeg";
import viewcustomer from "../image/viewcustomer.jpeg";
import viewdata from "../image/viewdata.jpeg";
import newbus from "../image/newbus.png";
import travel  from "../image/travel.png";
import addroute  from "../image/addroute.png";
import tablet  from "../image/tablet.png";
import booking  from "../image/booking.png";
import feedback  from "../image/feedback.png";
import search  from "../image/search.png";
import money  from "../image/money.png";
import pay  from "../image/pay.png";
import busstop  from "../image/busstop.png";

import { Input,Button,Paper } from "@mui/material";
import { useContext, useState } from "react";
import { ProfileContext } from "../context/profilecontext";
import axios from "axios";



function LeftSideMenu(){
    const [response,setResponse]=useState()
    const [message,setMessage]=useState()
    const [userType,setUserType]=useState() 
    const [userTypeValidation,setUserTypeValidation]=useState()
    const [adminID,setAdminID]=useState() 
    const [adminIDValidation,setAdminIDValidation]=useState()
    const [navigationmesasge,setNavigationMessage]=useState()
    return (
        <div className="col-md-2">
            <ul class="list-group list-group-flush">
                
            <Link to="/user/dashboard/addBooking" className="nav-link">
                <li class="list-group-item" style={{backgroundColor:"antiquewhite"}}>
                     <img src={booking} width="25px" height="25px"/> 
                 &nbsp; Booking</li>
            </Link>
            <Link to="/user/dashboard/viewBooking" className="nav-link">
                <li class="list-group-item" style={{backgroundColor:"antiquewhite"}}>
                     <img src={viewdata} width="25px" height="25px"/>   
                    &nbsp; View Booking</li>
               
            </Link>
             
            <Link to="/user/dashboard/addFeedback" className="nav-link">
                <li class="list-group-item" style={{backgroundColor:"antiquewhite"}}>
                     <img src={feedback} width="25px" height="25px"/>  
                &nbsp; AddFeedback </li>
            </Link>
            <Link to="/user/dashboard/viewFeedback" className="nav-link">
                <li class="list-group-item" style={{backgroundColor:"antiquewhite"}}>
                    <img src={search} width="25px" height="25px"/> 
                 &nbsp; viewFeedback</li>
            </Link>
            <Link to="/user/dashboard/makePayment" className="nav-link">
                <li class="list-group-item" style={{backgroundColor:"antiquewhite"}}>
                     <img src={money} width="25px" height="25px"/>  
                &nbsp; MakePayment</li>
            </Link>
            
            <Link to="/user/dashboard/viewPackage" className="nav-link">
                <li class="list-group-item" style={{backgroundColor:"antiquewhite"}}>
                     <img src={travel} width="25px" height="25px"/> 
                 &nbsp; View Package</li>
            </Link>
            <Link to="/user/dashboard/viewBus" className="nav-link">
                <li class="list-group-item" style={{backgroundColor:"antiquewhite"}}>
                    <img src={pay} width="25px" height="25px"/> 
                 &nbsp; View Bus</li>
            </Link>
            <Link to="/user/dashboard/viewHotel" className="nav-link">
                <li class="list-group-item" style={{backgroundColor:"antiquewhite"}}>
                     <img src={locationhotel} width="25px" height="25px"/> 
                 &nbsp; View Hotel</li>
            </Link>
            <Link to="/user/dashboard/viewRoute" className="nav-link">
                <li class="list-group-item" style={{backgroundColor:"antiquewhite"}}>
                     <img src={addroute} width="25px" height="25px"/> 
                 &nbsp; View Route</li>
            </Link>

            <Link to="/user/dashboard/viewAllBus" className="nav-link">
                <li class="list-group-item" style={{backgroundColor:"antiquewhite"}}>
                     <img src={busstop} width="25px" height="25px"/> 
                 &nbsp; View All Bus</li>
            </Link>
{/* 
            <Link to="/user/dashboard/viewBooking" className="nav-link">
                <li class="list-group-item" style={{backgroundColor:"antiquewhite"}}>
                     <img src={addroute} width="25px" height="25px"/> 
                 &nbsp; View All Booking</li>
            </Link> */}


<Button style={{marginLeft:"4px"}} variant="outlined" onClick={()=>{

var Logout={
    userId:adminID,
    userType:userType
        }
        let key3=localStorage.getItem('customerId')
        let key4=localStorage.getItem('customerType')
        let url=' http://localhost:8090/user/logout?userId='+key3+'&userType='+key4
          alert('Logout Sucessfully')

        //   localStorage.removeItem('session_key1')
        //   localStorage.removeItem('customerId')
        //   localStorage.removeItem('userType')
          localStorage.clear()
        
      let headers={
        'Content-Type':'application/json'
    }
    axios.post(url,Logout,{headers}).then((e)=>{
         console.log(e.data)
         setResponse(e.data)        //to show that hook

        }).catch((e)=>{
             console.log(e)
            })
             
                if(response!=undefined&& response.userType=="ADMIN"){
                    window.location.href = '/user/dashboard';
                    
                }
            }}> 
            <Link class="nav-link" to="/HomeImg">
                <li class="list-group-item" style={{backgroundColor:"antiquewhite", width:"242px"}}>
                    <img src={logout} width="25px" height="25px"/> 
                 &nbsp; Logout</li>
            </Link>
            </Button>
            </ul>
            <div>
            {/* /user/dashboard/createPost */}
                {/* <Outlet /> */}
            </div>
        </div>
    )
}

export default LeftSideMenu;