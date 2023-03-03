import { Input,Button,Paper } from "@mui/material";
import { useState } from "react";
import { ItemArray } from "./data";
function AddForm()
{
    const [itemname,setItemName]=useState()
    const [price,setPrice]=useState()
    const [quality,setQuality]=useState()

    return (<div>
        
        <Paper>
        <h3>Add Product Details</h3>
        Enter Item Name <Input type='text'  onChange={(e)=>{setItemName(e.target.value)}}/> <br/>
        Enter the price  <Input type='text'  onChange={(e)=>{setPrice(e.target.value)}}/> <br/>
        Enter the Quality  <Input type='text'  onChange={(e)=>{setQuality(e.target.value)}}/> <br/>
        <Button onClick={()=>{
            var item={
                itemname:itemname,
                price:price,
                quality:quality
            }
            ItemArray.push(item)
            console.log(ItemArray)
        }}> Save Item</Button>
        </Paper>
    </div>); 
}

export default AddForm