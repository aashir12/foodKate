import React from 'react';
import '../App.css';
import { useCart,useDispatchCart } from './contextReducer';

const CheckCart = ({title,price,size,qty,total,id,keyId,status,image}) => {
  var insideCart=useCart();
  var changeCart=useDispatchCart();

  function deleter(){
    changeCart({type:'Remove',id:id})

  }
 
  return (
   <>
    <div className='CheckCart' style={typeof keyId === 'undefined'?{background:"#E1B168",color:"#292E36", borderTopLeftRadius: "15px",borderTopRightRadius: "15px"}:{backgroundColor:'white'}}>
    {typeof keyId === 'undefined'?<h4>Item</h4>:<img src={image} style={{height:"80%",objectFit:'fill'}}/>}
      
        <div>
            <h2>{title}</h2>
            <h4>{typeof keyId==='undefined'?'Price':price }</h4>
        
        </div>
        <h4>{qty}</h4>
        <h4>{size}</h4>
        <h4>{typeof keyId==='undefined'?'Total Price':parseInt(total).toFixed(2) }</h4>
        {typeof keyId === 'undefined' ?<h4>{status}</h4>:    <button onClick={deleter} style={status=='Taken'?{background:"#E1B168",color:"#292E36",border:"none",width:"8%",fontWeight:"bolder"}:{background:"#31363F",color:"white",border:"none",width:"8%",fontWeight:"bolder"}}>{status}</button>}
    
    </div>
    
    
   </>
  )
}

export default CheckCart