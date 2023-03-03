import { Link, Outlet } from "react-router-dom";




function LeftSideMenu(){
    return (
        <div className="col-md-2">
            <ul class="list-group list-group-flush">
            <Link to="/admin/dashboard/addBus" className="nav-link">
                <li class="list-group-item">
                    {/* <img src={addmed} width="25px" height="25px"/>*/} &nbsp; Add Bus 
                </li>
            </Link>
            <Link to="/admin/dashboard/viewBus" className="nav-link">
                <li class="list-group-item">
                    {/* <img src={man} width="25px" height="25px"/>  */}
                &nbsp; View Bus</li>
            </Link> 
            <Link to="/admin/dashboard/addhotel" className="nav-link">
                <li class="list-group-item">
                    {/* <img src={lowstock} width="25px" height="25px"/>*/} &nbsp; Add Hotel </li> 
            </Link>
            <Link to="/admin/dashboard/addPackage" className="nav-link">
                <li class="list-group-item">
                    {/* <img src={man} width="25px" height="25px"/>*/ }&nbsp; Add Package </li>
            </Link> 
            <Link to="/admin/dashboard/updateAdmin" className="nav-link">
                <li class="list-group-item">
                    {/* <img src={ordplace} width="25px" height="25px"/> */}&nbsp; update Admin 
                    </li>
            </Link> 
            <Link to="/admin/dashboard/viewAdmin" className="nav-link">
                <li class="list-group-item">
                    {/* <img src={ar} width="25px" height="25px"/>  */}
                    &nbsp; View Customer</li>
            </Link>
           
           {/* <Link to="/admin/dashboard/deleteCustomer" className="nav-link">
             <li class="list-group-item">
                    <img src={reorderlist} width="25px" height="25px"/> 
                    &nbsp; Delete customer</li>
            </Link> */}

            <Link to="/admin/dashboard/viewHotel" className="nav-link">
                <li class="list-group-item">
                    {/* <img src={reorderlist} width="25px" height="25px"/>  */}
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