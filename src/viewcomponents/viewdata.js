import { ItemArray } from "./data"
import { AppBar, Avatar, Button, IconButton, Input, Table, Toolbar } from "@mui/material"
import TableContainer from "@mui/material/TableContainer"
import TableCell from "@mui/material/TableCell"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import { useContext, useState } from "react"
import { ProfileContext } from "../context/profilecontext"
import { Link,Outlet, Route,Routes } from "react-router-dom"
import { Add } from "@mui/icons-material"
import { Search } from "@mui/icons-material"
import AddForm from "./addform"
import { positions } from "@mui/system"

function ViewData()
{
    const[search,setSearch]=useState()
    const{username}=useContext(ProfileContext)
    return(
    <>
   
    <div>
        <AppBar>
            <Toolbar>
                
       
            <Avatar variant="round" sx={{width:"90px",background:"green",margin:"10px"}}>
                {username[0]+username[1]}
            </Avatar>

            <div style={{width:"900px",display:"flex"}} >

            <Input type="text" onChange={(e)=>{
                setSearch(e.target.value)
            }}/>
            <IconButton>
                <Search/>
            </IconButton>

           <Button variant="contained"><Link to="/addform"> Add a form </Link></Button>
           <Button variant="contained"><Link to="/addHotel"> Add a Hotel </Link></Button>

            </div>
            
            </Toolbar>
        </AppBar>
             <div style={{position:"relative",top:"80px"}}>   
        <TableContainer>
        <Table> 

            <TableHead>
                <TableRow>
            <TableCell>
                Item Name
            </TableCell>
                <TableCell>
                    Price
                </TableCell>
                <TableCell>
                    Quantity
                </TableCell>
                </TableRow>
            </TableHead>
       
    
    </Table>
      </TableContainer>
      
      
    </div>
    </div>
    <div style={{margin:"90px"}}>
    <Outlet></Outlet>
    </div>
    
   </>
    )}

export default ViewData