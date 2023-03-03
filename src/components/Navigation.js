import { Outlet } from "react-router-dom";
import NavigationBar from "./NavigationBar";



function Navigation(){
    return(
        <div>
            <NavigationBar />
            <Outlet />
            {/* <HomeImg />  */}
        </div>

    )
}

export default Navigation;