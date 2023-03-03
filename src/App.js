import logo from './logo.svg';
import './App.css';
//import Login from './auth/login';
import Registor from './auth/registration';
import ViewData from './viewcomponents/viewdata.js';
import { useState } from 'react';
import { ProfileContext } from './context/profilecontext';
import { BrowserRouter } from 'react-router-dom';
import AdminLogin from './auth/adminReg';
import PackageAdd from './Admin/addPackage';
import BusReg from './Bus/addBus';
import AddReport from './Admin/addReport';
import ViewFeedback from './Admin/viewFeedback';
import AddHotel from './Admin/addHotel';
import RouteReg from './Route/addroute';

import AddFeedback from './Feedback/addFeedback';

import MakePayment from './Payment/makePayment';
import DeleteBooking from './Booking/deleteBooking';
import AddBooking from './Booking/addBooking';
import ViewBooking from './Booking/viewBooking';
import ViewBus from './Bus/viewBus';
import ViewAllBus from './Bus/viewAllBus';
import ViewAllPayment from './Payment/viewAllPayment';
import ViewRoute from './Route/viewRoute';
import ViewHotel from './hotel/viewHotel';
import DeleteHotel from './hotel/deleteHotel';
import Login from './Authentication/login';
import Logout from './Authentication/logout';
import AddCustomer from './Customer/addCustomer';
import ViewCustomer from './Customer/viewCustomer';
import UpdateCustomer from './Customer/updateCustomer';
import NavigationBar from './components/NavigationBar';
import ViewAdmin from './Admin/viewAdmin';
import DeleteAdmin from './Admin/deleteAdmin';
import UpdateAdmin from './Admin/updateAdmin';
import DeleteCustomer from './Customer/deleteCustomer';




function App() {
  
 /* const[showPage, setShowPage]=useState(false)
  const[username, setUserName]=useState()
  const[password, setPassword]=useState()

  return <div> <ProfileContext.Provider value={{username,setUserName,password,setPassword,showPage,setShowPage}}>
      {showPage?<ViewData/>:<Login/>}
      </ProfileContext.Provider></div> */
      return <div>
        <NavigationBar/>
      </div>

  
}

export default App;
