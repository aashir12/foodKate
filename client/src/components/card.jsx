import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useCart,useDispatchCart } from './contextReducer';
import '../App.css'

const Card = () => {
  var [foodData,setFood]=useState([]);
  var [foodCat,setCat]=useState([]);
  var [qty,setQty]=useState(1);
  var [sIze,setSize]=useState('small');

  var insideCart=useCart();
  var changeCart=useDispatchCart();

  var handleToCart = async (item) => {

    await changeCart({ type: 'ADD', id:item._id,name: item.productName,category:item.category,singleTotal:item.price*qty,singlePrice:item.price,quantity:qty,size:sIze,image:item.img});
    console.log("Cart:", insideCart);
   
 

}



  useEffect(
    ()=>{
      axios.get('http://localhost:8080/data').then(
        (res)=>{
          setFood(res.data.foodData);
          setCat(res.data.foodCat);
        }
      )
    },[]
  )
  return (
    <section style={{backgroundColor: '#292E36'}}>
 {
  foodCat.map(
    (data)=>(
      <div class="text-center container py-5">
    <h4 class="mt-4 mb-5" style={{color:"white"}}><strong>{data.category}</strong></h4>

    <div class="row">

      {
       
     foodData.filter(item => item.category===data.category).map(
      (item)=>(
        <div class="col-lg-4 col-md-12 mb-4">
        <div class="card">
          <div class="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
            data-mdb-ripple-color="light">
            <img src={item.img}
              class="w-100" style={{height:"28vh",objectFit:"cover"}} />
            <Link to="#">
              <div class="mask">
                <div class="d-flex justify-content-start align-items-end h-100">
                  <h5><span class="badge ms-2" style={{background:"#31363F"}}>{item.tag}</span></h5>
                </div>
              </div>
              <div class="hover-overlay">
                <div class="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
              </div>
            </Link>
          </div>
          <div class="card-body">
            <Link to="" class="text-reset">
              <h5 class="card-title mb-3">{item.productName}</h5>
            </Link>
            <Link to="" class="text-reset">
              <p>{item.category}</p>
            </Link>
          {
            <>
            <select id="ddlProducts" name="ddProducts" style={{padding:'3px',margin:'5px'}} onChange={(event)=>{  setQty(event.target.value)}}> 
            {
    Array.from({length: 5}, (_, index) => (
      <option key={index + 1}>{index + 1}</option>
    ))
  }

       </select>
       <select id="ddlProducts" name="ddProducts" style={{padding:'3px',margin:'5px'}} onChange={(event)=>{  setSize(event.target.value)}}>
    {Object.keys(item.size).map((size, sizeIndex) => (
        <option key={sizeIndex}>{size}</option>
    ))}
</select>



            <h6 class="mb-3" key={item._id}>${item.price}</h6>
            </>
          }
          </div>
     
          <button onClick={() => handleToCart(item)} style={{border:"none",background:"#E1B168",color:"#292E36",fontWeight:'bolder'}}>Add to Cart</button>

        </div>
      </div>
      )
     )
     }


      
    </div>


  </div>
    )
  )
 }
</section>
  )
}

export default Card