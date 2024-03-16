import React, { useState } from 'react'
import CheckCart from '../components/checkCart';
import { useCart,useDispatchCart } from '../components/contextReducer';
import { useEffect } from 'react';
import axios from 'axios'



const Cart = () => {
 
  var insideCart=useCart();
  var editCart=useDispatchCart();
  var [singleToootal,setSingleTotal]=useState(0)
 
  useEffect(
    ()=>{
      let totall=0;
      
      insideCart.map(
        
        (item)=>{
        totall+=item.singleTotal;
        setSingleTotal(totall)
        }
       
        ,[insideCart]
      )
    }
  )
function clicker(){
  var email=localStorage.getItem("userEmail");
  axios.post('http://localhost:8080/sendData',{insideCart,email}).then(
   
      editCart({type:'empty'})
    
   
  )
  console.log(insideCart)
 
}
  return (
    <>
       {
        singleToootal!==0? 
        <>
        <div className='Cartcover'>
        
        <div className='itemCover'>
        <CheckCart title='Item Name' price='Item Price' qty='Quantity' size="size" total='Total'/>
      
      {
       insideCart.map(
       
         (item,keyId)=>(
           <CheckCart title={item.name} price={`$${item.singlePrice}`} qty={item.quantity} size={item.size} total={item.singleTotal} id={item.id} keyId={keyId} image={item.image} status="Delete"/>
         )
       )
      }
        </div>
          <div className='promo'>
              <input placeholder='Gift Or Promo Code here'/>
              <button>Apply</button>
          </div>
          <hr style={{width:'85%',margin:'5% auto'}}></hr>
          <div className='amount'>
              <h4>Subtotal : ${singleToootal.toFixed(2)}</h4>
              <h4>Shipping : Free</h4>
              <h4>Total: ${singleToootal.toFixed(2)}</h4>
          </div>
          <button onClick={clicker}>Checkout</button>
      </div>
        </>:
        <>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'70vh'}}>
        <div className='itemCover' style={{height:'50vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
          <h1>No Item Added</h1>
        </div>
        </div>
        </>
       }
    </>
  )
}

export default Cart