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
    <div className='dashboard-items'>
      <div className="card-container">
        <h1 style={{display:"block"}}>Total Stock</h1>
      <h3 style={{display:"flex",justifyContent:"center"}} >{totalStock}</h3>
        </div>

        <div className="card-container">
        
        <h1 style={{display:"block"}}>Total Delivered</h1>
      <h3 style={{display:"flex",justifyContent:"center"}} >{totalDelivered}</h3>
      {setData}
        </div>

      <div className="card-container">
      <h1 style={{display:"block"}}> Low Stocks Items</h1>
      <h3 style={{display:"flex",justifyContent:"center"}} >{numberOfItemsWithLowStock}</h3>
      </div>
       
        
        
       
       
        
    </div>
  )
}

export default Dashboard