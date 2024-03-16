import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useCart } from './contextReducer';

export default function Navbar() {
    let navigate = useNavigate();
     var viewCart=useCart()
   
    const handleLogout = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('userEmail');
        navigate("/login")
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg position-sticky"
                style={{  filter: 'blur(20)', position: "fixed", zIndex: "10", width: "100%" ,height:"10vh",borderBottom:"2px solid white"}}>
                <div className="container-fluid">
                    <Link className="navbar-brand fs-1 fst-italic" to="/"><img src='/foodKate.png' style={{height:"25vh"}}></img></Link>
                  
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link fs-5 mx-3 active" aria-current="page" to="/" style={{color:"#E1B168"}}>Home</Link>
                            </li>
                            {(localStorage.getItem("authToken")) ?
                                <li className="nav-item">
                                    <Link className="nav-link fs-5 mx-3 active cartCounter-cover" aria-current="page" to="/cart" style={{color:"#E1B168"}}>Cart<div className='cartCounter'>{viewCart.length}</div></Link>
                                </li> : ""}
                                <li className="nav-item">
                                    {localStorage.getItem("authToken")?<><Link className="nav-link fs-5 mx-3 active cartCounter-cover" aria-current="page" to="/orders" style={{color:"#E1B168"}}>Orders</Link></>:""}
                                </li>
                        </ul>
                        {(!localStorage.getItem("authToken")) ?
                            <div className="d-flex">
                                <Link className="btn  mx-1 " to="/login" style={{background:"#E1B168",color:"white"}}>Login</Link>
                                <Link className="btn   mx-1" to="/sign" style={{border:"1px solid #E1B168",color:"#E1B168"}}>Signup</Link>
                            </div> :
                            <button onClick={handleLogout} className="btn" style={{background:"#E1B168",color:"white"}}>Logout</button>}
                    </div>
                </div>
            </nav>
        </div>
    )
}
