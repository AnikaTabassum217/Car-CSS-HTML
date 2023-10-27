import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import BikeCard  from "../layouts/BikeCard";
const Bike=()=>{
    return (
        <div>
            
             <Navbar/>
             <BikeCard/>
             <Footer/>
            {/* This is a Bike page
            <br />
            <Link to ='/'>Car</Link> */}
        </div>
    )
}
export default Bike;