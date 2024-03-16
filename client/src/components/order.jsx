import React, { useState } from 'react'
import CheckCart from '../components/checkCart';
import { useCart,useDispatchCart } from '../components/contextReducer';
import { useEffect } from 'react';
import axios from 'axios';


const Order = () => {
  var insideCart=useCart();
  var [item,setItem]=useState([])
  const [forceRender, setForceRender] = useState(false);

  
  useEffect(
    ()=>{
  axios.get("http://localhost:8080/sendData").then(
    (res)=>{
 
        setItem(res.data.datas)

    }
  ).then(
    console.log(item)
  )
  
    },[]
  
  )
  return (
    <>
       <div className='Cartcover'>
        
        <div className='itemCover'>
        <CheckCart title='Item Name' price='Item Price' qty='Quantity' size="size" total='Total'/>
      
      {
       item.filter(item => item.email===localStorage.getItem("userEmail")).map(
         (item,keyId)=>(
           <CheckCart title={item.name} price={item.time} qty={item.qty} size={item.size} total={item.total} id={item.id} keyId={keyId} image={item.img} status="Taken"/>
         )
       )
      }
        </div>
         
 
          
         
      </div>
    </>
  )
}

export default Order