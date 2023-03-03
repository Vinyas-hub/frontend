import { Outlet } from "react-router-dom";
import AfterNavbar from "../views/AfterNavbar";
import LeftSideMenu from "../views/LeftSideMenu";


function Dashboard(){   
    return(
    <div>
        <div className="container">
            <AfterNavbar />
        </div>
        
        <div className="row" style={{marginTop:"60px"}}>
            <LeftSideMenu />
            <div className="col-md-10">
                <Outlet />
            </div>
        </div>
    </div>
    )
}

export default Dashboard;