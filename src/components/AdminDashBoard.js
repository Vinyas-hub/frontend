import { Outlet } from "react-router-dom";
import AfterNavbar from "../Admin/AfterNavBar";
import LeftSideMenu  from "../Admin/LeftSideMenu";

function AdminDashboard(){   
    return(
    <div>
        <div className="container">
            <AfterNavbar />
        </div>
        
        <div className="row" style={{marginTop:"60px"}}>
            <LeftSideMenu />
            <div className="col-md-10" style={{backgroundColor:"aliceblue"}} >
                <Outlet />
            </div>
        </div>
    </div>
    )
}

export default AdminDashboard;