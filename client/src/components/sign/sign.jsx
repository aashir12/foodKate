import './sign.css'
import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'


const Sign = () => {
  const [val,valFun]=useState({
    name:'',
    email:'',
    password:'',
    address:''
  })
  const navigate=useNavigate();

  function Changer(event) {
    var { name, value } = event.target;
    valFun(prev => ({ ...prev, [name]: value }));
}


  function Clicker(event){
    event.preventDefault();

    
    
console.log(val)
    axios.post('http://localhost:8080/sign',val).catch(
      (err)=>alert('error')
    )


    }

  return (
  <>
    {/* <!-- Section: Design Block --> */}
<section class=" text-center text-lg-start">
  <div class="card mb-3">
    <div class="row g-0 d-flex align-items-center" style={{backgroundColor:'#292E36',color:"white"}}>
      <div class="col-lg-4 d-none d-lg-flex">
        <img src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvb2R8ZW58MHx8MHx8fDA%3D" alt="Trendy Pants and Shoes"
          class="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5" />
      </div>
      <div class="col-lg-8">
        <div class="card-body py-5 px-md-5">

          <form onSubmit={Clicker}>
             {/* <!-- Name input --> */}
             <div class="form-outline mb-4">
             <label class="form-label" htmlFor="form2Example1"  >Name</label>
              <input type="text" id="form2Example0"  class="form-control"  placeholder='Alex' name='name' value={val.name} onChange={Changer} required/>

            </div>
            {/* <!-- Email input --> */}
            <div class="form-outline mb-4">
            <label class="form-label" htmlFor="form2Example1" >Email address</label>
              <input type="email" id="form2Example1" class="form-control" placeholder='abc@email.com' name='email' value={val.email} onChange={Changer} required/>

            </div>

            {/* <!-- Password input --> */}
            <div class="form-outline mb-4">
            <label class="form-label" htmlFor="form2Example2"  >Password</label>
              <input type="password" id="form2Example2" class="form-control"  placeholder='xxxxxx' name='password' value={val.password} onChange={Changer} required/>

            </div>

            {/* <!-- address input --> */}
            <div class="form-outline mb-4">
            <label class="form-label" htmlFor="form2Example2"   >Address</label>
              <input type="text" id="form2Example3" class="form-control"  placeholder='house no street no city country' name='address' value={val.address} onChange={Changer} required/>

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
                <Link to="/login" style={{color:"#E1B168"}}>Already have an account</Link>
               
              </div>
            </div>

            {/* <!-- Submit button --> */}
            <button type="submit" class="btn btn-primary btn-block mb-4 signButton" style={{border:"none"}}>Sign in</button>

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

export default Sign