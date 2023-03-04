import { Link, Outlet } from "react-router-dom";

import addbus from "../image/addbus.jpeg";
import hotel from "../image/hotel.jpeg";
import locationhotel from "../image/locationhotel.jpeg";
import logout from "../image/logout.jpeg";
import update from "../image/update.jpeg";
import viewcustomer from "../image/viewcustomer.jpeg";
import viewdata from "../image/viewdata.jpeg";


function LeftSideMenu(){
    return (
        <div className="col-md-2">
            <ul class="list-group list-group-flush">
            <Link to="/admin/dashboard/addBus" className="nav-link">
                <li class="list-group-item">
                     <img src={addbus} width="25px" height="25px"/>&nbsp; Add Bus 
                </li>
            </Link>
            <Link to="/admin/dashboard/viewBus" className="nav-link">
                <li class="list-group-item">
                     {/* <img src={newbus} width="25px" height="25px"/>   */}
                &nbsp; View Bus</li>
            </Link> 
            <Link to="/admin/dashboard/viewAllBus" className="nav-link">
                <li class="list-group-item">
                     {/* <img src={newbus} width="25px" height="25px"/>   */}
                &nbsp; View All Bus</li>
            </Link>
            <Link to="/admin/dashboard/addhotel" className="nav-link">
                <li class="list-group-item">
                     <img src={hotel} width="25px" height="25px"/> &nbsp; Add Hotel </li> 
            </Link>
            <Link to="/admin/dashboard/addPackage" className="nav-link">
                <li class="list-group-item">
                     {/* <img src={package} width="25px" height="25px"/> */}
                     &nbsp; Add Package </li>
            </Link> 
            <Link to="/admin/dashboard/updateAdmin" className="nav-link">
                <li class="list-group-item">
                    <img src={update} width="25px" height="25px"/> &nbsp; update Admin 
                    </li>
            </Link> 
            <Link to="/admin/dashboard/viewAdmin" className="nav-link">
                <li class="list-group-item">
                     <img src={viewcustomer} width="25px" height="25px"/>  
                    &nbsp; View Customer</li>
            </Link>
           
           <Link to="/admin/dashboard/addroute" className="nav-link">
             <li class="list-group-item">
                    {/* <img src={addroute} width="25px" height="25px"/>   */}
                    &nbsp; Add Route</li>
            </Link> 
            <Link to="/admin/dashboard/viewRoute" className="nav-link">
                <li class="list-group-item">
                    {/* <img src={addroute} width="25px" height="25px"/>  */}
                 &nbsp; view Route</li>
            </Link>

            <Link to="/admin/dashboard/viewHotel" className="nav-link">
                <li class="list-group-item">
                     <img src={locationhotel} width="25px" height="25px"/>  
                    &nbsp; View Hotel</li>
            </Link>



            <Link class="nav-link" to="/admin/dashboard/logout">
                <li class="list-group-item">
                    {/* <img src={logout} width="25px" height="25px"/>  */}
                    &nbsp; Logout</li>
            </Link>

            </ul>
            <div>
            {/* /user/dashboard/createPost */}
                {/* <Outlet /> */}
            </div>
        </div>
    )
}

export default LeftSideMenu;