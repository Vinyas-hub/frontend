
import { Input,Button,Paper } from "@mui/material";
import { useContext, useState } from "react";
import { ProfileContext } from "../context/profilecontext";
import axios from "axios";

function AddCustomer()
{
    const [response,setResponse]=useState() //this is hook for getting that console info on frontend

    const [customerID,setCustomerID]=useState()
    const [customerIDValidation,setCustomerIDValidation]=useState()
    const [customerName,setCustomerName]=useState()
    const [customerNameValidation,setCustomerNameValidation]=useState()
    const [customerPassword,setCustomerPassword]=useState()
    const [customerPasswordValidation,setCustomerPasswordValidation]=useState()
    const [address,setAddress]=useState()
    const [addressValidation,setAddressValidation]=useState()
    const [email,setEmail]=useState()
    const [emailValidation,setEmailValidation]=useState()
    const [mobile,setMobile]=useState()
    const [mobileValidation,setMobileValidation]=useState()
    return (<div>
        <Paper elevation={8} style={{marginTop:"30px",width:"566px", marginLeft:"400px"}}>
        <div style={{marginLeft:"150px"}}>
            <h1>Register customer</h1>
          
            
        Enter customer ID <br/><Input type='text'  onChange={(e)=>{setCustomerID(e.target.value)}} /> <br/>
        <p style={{color:"red"}}>{customerIDValidation}</p> 

        Enter customer Name <br/><Input type='text' onChange={(e)=>{setCustomerName(e.target.value)}}  /> <br/>
        <p style={{color:"red"}}>{customerNameValidation}</p> 

        Enter  customerPassword <br/><Input type='text' onChange={(e)=>{setCustomerPassword(e.target.value)}}  /> <br/>
        <p style={{color:"red"}}>{customerPasswordValidation}</p> 
        Enter  address <br/><Input type='text' onChange={(e)=>{setAddress(e.target.value)}}  /> <br/>
        <p style={{color:"red"}}>{addressValidation}</p> 
        

        Enter Email <br/><Input type='text' onChange={(e)=>{setEmail(e.target.value)}}    /> <br/>
        <p style={{color:"red"}}>{emailValidation}</p> 

       
        Enter Mobile<br/><Input type='text' onChange={(e)=>{setMobile(e.target.value)}}   /> <br/>
        <p style={{color:"red"}}>{mobileValidation}</p>
       
    <Button style={{marginLeft:"50px"}} variant="outlined" onClick={()=>{

var Customer={
   
    customerID:customerID,
    customerName:customerName,
    customerPassword:customerPassword,
    address:address,
    email:email,
     mobile:mobile
}
let url='http://localhost:8090/customers/addcustomer'
let headers={
    'Content-Type':'application/json'
}
axios.post(url,Customer,{headers}).then((e)=>{
    console.log(e.data)
   }).catch((e)=>{
        console.log(e)
       })

                 if(customerID==undefined)
                {
                    setCustomerIDValidation("customerID ID is blank")
                }
                // else if(adminID.length)
                // {
                //     setAdminIDValidation("Admin ID  less then 3")
                //}
                // else
                // {
                //     setAdminIDValidation(" ")
                // }


                if(customerName==undefined)
                {
                    setCustomerNameValidation("customerName is blank")
                }
                else if(customerName.length<3)
                {
                    setCustomerNameValidation("customerName less then 3 words")
                }else
                {
                    setCustomerNameValidation(" ")
                }
                
                if(customerPassword==undefined)
                {
                    setCustomerPasswordValidation("customerPassword is blank")
                }
                else
                {
                    setCustomerPasswordValidation(" ")
                }
                if(address==undefined)
                {
                    setAddressValidation("address is blank")
                }
                else
                {
                    setAddressValidation(" ")
                }
                if(email==undefined)
                {
                    setEmailValidation("email is blank")
                }
                else
                {
                    setEmailValidation(" ")
                }


                if(mobile==undefined)
                {
                    setMobileValidation("mobile is blank")
                }
                else if(mobile.length<10)
                {
                    setMobileValidation("mobile is less then 10/")
                }else
                {
                    setMobileValidation(" ")
                }
                window.location.href = '/userlogin';
            }}> Submit</Button> 
        </div>
        </Paper>
        
    </div>);
}
export default AddCustomer
