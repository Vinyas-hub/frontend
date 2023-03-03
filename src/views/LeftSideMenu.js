
import { Link, Outlet } from "react-router-dom";

function LeftSideMenu(){
    return (
        <div className="col-md-2">
            <ul class="list-group list-group-flush">
            <Link to="/user/dashboard/viewBooking" className="nav-link">
                <li class="list-group-item">
                    {/* <img src={medlist} width="25px" height="25px"/>   */}
                    &nbsp; Booking</li>
               
            </Link>
             
            <Link to="/user/dashboard/addFeedback" className="nav-link">
                <li class="list-group-item">
                    {/* <img src={order} width="25px" height="25px"/>  */}
                &nbsp; AddFeedback </li>
            </Link>
            <Link to="/user/dashboard/viewFeedback" className="nav-link">
                <li class="list-group-item">
                    {/* <img src={reqreord} width="25px" height="25px"/> */}
                 &nbsp; ViewFeedback</li>
            </Link>
            <Link to="/user/dashboard/makePayment" className="nav-link">
                <li class="list-group-item">
                    {/* <img src={storelist} width="25px" height="25px"/>  */}
                &nbsp; MakePayment</li>
            </Link>
            <Link to="/user/dashboard/viewRoute" className="nav-link">
                <li class="list-group-item">
                    {/* <img src={payment} width="25px" height="25px"/> */}
                 &nbsp; view Route</li>
            </Link>
            <Link to="/user/dashboard/viewPackage" className="nav-link">
                <li class="list-group-item">
                    {/* <img src={payment} width="25px" height="25px"/> */}
                 &nbsp; View Package</li>
            </Link>
            <Link class="nav-link" to="/home">
                <li class="list-group-item">
                    {/* <img src={logout} width="25px" height="25px"/> */}
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