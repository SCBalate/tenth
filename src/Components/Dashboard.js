import React,{useState} from 'react'
import {inventoryData} from '../Constant/const';


const Dashboard = () => {

    const[data,setData]=useState(inventoryData);

   const totalStock = data.reduce((acc,curr)=>{
acc = acc + curr.stock;
return acc;
    },0)

const totalDelivered = data.reduce((acc,curr)=>{
        acc = acc + curr.delivered;
        return acc;
            },0)

 const itemsWithLowStock = inventoryData.filter(item => item.stock < 10);

    
 const numberOfItemsWithLowStock = itemsWithLowStock.length;

  return (
    <div>
        <div>{numberOfItemsWithLowStock}</div>
        <div>{totalStock} stock;</div>
        <div>{totalDelivered} stock;</div>
        
    </div>
  )
}

export default Dashboard