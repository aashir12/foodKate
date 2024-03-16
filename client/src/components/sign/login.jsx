import './sign.css'
import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'



const Login = () => {
  const [val,valFun]=useState({
    email:'',
    password:'',
  })
  var navigate=useNavigate();

  function Changer(event){
    var {name,value}=event.target;
    valFun(prev => ({ ...prev, [name]: value }));
   

  }
  function Clicker(event){
    event.preventDefault();

    axios.post('http://localhost:8080/login',val).then(
     (res)=>{
 
      if(res){
        alert('Logged Inn')
       localStorage.setItem("authToken",res.data.authToken)
       localStorage.setItem("userEmail",val.email)
       navigate('/')
       
      }
     }
    ).catch(
      (err)=>alert('error')
    )
 

    }
  return (
    <>
 
<section class=" text-center text-lg-start">
  <div class="card mb-3">
    <div class="row g-0 d-flex align-items-center" style={{backgroundColor:'#292E36'}}>
      <div class="col-lg-4 d-none d-lg-flex">
        <img src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvb2R8ZW58MHx8MHx8fDA%3D" alt="Trendy Pants and Shoes"
          class="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5" />
      </div>
      <div class="col-lg-8" >
        <div class="card-body py-5 px-md-5">

          <form onSubmit={Clicker}>
          
            {/* <!-- Email input --> */}
            <div class="form-outline mb-4">
            <label class="form-label" htmlFor="form2Example1"  style={{color:'white'}}>Email address</label>
              <input type="email" placeholder="abc@email.com" id="form2Example1" class="form-control" name='email' value={val.email} onChange={Changer}/>

            </div>

            {/* <!-- Password input --> */}
            <div class="form-outline mb-4">
            <label class="form-label"  htmlFor="form2Example2"  style={{color:'white'}}>Password</label>
              <input type="password" placeholder="xxxxxx" id="form2Example2" class="form-control" name='password' value={val.password} onChange={Changer}/>

            </div>

          
            {/* <!-- 2 column grid layout for inline styling --> */}
            <div class="row mb-4">
              <div class="col d-flex justify-content-center">
                {/* <!-- Checkbox --> */}
                <div class="form-check">
                <Link class="form-check-label" to="/" style={{color:"#E1B168"}}>Go Back  </Link>
                </div>
              </div>

              <div class="col">
                {/* <!-- Simple link --> */}
                <Link to="/sign" style={{color:"#E1B168"}}>Don't have an Account</Link>
              </div>
            </div>

            {/* <!-- Submit button --> */}
            <button type="submit" class="btn  btn-block mb-4 signButton">Sign in</button>

          </form>

        </div>
      </div>
    </div>
  </div>
</section>
{/* <!-- Section: Design Block --> */}
  </>
  )
}

export default Login