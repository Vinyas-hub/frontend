import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import AddForm from './viewcomponents/addform';
import Navigation from './components/Navigation';
import AdminDashboard from './components/AdminDashBoard';
import Login from './Authentication/login';
import AdminRegistration from './auth/adminReg';
import PackageAdd from './Admin/addPackage';
import AddReport from './Admin/addReport';
import RouteReg from './Route/addroute';
import DeleteHotel from './hotel/deleteHotel';
import ViewAdmin from './Admin/viewAdmin';
import UpdateAdmin from './Admin/updateAdmin';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import BusReg from './Bus/addBus';
import DeleteAdmin from './Admin/deleteAdmin';
import DeleteCustomer from './Customer/deleteCustomer';
import HomeImg from './components/HomeImg';
import Logout from './Authentication/logout';
import ViewBooking from './Booking/viewBooking';
import ViewBus from './Bus/viewBus';
import AddFeedback from './Feedback/addFeedback';
import ViewFeedback from './Admin/viewFeedback';
import MakePayment from './Payment/makePayment';
import ViewRoute from './Route/viewRoute';
import Dashboard from './auth/Dashboard';
import ViewHotel from './hotel/viewHotel';
import ViewAllPackage from './package/viewPackage';
import UserLogin from './Authentication/userlogin';
import AddCustomer from './Customer/addCustomer';
import AddHotel from './Admin/addHotel';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <BrowserRouter>    
    <Routes>
        <Route path="/" element={<Navigation/>}>
         <Route path="/HomeImg" element={<HomeImg/>} /> 
        <Route path="/adminReg" element={<AdminRegistration />} />
        <Route path="/addCustomer" element={<AddCustomer/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/userlogin" element={<UserLogin/>} />
        </Route>

        <Route path="/admin/dashboard" element={<AdminDashboard />} >
          <Route path="addBus" element={<BusReg />} />
          <Route path="viewBus" element={<ViewBus />} />
          <Route path="addHotel" element={<AddHotel />} />
          <Route path="addPackage" element={<PackageAdd />} />
          <Route path="addReport" element={<AddReport/>} />
          <Route path="updateAdmin" element={<UpdateAdmin/>} />
          <Route path="viewAdmin" element={<ViewAdmin/>} />
          {/* <Route path="deleteAdmin" element={<DeleteAdmin/>} />
           <Route path="deleteCustomer" element={<DeleteCustomer/>} />  */}
           <Route path="viewHotel" element={<ViewHotel/>} /> 
           <Route path="logout" element={<Logout/>} /> 
        </Route>


         <Route path="/user/dashboard" element={<Dashboard />} > 
         <Route path="viewBooking" element={<ViewBooking />} />
       
          <Route path="addFeedback" element={<AddFeedback />} />
          <Route path="viewFeedback" element={<ViewFeedback />} />
          <Route path="makePayment" element={<MakePayment />} />
          <Route path="viewRoute" element={<ViewRoute />} />
          <Route path="viewPackage" element={<ViewAllPackage />} />
          </Route>
    </Routes>
    </BrowserRouter>
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
