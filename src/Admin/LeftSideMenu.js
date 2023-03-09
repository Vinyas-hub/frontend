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
import search  from "../image/search.png";

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


    return (
        <div className="col-md-2">
            <ul class="list-group list-group-flush">
            <Link to="/admin/dashboard/addBus" className="nav-link">
                <li class="list-group-item" style={{backgroundColor:"antiquewhite"}}>
                     <img src={addbus} width="25px" height="25px"/>&nbsp; Add Bus 
                </li>
            </Link>
            <Link to="/admin/dashboard/viewBus" className="nav-link">
                <li class="list-group-item" style={{backgroundColor:"antiquewhite"}}>
                      <img src={newbus} width="25px" height="25px"/>   
                &nbsp; View Bus</li>
            </Link> 
            <Link to="/admin/dashboard/viewAllBus" className="nav-link">
                <li class="list-group-item" style={{backgroundColor:"antiquewhite"}}>
                      <img src={newbus} width="25px" height="25px"/>   
                &nbsp; View All Bus</li>
            </Link>
            <Link to="/admin/dashboard/addhotel" className="nav-link">
                <li class="list-group-item" style={{backgroundColor:"antiquewhite"}}>
                     <img src={hotel} width="25px" height="25px"/> &nbsp; Add Hotel </li> 
            </Link>
            <Link to="/admin/dashboard/addPackage" className="nav-link">
                <li class="list-group-item" style={{backgroundColor:"antiquewhite"}}>
                      <img src={travel} width="25px" height="25px"/> 
                     &nbsp; Add Package </li>
            </Link> 
            <Link to="/admin/dashboard/updateAdmin" className="nav-link">
                <li class="list-group-item" style={{backgroundColor:"antiquewhite"}}> 
                    <img src={update} width="25px" height="25px"/> &nbsp; update Admin 
                    </li>
            </Link> 
            <Link to="/admin/dashboard/viewAdmin" className="nav-link">
                <li class="list-group-item" style={{backgroundColor:"antiquewhite"}}>
                     <img src={viewcustomer} width="25px" height="25px"/>  
                    &nbsp; View Customer</li>
            </Link>
           
           <Link to="/admin/dashboard/addroute" className="nav-link">
             <li class="list-group-item" style={{backgroundColor:"antiquewhite"}}>
                    <img src={addroute} width="25px" height="25px"/>   
                    &nbsp; Add Route</li>
            </Link> 
            <Link to="/admin/dashboard/viewRoute" className="nav-link">
                <li class="list-group-item" style={{backgroundColor:"antiquewhite"}}>
                     <img src={tablet} width="25px" height="25px"/>  
                 &nbsp; view Route</li>
            </Link>

            <Link to="/admin/dashboard/viewHotel" className="nav-link">
                <li class="list-group-item" style={{backgroundColor:"antiquewhite"}}>
                     <img src={locationhotel} width="25px" height="25px"/>  
                    &nbsp; View Hotel</li>
            </Link>

            <Link to="/admin/dashboard/viewPackage" className="nav-link">
                <li class="list-group-item" style={{backgroundColor:"antiquewhite"}}>
                     <img src={travel} width="25px" height="25px"/>  
                    &nbsp; View Package</li>
            </Link>

            <Link to="/admin/dashboard/viewFeedback" className="nav-link">
                <li class="list-group-item" style={{backgroundColor:"antiquewhite"}}>
                     <img src={search} width="25px" height="25px"/>  
                    &nbsp; View Feedback</li>
            </Link>

            <Link to="/admin/dashboard/viewBooking" className="nav-link">
                <li class="list-group-item" style={{backgroundColor:"antiquewhite"}}>
                     <img src={viewdata} width="25px" height="25px"/>  
                    &nbsp; View Booking</li>
            </Link>

            <Link to="/admin/dashboard/viewAllBooking" className="nav-link">
                <li class="list-group-item" style={{backgroundColor:"antiquewhite"}}>
                     <img src={viewdata} width="25px" height="25px"/>  
                    &nbsp; View All Booking</li>
            </Link>


            <Button  >
            <Link class="nav-link" to="/HomeImg" onClick={()=>{

var Logout={
    userId:adminID,
    userType:userType
        }
        let key1=localStorage.getItem('adminID')
        let key2=localStorage.getItem('userType')
        let url=' http://localhost:8090/user/logout?userId='+key1+'&userType='+key2
        
        alert('Logout Sucessfully')
        localStorage.removeItem('session_key')
        localStorage.removeItem('adminID')
        localStorage.removeItem('userType')
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
                <li class="list-group-item" style={{backgroundColor:"antiquewhite", width:"245px"}}>
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